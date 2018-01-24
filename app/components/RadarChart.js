import React from 'react';
import { VictoryChart, VictoryBar,
  VictoryTheme, VictoryPolarAxis,
  VictoryStack, VictoryAxis,
  VictoryArea, VictoryGroup, VictoryLabel } from "victory-native";

export default class RadarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.processData(props.data),
      maxima: this.getMaxima(props.data)
    };
  }

  getMaxima(data) {
    const groupedData = Object.keys(data[0]).reduce((memo, key) => {
      memo[key] = data.map((d) => d[key]);
      return memo;
    }, {});
    return Object.keys(groupedData).reduce((memo, key) => {
      memo[key] = Math.max(...groupedData[key]);
      return memo;
    }, {});
  }

  processData(data) {
    const maxByGroup = this.getMaxima(data);
    const makeDataArray = (d) => {
      return Object.keys(d).map((key) => {
        return { x: key, y: d[key] / maxByGroup[key] };
      });
    };
    return data.map((datum) => makeDataArray(datum));
  }

  render() {
    console.info(this.state);
    return (
      <VictoryChart polar
        theme={VictoryTheme.material}
        domain={{ y: [ 0, 1 ] }}
      >
        <VictoryGroup
          style={{ data: { fillOpacity: 0.2, strokeWidth: 2 } }}
        >
          {this.state.data.map((item, i) => {
            return <VictoryBar key={i} data={item} />;
          })}
        </VictoryGroup>
      {
        Object.keys(this.state.maxima).map((key, i) => {
          return (
            <VictoryPolarAxis key={i} dependentAxis
              style={{
                axisLabel: { padding: 10 },
                axis: { stroke: "none" },
                grid: { stroke: "grey", strokeWidth: 0.25, opacity: 0.5 }
              }}
              tickLabelComponent={
                <VictoryLabel labelPlacement="vertical"/>
              }
              labelPlacement="perpendicular"
              axisValue={i + 1} label={key}
              tickFormat={(t) => Math.ceil(t * this.state.maxima[key])}
              tickValues={[0.25, 0.5, 0.75]}
            />
          );
        })
      }
        <VictoryPolarAxis
          labelPlacement="parallel"
          tickFormat={() => ""}
          style={{
            axis: { stroke: "none" },
            grid: { stroke: "grey", opacity: 0.5 }
          }}
        />

      </VictoryChart>

    );
  }
}
