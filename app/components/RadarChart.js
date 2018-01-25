import React from 'react';
import { VictoryChart, VictoryBar,
  VictoryTheme, VictoryPolarAxis,
  VictoryStack, VictoryAxis,
  VictoryArea, VictoryGroup,
  VictoryLabel,VictoryLegend } from "victory-native";

export default class RadarChart extends React.Component {
  constructor(props) {
    super(props);
  }

  processData(data, maxima) {
    const makeDataArray = (d) => {
      return Object.keys(d).map((key) => {
        return { x: key, y: d[key] / maxima[key] };
      });
    };
    return data.map((datum) => makeDataArray(datum));
  }

  render() {

    const maxima = this.props.maxima;
    const labels = this.props.labels;
    const data = this.processData(this.props.data, maxima);

    return (
      <VictoryChart polar
        theme={VictoryTheme.material}
        domain={{ y: [ 0, 1 ] }}
      >
        <VictoryGroup
          style={{ data: { fillOpacity: 0.2, strokeWidth: 2 } }}
        >
          {data.map((item, i) => {
            return <VictoryBar key={i} data={item} />;
          })}
        </VictoryGroup>
      {
        Object.keys(maxima).map((key, i) => {
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
              axisValue={i + 1} label={labels[key]}
              tickFormat={(t) => Math.ceil(t * maxima[key])}
              tickValues={[0.25, 0.5, 0.75]}
            />
          );
        })
      }
      <VictoryLabel
        x={300}
        y={50}
        text="陈燕"
      />
      </VictoryChart>

    );
  }
}
