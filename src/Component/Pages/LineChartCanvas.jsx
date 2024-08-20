import React from 'react';
import { useRef, useEffect } from 'react';

const LineChartCanvas = ({data}) => {

    const chartContainer = useRef(null);

    useEffect(() => {
        if(window.CanvasJS) {
            const LineChartCanvas = window.CanvasJS.Chart;
            const chart = new LineChartCanvas(chartContainer.current, {
              animationEnabled: true,
              theme: "light2",
              title: {
                text: "My Chart",
              },
              axisY: {
                title: "Value",
              },
              data: [
                {
                  type: "line",
                  dataPoints: data,
                },
              ],
            });
            chart.render();
        }
    },[data]);

  return <div ref={chartContainer} style={{height: '100%', width: '100%'}} />;
    
};

export default LineChartCanvas
