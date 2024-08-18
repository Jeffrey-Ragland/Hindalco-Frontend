import React from 'react';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import xymaLogo from '../Assets/xymaLogoWhite.png';
import hindalcoLogo from '../Assets/hindalcoLogo.png';
import ReactSlider from 'react-slider';
import {Chart} from 'react-google-charts';
import {Bar, Line} from 'react-chartjs-2';
import ChartDataLabels from "chartjs-plugin-datalabels";
import ThreeDModel from './ThreeDModel';
import { LuExpand, LuShrink } from "react-icons/lu";
import { ImExit } from "react-icons/im";
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
  // const getGaugeHeight = () => {
  //   if (window.innerWidth > 1536) {
  //     return 150;
  //   }
  //   return 100;
  // };

  const getGaugeHeight = () => {
    if(window.innerWidth < 768) {
      return 75;
    } else if(window.innerWidth >= 768 && window.innerWidth < 1536) {
      return 100;
    } else if(window.innerHeight >= 1536) {
      return 150;
    }
  };

  const [gaugeHeight, setGaugeHeight] = useState(getGaugeHeight());
  const [lineSliderValues, setLineSliderValues] = useState([0, 1000]);
  const [lineGraphExpanded, setLineGraphExpanded] = useState(false);

  console.log("line graph expanded :", lineGraphExpanded);

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
        borderColor: "rgba(204, 0, 0, 1)",
        backgroundColor: "rgba(204, 0, 0, 0.2)",
        fill: false,
        tension: 0.4,
      },
      {
        label: "s2",
        data: [56, 55, 76, 43, 21, 70, 80, 90, 100, 10, 21, 70],
        borderColor: "rgba(0, 0, 204, 1)",
        backgroundColor: "rgba(0, 0, 204, 0.2)",
        fill: false,
        tension: 0.4,
      },
      {
        label: "s3",
        data: [45, 89, 67, 34, 78, 90, 12, 55, 66, 77, 83, 21],
        borderColor: "rgba(0, 204, 0, 1)",
        backgroundColor: "rgba(0, 204, 0, 0.2)",
        fill: false,
        tension: 0.4,
      },
      {
        label: "s4",
        data: [32, 48, 90, 77, 65, 53, 70, 86, 99, 40, 28, 62],
        borderColor: "rgba(204, 204, 0, 1)",
        backgroundColor: "rgba(204, 204, 0, 0.2)",
        fill: false,
        tension: 0.4,
      },
      {
        label: "s5",
        data: [88, 62, 79, 45, 23, 67, 85, 91, 34, 53, 80, 70],
        borderColor: "rgba(204, 132, 0, 1)",
        backgroundColor: "rgba(204, 132, 0, 0.2)",
        fill: false,
        tension: 0.4,
      },
      {
        label: "s6",
        data: [71, 84, 56, 34, 67, 89, 43, 52, 74, 91, 39, 63],
        borderColor: "rgba(102, 0, 102, 1)",
        backgroundColor: "rgba(102, 0, 102, 0.2)",
        fill: false,
        tension: 0.4,
      },
      {
        label: "s7",
        data: [99, 82, 61, 45, 56, 77, 34, 90, 64, 51, 72, 88],
        borderColor: "rgba(0, 204, 204, 1)",
        backgroundColor: "rgba(0, 204, 204, 0.2)",
        fill: false,
        tension: 0.4,
      },
      {
        label: "s8",
        data: [12, 34, 56, 78, 90, 23, 45, 67, 89, 34, 76, 80],
        borderColor: "rgba(204, 0, 204, 1)",
        backgroundColor: "rgba(204, 0, 204, 0.2)",
        fill: false,
        tension: 0.4,
      },
      {
        label: "s9",
        data: [56, 78, 90, 45, 34, 12, 67, 89, 23, 76, 80, 54],
        borderColor: "rgba(204, 153, 162, 1)",
        backgroundColor: "rgba(204, 153, 162, 0.2)",
        fill: false,
        tension: 0.4,
      },
      {
        label: "s10",
        data: [45, 67, 89, 23, 54, 76, 90, 12, 34, 67, 89, 45],
        borderColor: "rgba(132, 34, 34, 1)",
        backgroundColor: "rgba(132, 34, 34, 0.2)",
        fill: false,
        tension: 0.4,
      },
      {
        label: "s11",
        data: [78, 90, 23, 56, 45, 89, 12, 34, 67, 76, 90, 54],
        borderColor: "rgba(0, 102, 102, 1)",
        backgroundColor: "rgba(0, 102, 102, 0.2)",
        fill: false,
        tension: 0.4,
      },
      {
        label: "s12",
        data: [34, 56, 78, 90, 23, 45, 67, 89, 12, 76, 90, 54],
        borderColor: "rgba(0, 204, 0, 1)",
        backgroundColor: "rgba(0, 204, 0, 0.2)",
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          boxWidth: 20,
          boxHeight: 8,
          padding: 10,
          color: "#4B5563",
          font: {
            size: 8,
          },
        },
      },
      datalabels: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}°C`;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#4B5563",
          font: {
            size: 8,
          },
        },
      },
      y: {
        min: lineSliderValues[0],
        max: lineSliderValues[1],
        ticks: {
          color: "#4B5563",
          font: {
            size: 8,
          },
        },
      },
    },
  };

  return (
    <div
      className="xl:h-screen p-4 text-white 2xl:text-2xl flex flex-col gap-2"
      style={{
        backgroundImage:
          "linear-gradient(to right, #151c26, #1f2631, #28303c, #333b47, #3d4653, #434d5a, #495362, #4f5a69, #525e6d, #566171, #596576, #5d697a)",
      }}
    >
      {/* background-image: linear-gradient(to right, #61314b, #643550, #663956, #693d5b, #6b4161, #6c4465, #6e486a, #6f4b6e, #704f73, #715377, #72577c, #735b80); */}
      <div className="xl:h-[14%] flex flex-col justify-center gap-2">
        {/* top bar */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2 md:gap-4">
            <img
              src={xymaLogo}
              alt="xymaLogo"
              className="h-8 md:h-10 2xl:h-14"
            />
            <img
              src={hindalcoLogo}
              alt="hindalcoLogo"
              className="h-10 md:h-12 2xl:h-16"
            />
          </div>
          <div className="text-sm md:text-2xl font-medium">
            Temperature&nbsp;Measurement
          </div>
          <div className="w-auto md:w-[125px] flex justify-end">
            <Link to="/">
              <button
                class="logout-button"
                onClick={() => localStorage.clear()}
              >
                <div class="logout-logo ">
                  <ImExit className="text-xl" />
                </div>

                <div class="logout-text text-lg">Logout</div>
              </button>
            </Link>
          </div>
        </div>

        {/* 2nd layer */}
        <div className="flex flex-col-reverse md:flex-row justify-between gap-2">
          {/* activity status */}
          <div className="flex gap-4 items-center">
            <div className="rounded-full w-8 h-8 2xl:w-12 2xl:h-12 flex justify-center items-center border border-white">
              A
            </div>
            <div className="text-sm font-medium">
              Click to see individual sensor data
            </div>
          </div>
          <div className="flex items-center justify-between gap-2 text-xs md:text-sm">
            {/* last update */}
            <div className="px-2 py-1 border border-white rounded-xl">
              Last update : 18:35 16-08-2024
            </div>
            {/* report */}
            <div
              className="px-2 py-1 rounded-lg text-[#173baa] font-medium"
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

      <div className="relative xl:h-[86%] flex flex-col gap-4 xl:gap-2">
        <div className="xl:h-[60%] gap-4 xl:gap-2 flex flex-col xl:flex-row">
          <div className="w-full xl:w-[70%] flex flex-col md:flex-row gap-4 md:gap-2">
            {/* gauge */}
            <div className="w-full md:w-[55%] border border-l-white border-r-white border-t-transparent border-b-transparent rounded-3xl">
              {/* 1st row */}
              <div className="xl:h-1/3 flex">
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

            {/* bar chart */}
            <div
              className="w-full md:w-[45%] h-[300px] lg:h-[350px] xl:h-auto rounded-xl py-1 px-1.5 text-gray-600"
              style={{
                backgroundImage:
                  "linear-gradient(to right top, #96adcf, #9eb3d2, #a7b8d5, #afbed8, #b7c4db, #bdcadf, #c2cfe3, #c8d5e7, #ccdced, #d1e4f3, #d6ebf9, #dbf2ff)",
              }}
            >
              <Bar data={barData} options={barOptions} height={"100%"} />
            </div>
          </div>
          {/* 3d model */}
          <div
            className="w-full xl:w-[30%] h-[300px] lg:h-[400px] xl:h-auto rounded-xl text-gray-600"
            style={{
              backgroundImage:
                "radial-gradient(circle, #dbf2ff, #d6ebf9, #d1e4f3, #ccdced, #c8d5e7, #c2cfe3, #bdcadf, #b7c4db, #afbed8, #a7b8d5, #9eb3d2, #96adcf)",
            }}
          >
            <ThreeDModel />
          </div>
        </div>

        <div className="xl:h-[40%] flex flex-col xl:flex-row gap-4 xl:gap-2">
          {/* table */}
          <div
            className="w-full xl:w-1/2 h-[300px] lg:h-[400px] xl:h-auto rounded-xl text-gray-600 overflow-auto text-center text-[10px] md:text-xs"
            style={{
              backgroundImage:
                "linear-gradient(to right top, #96adcf, #9eb3d2, #a7b8d5, #afbed8, #b7c4db, #bdcadf, #c2cfe3, #c8d5e7, #ccdced, #d1e4f3, #d6ebf9, #dbf2ff)",
              scrollbarWidth: "thin",
              scrollbarColor: "#4bc0c0 transparent",
            }}
          >
            <table className="w-full">
              <thead
                className="sticky top-0 text-gray-600"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #4bc0c0, #49cccc, #45d9d9, #40e5e5, #3af2f2)",
                }}
              >
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
            className={`rounded-xl text-gray-600 py-1 px-1.5 ${
              lineGraphExpanded
                ? "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[95%] w-[95%] z-10"
                : "w-full xl:w-1/2 h-[300px] lg:h-[400px] xl:h-auto"
            }`}
            style={{
              backgroundImage:
                "linear-gradient(to right top, #96adcf, #9eb3d2, #a7b8d5, #afbed8, #b7c4db, #bdcadf, #c2cfe3, #c8d5e7, #ccdced, #d1e4f3, #d6ebf9, #dbf2ff)",
            }}
          >
            {/* top layer */}
            <div
              className={`flex justify-between items-center text-xs ${
                lineGraphExpanded ? "h-[8%]" : "h-[10%]"
              }`}
            >
              <div className='hidden md:block' onClick={() => setLineGraphExpanded(!lineGraphExpanded)}>
                <button class="expand-button px-4 flex gap-2">
                  {lineGraphExpanded ? (
                    <LuShrink className="icon text-[#4B5563] text-lg" />
                  ) : (
                    <LuExpand className="icon text-[#4B5563] text-base" />
                  )}
                  <span className="expand-text">
                    {lineGraphExpanded ? "Shrink" : "Expand"}
                  </span>
                </button>
              </div>
              <div
                className={`flex items-center px-2 py-1 font-medium ${
                  lineGraphExpanded ? "text-base" : "text-xs"
                }`}
              >
                <div className="mr-2">Set Limit:</div>
                <input
                  type="radio"
                  id="option1"
                  name="options"
                  value={100}
                  defaultChecked
                  // checked={utmapsLineLimit === 100}
                  className="cursor-pointer"
                  // onChange={handleLineLimit}
                />
                <label htmlFor="option1" className="mr-2 cursor-pointer">
                  100
                </label>
                <input
                  type="radio"
                  id="option2"
                  name="options"
                  value={300}
                  // checked={utmapsLineLimit === 500}
                  className="cursor-pointer"
                  // onChange={handleLineLimit}
                />
                <label htmlFor="option2" className="mr-2 cursor-pointer">
                  300
                </label>
                <input
                  type="radio"
                  id="option3"
                  name="options"
                  value={500}
                  // checked={utmapsLineLimit === 1000}
                  className="cursor-pointer"
                  // onChange={handleLineLimit}
                />
                <label htmlFor="option3" className="mr-2 cursor-pointer">
                  500
                </label>
                <input
                  type="radio"
                  id="option4"
                  name="options"
                  value={1000}
                  // checked={utmapsLineLimit === 1500}
                  className="cursor-pointer"
                  // onChange={handleLineLimit}
                />
                <label htmlFor="option4" className="mr-2 cursor-pointer">
                  1000
                </label>
              </div>
            </div>
            {/* bottom - line graph layer */}
            <div
              className={`flex ${lineGraphExpanded ? "h-[92%]" : "h-[90%]"}`}
            >
              {/* slider */}
              <div className="w-[8%] flex justify-center items-center">
                <ReactSlider
                  className="w-10 h-[94%] flex justify-center items-center "
                  thumbClassName="w-6 h-6 bg-[#4bc0c0] rounded-full flex items-center justify-center cursor-pointer text-gray-600 font-bold text-[10px] hover:scale-110 border border-gray-600 duration-200 focus:outline-none"
                  trackClassName="w-0.5 rounded-full bg-red-600"
                  min={0}
                  max={1000}
                  defaultValue={[0, 250]}
                  renderThumb={(props, state) => (
                    <div {...props}>{state.valueNow}</div>
                  )}
                  pearling
                  minDistance={5}
                  orientation="vertical"
                  invert
                  onChange={(value) => setLineSliderValues(value)}
                />
              </div>
              <div className="w-[92%] ">
                <Line data={lineData} options={lineOptions} width={"100%"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* overlay */}
      {lineGraphExpanded && (
        <div className="absolute inset-0 h-full w-full bg-black/50 " />
      )}
    </div>
  );
}

export default Dashboard
