import React from "react";
import { ResponsiveLine } from "@nivo/line";
const data = require("./data.json");

const Rwg = () => (
  <div className="size bg-transparent">
    <h5 className="ml-4">Weather Graph</h5>
    <ResponsiveLine
      data={data}
      margin={{ top: 100, right: 80, bottom: 130, left: 80 }}
      xScale={{ type: "point" }}
      xFormat=" >-"
      yScale={{
        type: "linear",
        min: "-16",
        max: "+16",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisLeft={{
        orient: "left",
        tickSize: 0,
        tickPadding: 13,
        tickRotation: 0,
        legend: "",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      axisTop={null}
      axisRight={null}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      enablePointLabel={true}
      pointLabel="y"
      pointLabelYOffset={-24}
      useMesh={true}
      enableCrosshair={false}
      legends={[
        {
          anchor: "top-left",
          direction: "row",
          justify: true,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 10,
          itemHeight: 5,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  </div>
);

export default Rwg;
