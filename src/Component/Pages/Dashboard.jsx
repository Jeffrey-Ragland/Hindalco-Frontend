import React from 'react';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import xymaLogo from '../Assets/xymaLogoWhite.png';
import hindalcoLogo from '../Assets/hindalcoLogo.png';
import {Chart} from 'react-google-charts';
import {Bar, Line} from 'react-chartjs-2';
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  scales,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const Dashboard = () => {
  // responsive gauge height
  const getGaugeHeight = () => {
    if (window.innerWidth > 1536) {
      return 150;
    }
    return 100;
  };

  const [gaugeHeight, setGaugeHeight] = useState(getGaugeHeight());

  useEffect(() => {
    const handleResize = () => {
      setGaugeHeight(getGaugeHeight());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // gauge chart
  const gaugeData1 = [
    ["Label", "Value"],
    ["S1", 80],
  ];

  const gaugeData2 = [
    ["Label", "Value"],
    ["S2", 65],
  ];

  const gaugeData3 = [
    ["Label", "Value"],
    ["S3", 34],
  ];

  const gaugeData4 = [
    ["Label", "Value"],
    ["S4", 59],
  ];

  const gaugeData5 = [
    ["Label", "Value"],
    ["S5", 98],
  ];

  const gaugeData6 = [
    ["Label", "Value"],
    ["S6", 32],
  ];

  const gaugeData7 = [
    ["Label", "Value"],
    ["S7", 45],
  ];

  const gaugeData8 = [
    ["Label", "Value"],
    ["S8", 72],
  ];

  const gaugeData9 = [
    ["Label", "Value"],
    ["S9", 21],
  ];

  const gaugeData10 = [
    ["Label", "Value"],
    ["S10", 60],
  ];

  const gaugeData11 = [
    ["Label", "Value"],
    ["S11", 12],
  ];

  const gaugeData12 = [
    ["Label", "Value"],
    ["S12", 8],
  ];

  const gaugeOptions = {
    // width: 200,
    height: gaugeHeight,
    greenFrom: 0,
    greenTo: 30,
    yellowFrom: 30,
    yellowTo: 60,
    redFrom: 60,
    redTo: 100,
    minorTicks: 5,
  };

  // bar chart
  const barData = {
    labels: [
      "s1",
      "s2",
      "s3",
      "s4",
      "s5",
      "s6",
      "s7",
      "s8",
      "s9",
      "s10",
      "s11",
      "s12",
    ],
    datasets: [
      {
        label: "Temperature",
        data: [65, 59, 80, 81, 56, 55, 76, 43, 21, 70, 84, 32],
        backgroundColor: (context) => {
          const value = context.raw;
          const maxValue = Math.max(...context.chart.data.datasets[0].data);
          return value === maxValue
            ? "rgba(255, 0, 0, 0.7)"
            : "rgba(75, 192, 192, 0.6)";
        },
        //  borderColor: "rgba(75, 192, 192, 1)",
        borderColor: (context) => {
          const value = context.raw;
          const maxValue = Math.max(...context.chart.data.datasets[0].data);
          return value === maxValue ? "red" : "rgba(75, 192, 192)";
        },
        borderWidth: 1,
        barPercentage: 1,
        categoryPercentage: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Peak Temperature Analysis",
        color: "#4B5563",
      },
      datalabels: {
        anchor: "end",
        align: "end",
        formatter: (value) => `${value}°C`,
        color: "#4B5563",
        font: {
          weight: "bold",
          size: 10,
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          color: "#4B5563",
          font: {
            size: 12,
            weight: "bold",
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "#4B5563",
          font: {
            size: 10,
          },
        },
      },
    },
  };

  // Static data for the table
  const tableData = [
    {
      sNo: 1,
      s1: 45,
      s2: 67,
      s3: 23,
      s4: 89,
      s5: 54,
      s6: 12,
      s7: 78,
      s8: 43,
      s9: 65,
      s10: 90,
      s11: 34,
      s12: 77,
      lastUpdated: "2024-08-17T10:00:00Z",
    },
    {
      sNo: 2,
      s1: 23,
      s2: 56,
      s3: 34,
      s4: 78,
      s5: 67,
      s6: 89,
      s7: 21,
      s8: 45,
      s9: 54,
      s10: 76,
      s11: 12,
      s12: 43,
      lastUpdated: "2024-08-16T10:00:00Z",
    },
    {
      sNo: 3,
      s1: 78,
      s2: 34,
      s3: 56,
      s4: 23,
      s5: 89,
      s6: 67,
      s7: 12,
      s8: 90,
      s9: 43,
      s10: 21,
      s11: 76,
      s12: 54,
      lastUpdated: "2024-08-15T10:00:00Z",
    },
    {
      sNo: 4,
      s1: 12,
      s2: 78,
      s3: 45,
      s4: 56,
      s5: 21,
      s6: 89,
      s7: 34,
      s8: 67,
      s9: 76,
      s10: 90,
      s11: 43,
      s12: 23,
      lastUpdated: "2024-08-14T10:00:00Z",
    },
    {
      sNo: 5,
      s1: 67,
      s2: 12,
      s3: 78,
      s4: 34,
      s5: 90,
      s6: 21,
      s7: 56,
      s8: 43,
      s9: 89,
      s10: 23,
      s11: 54,
      s12: 76,
      lastUpdated: "2024-08-13T10:00:00Z",
    },
    {
      sNo: 6,
      s1: 34,
      s2: 89,
      s3: 23,
      s4: 45,
      s5: 67,
      s6: 12,
      s7: 78,
      s8: 90,
      s9: 21,
      s10: 54,
      s11: 76,
      s12: 43,
      lastUpdated: "2024-08-12T10:00:00Z",
    },
    {
      sNo: 7,
      s1: 90,
      s2: 21,
      s3: 67,
      s4: 78,
      s5: 56,
      s6: 34,
      s7: 12,
      s8: 23,
      s9: 45,
      s10: 89,
      s11: 43,
      s12: 76,
      lastUpdated: "2024-08-11T10:00:00Z",
    },
    {
      sNo: 8,
      s1: 21,
      s2: 90,
      s3: 78,
      s4: 12,
      s5: 34,
      s6: 45,
      s7: 67,
      s8: 89,
      s9: 23,
      s10: 76,
      s11: 54,
      s12: 12,
      lastUpdated: "2024-08-10T10:00:00Z",
    },
    {
      sNo: 9,
      s1: 45,
      s2: 34,
      s3: 12,
      s4: 90,
      s5: 78,
      s6: 56,
      s7: 89,
      s8: 21,
      s9: 67,
      s10: 23,
      s11: 12,
      s12: 54,
      lastUpdated: "2024-08-09T10:00:00Z",
    },
    {
      sNo: 10,
      s1: 56,
      s2: 45,
      s3: 67,
      s4: 21,
      s5: 23,
      s6: 90,
      s7: 34,
      s8: 12,
      s9: 78,
      s10: 89,
      s11: 76,
      s12: 43,
      lastUpdated: "2024-08-08T10:00:00Z",
    },
    {
      sNo: 11,
      s1: 56,
      s2: 45,
      s3: 67,
      s4: 21,
      s5: 23,
      s6: 90,
      s7: 34,
      s8: 12,
      s9: 78,
      s10: 89,
      s11: 76,
      s12: 43,
      lastUpdated: "2024-08-08T10:00:00Z",
    },
    {
      sNo: 12,
      s1: 56,
      s2: 45,
      s3: 67,
      s4: 21,
      s5: 23,
      s6: 90,
      s7: 34,
      s8: 12,
      s9: 78,
      s10: 89,
      s11: 76,
      s12: 43,
      lastUpdated: "2024-08-08T10:00:00Z",
    },
    {
      sNo: 13,
      s1: 56,
      s2: 45,
      s3: 67,
      s4: 21,
      s5: 23,
      s6: 90,
      s7: 34,
      s8: 12,
      s9: 78,
      s10: 89,
      s11: 76,
      s12: 43,
      lastUpdated: "2024-08-08T10:00:00Z",
    },
    {
      sNo: 14,
      s1: 56,
      s2: 45,
      s3: 67,
      s4: 21,
      s5: 23,
      s6: 90,
      s7: 34,
      s8: 12,
      s9: 78,
      s10: 89,
      s11: 76,
      s12: 43,
      lastUpdated: "2024-08-08T10:00:00Z",
    },
    {
      sNo: 15,
      s1: 56,
      s2: 45,
      s3: 67,
      s4: 21,
      s5: 23,
      s6: 90,
      s7: 34,
      s8: 12,
      s9: 78,
      s10: 89,
      s11: 76,
      s12: 43,
      lastUpdated: "2024-08-08T10:00:00Z",
    },
  ];

  const lineData = {
    labels: Array.from({ length: 12 }, (_, i) => `Data ${i + 1}`),
    datasets: [
      {
        label: "s1",
        data: [65, 59, 80, 81, 56, 55, 76, 43, 21, 70, 84, 32],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: false,
      },
      {
        label: "s2",
        data: [56, 55, 76, 43, 21, 70, 80, 90, 100, 10, 21, 70],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: false,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw} units`;
          },
        },
      },
    },
  };

  return (
    <div
      className="h-screen p-4 text-white 2xl:text-2xl flex flex-col gap-2"
      style={{
        backgroundImage:
          "radial-gradient(circle, #4b5563, #47515f, #434d5c, #404a58, #3c4655, #384251, #353f4e, #313b4a, #2c3645, #283240, #232d3c, #1f2937)",
      }}
    >
      <div className="h-[14%] flex flex-col justify-center gap-2">
        {/* top bar */}
        <div className="flex justify-between">
          <div className="flex gap-4">
            <img src={xymaLogo} alt="xymaLogo" className="h-10 2xl:h-14" />
            <img
              src={hindalcoLogo}
              alt="hindalcoLogo"
              className="h-12 2xl:h-16"
            />
          </div>
          <div className="text-2xl font-medium">Temperature Measurement</div>
          <Link to="/">
            <button
              className="flex justify-end bg-red-600 px-3 py-1 rounded-md text-white font-medium hover:scale-105 duration-200"
              onClick={() => localStorage.clear()}
            >
              Logout
            </button>
          </Link>
        </div>

        {/* 2nd layer */}
        <div className="flex justify-between gap-2">
          {/* activity status */}
          <div className="flex gap-4 items-center">
            <div className="rounded-full w-8 h-8 2xl:w-12 2xl:h-12 flex justify-center items-center border border-white">
              A
            </div>
            <div className="text-sm font-medium">
              Click to see individual sensor data
            </div>
          </div>
          <div className="flex gap-2">
            {/* last update */}
            <div className="px-2 py-1 border border-white rounded-xl">
              Last update : 18:35 16-08-2024
            </div>
            {/* report */}
            <div
              className="px-2 py-1 rounded-xl text-[#173baa] text-sm font-medium"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #38ba98, #4ec494, #64cd90, #7bd68a, #92de84)",
              }}
            >
              Report generation
            </div>
          </div>
        </div>
      </div>

      <div className="h-[86%] flex flex-col gap-2">
        <div className="h-[60%] gap-2 flex ">
          {/* gauge */}
          <div className="w-[40%] border border-l-white border-r-white border-t-transparent border-b-transparent rounded-3xl">
            {/* 1st row */}
            <div className="h-1/3 flex">
              <div className="w-1/2 flex">
                <div className="w-1/2 flex items-center justify-center">
                  <Chart
                    chartType="Gauge"
                    data={gaugeData1}
                    options={gaugeOptions}
                  />
                </div>
                <div className="w-1/2 flex justify-center items-center">
                  <Chart
                    chartType="Gauge"
                    data={gaugeData2}
                    options={gaugeOptions}
                  />
                </div>
              </div>
              <div className="w-1/2 flex">
                <div className="w-1/2 flex justify-center items-center">
                  <Chart
                    chartType="Gauge"
                    data={gaugeData3}
                    options={gaugeOptions}
                  />
                </div>
                <div className="w-1/2 flex justify-center items-center">
                  <Chart
                    chartType="Gauge"
                    data={gaugeData4}
                    options={gaugeOptions}
                  />
                </div>
              </div>
            </div>

            {/* 2nd row */}
            <div className="h-1/3 flex">
              <div className="w-1/2 flex">
                <div className="w-1/2 flex justify-center items-center">
                  <Chart
                    chartType="Gauge"
                    data={gaugeData5}
                    options={gaugeOptions}
                  />
                </div>
                <div className="w-1/2 flex justify-center items-center">
                  <Chart
                    chartType="Gauge"
                    data={gaugeData6}
                    options={gaugeOptions}
                  />
                </div>
              </div>
              <div className="w-1/2 flex">
                <div className="w-1/2 flex justify-center items-center">
                  <Chart
                    chartType="Gauge"
                    data={gaugeData7}
                    options={gaugeOptions}
                  />
                </div>
                <div className="w-1/2 flex justify-center items-center">
                  <Chart
                    chartType="Gauge"
                    data={gaugeData8}
                    options={gaugeOptions}
                  />
                </div>
              </div>
            </div>

            {/* 3rd row */}
            <div className="h-1/3 flex">
              <div className="w-1/2 flex">
                <div className="w-1/2 flex justify-center items-center">
                  <Chart
                    chartType="Gauge"
                    data={gaugeData9}
                    options={gaugeOptions}
                  />
                </div>
                <div className="w-1/2 flex justify-center items-center">
                  <Chart
                    chartType="Gauge"
                    data={gaugeData10}
                    options={gaugeOptions}
                  />
                </div>
              </div>
              <div className="w-1/2 flex">
                <div className="w-1/2 flex justify-center items-center">
                  <Chart
                    chartType="Gauge"
                    data={gaugeData11}
                    options={gaugeOptions}
                  />
                </div>
                <div className="w-1/2 flex justify-center items-center">
                  <Chart
                    chartType="Gauge"
                    data={gaugeData12}
                    options={gaugeOptions}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=" w-[60%] flex gap-2">
            {/* 3d model */}
            <div
              className=" w-1/2 rounded-xl flex justify-center items-center text-gray-600"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #dbf2ff, #d6ebf9, #d1e4f3, #ccdced, #c8d5e7, #c2cfe3, #bdcadf, #b7c4db, #afbed8, #a7b8d5, #9eb3d2, #96adcf)",
              }}
            >
              3d model
            </div>
            {/* bar chart */}
            <div
              className=" w-1/2 rounded-xl py-1 px-1.5 text-gray-600"
              style={{
                backgroundImage:
                  "linear-gradient(to right top, #96adcf, #9eb3d2, #a7b8d5, #afbed8, #b7c4db, #bdcadf, #c2cfe3, #c8d5e7, #ccdced, #d1e4f3, #d6ebf9, #dbf2ff)",
              }}
            >
              <Bar data={barData} options={barOptions} height={"100%"} />
            </div>
          </div>
        </div>
        <div className=" h-[40%] flex gap-2">
          {/* table */}
          <div
            className=" w-1/2 rounded-xl text-gray-600 overflow-auto text-center text-xs"
            style={{
              backgroundImage:
                "linear-gradient(to right top, #96adcf, #9eb3d2, #a7b8d5, #afbed8, #b7c4db, #bdcadf, #c2cfe3, #c8d5e7, #ccdced, #d1e4f3, #d6ebf9, #dbf2ff)",
              scrollbarWidth: "thin",
              scrollbarColor: "#4bc0c0 transparent",
            }}
          >
            <table className="w-full">
              <thead className="sticky top-0 bg-[#4bc0c0] text-gray-600">
                <tr>
                  <th className="px-2 border border-gray-500">S.No</th>
                  <th className="px-2 border border-gray-500">S1</th>
                  <th className="px-2 border border-gray-500">S2</th>
                  <th className="px-2 border border-gray-500">S3</th>
                  <th className="px-2 border border-gray-500">S4</th>
                  <th className="px-2 border border-gray-500">S5</th>
                  <th className="px-2 border border-gray-500">S6</th>
                  <th className="px-2 border border-gray-500">S7</th>
                  <th className="px-2 border border-gray-500">S8</th>
                  <th className="px-2 border border-gray-500">S9</th>
                  <th className="px-2 border border-gray-500">S10</th>
                  <th className="px-2 border border-gray-500">S11</th>
                  <th className="px-2 border border-gray-500">S12</th>
                  <th className="px-2 border border-gray-500">
                    Last&nbsp;Updated
                  </th>
                </tr>
              </thead>

              <tbody>
                {tableData.map((row) => (
                  <tr key={row.sNo}>
                    <td className="border border-gray-500">{row.sNo}</td>
                    <td className="border border-gray-500">{row.s1}</td>
                    <td className="border border-gray-500">{row.s2}</td>
                    <td className="border border-gray-500">{row.s3}</td>
                    <td className="border border-gray-500">{row.s4}</td>
                    <td className="border border-gray-500">{row.s5}</td>
                    <td className="border border-gray-500">{row.s6}</td>
                    <td className="border border-gray-500">{row.s7}</td>
                    <td className="border border-gray-500">{row.s8}</td>
                    <td className="border border-gray-500">{row.s9}</td>
                    <td className="border border-gray-500">{row.s10}</td>
                    <td className="border border-gray-500">{row.s11}</td>
                    <td className="border border-gray-500">{row.s12}</td>
                    <td className="border border-gray-500">
                      {row.lastUpdated}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* line chart */}
          <div
            className=" w-1/2 rounded-xl text-gray-600"
            style={{
              backgroundImage:
                "linear-gradient(to right top, #96adcf, #9eb3d2, #a7b8d5, #afbed8, #b7c4db, #bdcadf, #c2cfe3, #c8d5e7, #ccdced, #d1e4f3, #d6ebf9, #dbf2ff)",
            }}
          >
            <Line data={lineData} options={lineOptions} width={"100%"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard
