import React from 'react';
import { VictoryChart, VictoryBar,
  VictoryStack, VictoryAxis,VictoryLegend } from "victory-native";

export default class OhpColumnChart extends React.Component {

  // This is an example of a function you might use to transform your data to make 100% data
  transformData(dataset) {
    const totals = dataset[0].map((data, i) => {
      return dataset.reduce((memo, curr) => {
        return memo + curr[i].y;
      }, 0);
    });
    return dataset.map((data) => {
      return data.map((datum, i) => {
        return { x: datum.x, y: (datum.y / totals[i]) * 100 };
      });
    });
  }

  render() {
    const dataset = this.transformData(this.props.data);
    const tickFormat = Object.values(dataset[0]).map(item => item.x);
    return (
        <VictoryChart height={400} width={400}
          domainPadding={{ x: 30, y: 50 }}
        >
            <VictoryStack
              colorScale={["black", "blue", "tomato"]}
            >
              {dataset.map((data, i) => {
                return <VictoryBar data={data} key={i}/>;
              })}
            </VictoryStack>
            <VictoryAxis dependentAxis
              tickFormat={(tick) => `${tick}%`}
            />
            <VictoryAxis
              tickFormat={tickFormat}
            />
            <VictoryLegend x={125} y={50}
              orientation="horizontal"
              gutter={20}
              style={{ border: { stroke: "black" } }}
              data={[
                { name: "One", symbol: { fill: "tomato", type: "star" } },
                { name: "Two", symbol: { fill: "orange" }, labels: { fill: "orange" } },
                { name: "Three", symbol: { fill: "gold" } }
              ]}
            />
        </VictoryChart>
    );
  }
}
