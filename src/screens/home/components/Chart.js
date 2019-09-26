import React from "react";
import { PieChart } from "react-native-svg-charts";
import { Text } from "react-native-svg";

class PieChartExample extends React.PureComponent {
  render() {
    const data = [
      {
        key: 1,
        value: 90,
        title: "Expenses",
        svg: { fill: "rgba(227,45,32,0.45)" }
      },
      {
        key: 2,
        value: 10,
        title: "Remainder",
        svg: { fill: "rgba(40,182,170,0.45)" }
      }
    ];

    const Labels = ({ slices, height, width }) => {
      return slices.map((slice, index) => {
        const { labelCentroid, pieCentroid, data } = slice;
        return (
          <Text
            key={index}
            x={pieCentroid[0]}
            y={labelCentroid[1]}
            fill="black"
            fontSize="13"
            fontWeight="regular"
          >
            {data.title}
          </Text>
        );
      });
    };

    return (
      <PieChart
        style={{ height: "100%" }}
        data={data}
        padAngle={0}
        outerRadius="95%"
      >
        <Labels />
      </PieChart>
    );
  }
}

export default PieChartExample;
