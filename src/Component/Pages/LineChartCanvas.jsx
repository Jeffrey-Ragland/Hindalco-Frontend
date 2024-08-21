import React, { useState } from 'react';
import { useRef, useEffect } from 'react';

const LineChartCanvas = ({data}) => {

  // console.log('data in chart file', data);

  const chartContainer = useRef(null);
  const [chart, setChart] = useState(null);
  const [viewport, setViewport] = useState(null);

  const dataPoints = data.map((item, index) => ({
    // x: new Date(item.createdAt).toLocaleString('en-GB'),
    x: index + 1,
    y: parseInt(item.S1),
  })).reverse();

  console.log('datapoints', dataPoints);

  useEffect(() => {
    if (window.CanvasJS) {
      const LineChartCanvas = window.CanvasJS.Chart;
      const newChart = new LineChartCanvas(chartContainer.current, {
        zoomEnabled: true,
        theme: "light2",
        title: {},
        axisX: {
          // title: "Time",
          // labelAngle: -45, 
          // interval: 1,
          // valueFormatString: "string" 
        },
        axisY: {},
        data: [
          {
            type: "line",
            dataPoints: dataPoints,
          },
        ],
      });
      setChart(newChart);
      newChart.render();
    }
  }, []);

  useEffect(() => {
    if (chart) {
      // Check if axisX and axisY exist before accessing viewport properties
      const currentViewport = chart.options.axisX?.viewportMinimum !==
        undefined && {
        axisX: {
          viewportMinimum: chart.options.axisX.viewportMinimum,
          viewportMaximum: chart.options.axisX.viewportMaximum,
        },
        axisY: {
          viewportMinimum: chart.options.axisY?.viewportMinimum,
          viewportMaximum: chart.options.axisY?.viewportMaximum,
        },
      };

      setViewport(currentViewport);

      // Update chart with new data
      chart.options.data[0].dataPoints = dataPoints;
      chart.render();

      // Restore viewport state
      if (viewport) {
        chart.options.axisX.viewportMinimum =
          viewport.axisX.viewportMinimum;
        chart.options.axisX.viewportMaximum =
          viewport.axisX.viewportMaximum;
        if (viewport.axisY) {
          chart.options.axisY.viewportMinimum =
            viewport.axisY.viewportMinimum;
          chart.options.axisY.viewportMaximum =
            viewport.axisY.viewportMaximum;
        }
        chart.render();
      }
    }
  }, [data, chart]);

  return <div ref={chartContainer} style={{height: '100%', width: '100%'}} />;
    
};

export default LineChartCanvas
