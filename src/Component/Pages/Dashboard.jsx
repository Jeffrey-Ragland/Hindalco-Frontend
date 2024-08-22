import React from 'react';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import xymaLogo from '../Assets/xymaLogoWhite.png';
import hindalcoLogo from '../Assets/hindalcoLogo.png';
import LineChartCanvas from './LineChartCanvas';
import ReactSlider from 'react-slider';
import {Chart} from 'react-google-charts';
import {Bar, Line} from 'react-chartjs-2';
import ChartDataLabels from "chartjs-plugin-datalabels";
import ThreeDModel from './ThreeDModel';
import { LuExpand, LuShrink } from "react-icons/lu";
import { ImExit } from "react-icons/im";
import { TbDownload } from "react-icons/tb";
import { MdSystemSecurityUpdateWarning } from "react-icons/md";
import { BsDatabaseFillCheck } from "react-icons/bs";
import 'react-tooltip/dist/react-tooltip.css';
import axios from 'axios';
import {Tooltip as ReactTooltip} from 'react-tooltip';
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

const Dashboard = ({dataFromApp}) => {
  // console.log('data from app', dataFromApp);

  const getGaugeHeight = () => {
    if (window.innerWidth < 768) {
      return 75;
    } else if (window.innerWidth >= 768 && window.innerWidth < 1536) {
      return 100;
    } else if (window.innerWidth >= 1536) {
      return 150;
    }
  };

  const [gaugeHeight, setGaugeHeight] = useState(getGaugeHeight());
  const [lineSliderValues, setLineSliderValues] = useState([0, 450]);
  const [lineGraphExpanded, setLineGraphExpanded] = useState(false);
  const [gaugeClicked, setGaugeClicked] = useState(false);
  const [activityStatus, setActivityStatus] = useState("");
  const [selectedGauge, setSelectedGauge] = useState("");
  const [datepickerSensorFromDate, setDatepickerSensorFromDate] = useState("");
  const [datepickerSensorToDate, setDatepickerSensorToDate] = useState("");
  const [datepickerLineData, setDatepickerLineData] = useState([]);

  const [lineData, setLineData] = useState({
    labels: [],
    datasets: [],
  });

  const [datewiseLineData, setDateWiseLineData] = useState({
    labels: [],
    datasets: [],
  });

  // line chart limit
  const getInitialLimit = () => {
    const storedLimit = localStorage.getItem("HindalcoLimit");
    return storedLimit ? parseInt(storedLimit) : 100;
  };

  const [hindalcoLimit, setHindalcoLimit] = useState(getInitialLimit);

  const handleLineLimit = (e) => {
    const limit = parseInt(e.target.value);
    setHindalcoLimit(limit);
    localStorage.setItem("HindalcoLimit", limit.toString());
  };

  // responsive gauge chart
  useEffect(() => {
    const handleResize = () => {
      setGaugeHeight(getGaugeHeight());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const s1 = dataFromApp.length > 0 ? parseInt(dataFromApp[0].S1) : 0;
  const s2 = dataFromApp.length > 0 ? parseInt(dataFromApp[0].S2) : 0;
  const s3 = dataFromApp.length > 0 ? parseInt(dataFromApp[0].S3) : 0;
  const s4 = dataFromApp.length > 0 ? parseInt(dataFromApp[0].S4) : 0;
  const s5 = dataFromApp.length > 0 ? parseInt(dataFromApp[0].S5) : 0;
  const s6 = dataFromApp.length > 0 ? parseInt(dataFromApp[0].S6) : 0;
  const s7 = dataFromApp.length > 0 ? parseInt(dataFromApp[0].S7) : 0;
  const s8 = dataFromApp.length > 0 ? parseInt(dataFromApp[0].S8) : 0;
  const s9 = dataFromApp.length > 0 ? parseInt(dataFromApp[0].S9) : 0;
  const s10 = dataFromApp.length > 0 ? parseInt(dataFromApp[0].S10) : 0;
  const s11 = dataFromApp.length > 0 ? parseInt(dataFromApp[0].S11) : 0;
  const s12 = dataFromApp.length > 0 ? parseInt(dataFromApp[0].S12) : 0;

  // gauge chart
  const gaugeData1 = [
    ["Label", "Value"],
    ["S1", s1],
  ];

  const gaugeData2 = [
    ["Label", "Value"],
    ["S2", s2],
  ];

  const gaugeData3 = [
    ["Label", "Value"],
    ["S3", s3],
  ];

  const gaugeData4 = [
    ["Label", "Value"],
    ["S4", s4],
  ];

  const gaugeData5 = [
    ["Label", "Value"],
    ["S5", s5],
  ];

  const gaugeData6 = [
    ["Label", "Value"],
    ["S6", s6],
  ];

  const gaugeData7 = [
    ["Label", "Value"],
    ["S7", s7],
  ];

  const gaugeData8 = [
    ["Label", "Value"],
    ["S8", s8],
  ];

  const gaugeData9 = [
    ["Label", "Value"],
    ["S9", s9],
  ];

  const gaugeData10 = [
    ["Label", "Value"],
    ["S10", s10],
  ];

  const gaugeData11 = [
    ["Label", "Value"],
    ["S11", s11],
  ];

  const gaugeData12 = [
    ["Label", "Value"],
    ["S12", s12],
  ];

  const gaugeOptions = {
    height: gaugeHeight,
    redFrom: 200,
    redTo: 250,
    minorTicks: 5,
    min: 0,
    max: 250,
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
        data: [
          dataFromApp.length > 0 && dataFromApp[0].S1,
          dataFromApp.length > 0 && dataFromApp[0].S2,
          dataFromApp.length > 0 && dataFromApp[0].S3,
          dataFromApp.length > 0 && dataFromApp[0].S4,
          dataFromApp.length > 0 && dataFromApp[0].S5,
          dataFromApp.length > 0 && dataFromApp[0].S6,
          dataFromApp.length > 0 && dataFromApp[0].S7,
          dataFromApp.length > 0 && dataFromApp[0].S8,
          dataFromApp.length > 0 && dataFromApp[0].S9,
          dataFromApp.length > 0 && dataFromApp[0].S10,
          dataFromApp.length > 0 && dataFromApp[0].S11,
          dataFromApp.length > 0 && dataFromApp[0].S12,
        ],
        backgroundColor: (context) => {
          const value = context.raw;
          const maxValue = Math.max(...context.chart.data.datasets[0].data);
          return parseInt(value) === maxValue
            ? "rgba(255, 0, 0, 0.7)"
            : "rgba(75, 192, 192, 0.4)";
        },
        borderColor: (context) => {
          const value = context.raw;
          const maxValue = Math.max(...context.chart.data.datasets[0].data);
          return parseInt(value) === maxValue ? "darkred" : "rgb(75, 192, 192)";
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

  // line chart data
  useEffect(() => {
    if (dataFromApp.length > 0) {
      const reversedData = [...dataFromApp].reverse();

      const lineLabels = reversedData.map((item) => {
        const createdAt = new Date(item.createdAt).toLocaleString("en-GB");
        return createdAt;
      });

      const sensor1Data = reversedData.map((item) => item.S1);
      const sensor2Data = reversedData.map((item) => item.S2);
      const sensor3Data = reversedData.map((item) => item.S3);
      const sensor4Data = reversedData.map((item) => item.S4);
      const sensor5Data = reversedData.map((item) => item.S5);
      const sensor6Data = reversedData.map((item) => item.S6);
      const sensor7Data = reversedData.map((item) => item.S7);
      const sensor8Data = reversedData.map((item) => item.S8);
      const sensor9Data = reversedData.map((item) => item.S9);
      const sensor10Data = reversedData.map((item) => item.S10);
      const sensor11Data = reversedData.map((item) => item.S11);
      const sensor12Data = reversedData.map((item) => item.S12);

      setLineData({
        labels: lineLabels,
        datasets: [
          {
            label: "s1",
            data: sensor1Data,
            borderColor: "rgba(204, 0, 0, 1)",
            backgroundColor: "rgba(204, 0, 0, 0.2)",
            tension: 0.4,
          },
          {
            label: "s2",
            data: sensor2Data,
            borderColor: "rgba(0, 0, 204, 1)",
            backgroundColor: "rgba(0, 0, 204, 0.2)",
            tension: 0.4,
            hidden: true,
          },
          {
            label: "s3",
            data: sensor3Data,
            borderColor: "rgba(0, 204, 0, 1)",
            backgroundColor: "rgba(0, 204, 0, 0.2)",
            tension: 0.4,
            hidden: true,
          },
          {
            label: "s4",
            data: sensor4Data,
            borderColor: "rgba(204, 204, 0, 1)",
            backgroundColor: "rgba(204, 204, 0, 0.2)",
            tension: 0.4,
            hidden: true,
          },
          {
            label: "s5",
            data: sensor5Data,
            borderColor: "rgba(204, 132, 0, 1)",
            backgroundColor: "rgba(204, 132, 0, 0.2)",
            tension: 0.4,
            hidden: true,
          },
          {
            label: "s6",
            data: sensor6Data,
            borderColor: "rgba(102, 0, 102, 1)",
            backgroundColor: "rgba(102, 0, 102, 0.2)",
            tension: 0.4,
            hidden: true,
          },
          {
            label: "s7",
            data: sensor7Data,
            borderColor: "rgba(0, 204, 204, 1)",
            backgroundColor: "rgba(0, 204, 204, 0.2)",
            tension: 0.4,
            hidden: true,
          },
          {
            label: "s8",
            data: sensor8Data,
            borderColor: "rgba(204, 0, 204, 1)",
            backgroundColor: "rgba(204, 0, 204, 0.2)",
            tension: 0.4,
            hidden: true,
          },
          {
            label: "s9",
            data: sensor9Data,
            borderColor: "rgba(204, 153, 162, 1)",
            backgroundColor: "rgba(204, 153, 162, 0.2)",
            tension: 0.4,
            hidden: true,
          },
          {
            label: "s10",
            data: sensor10Data,
            borderColor: "rgba(132, 34, 34, 1)",
            backgroundColor: "rgba(132, 34, 34, 0.2)",
            tension: 0.4,
            hidden: true,
          },
          {
            label: "s11",
            data: sensor11Data,
            borderColor: "rgba(0, 102, 102, 1)",
            backgroundColor: "rgba(0, 102, 102, 0.2)",
            tension: 0.4,
            hidden: true,
          },
          {
            label: "s12",
            data: sensor12Data,
            borderColor: "rgba(0, 204, 0, 1)",
            backgroundColor: "rgba(0, 204, 0, 0.2)",
            tension: 0.4,
            hidden: true,
          },
        ],
      });

      // activity status
      const currentDate = new Date();
      const lastDataEntry = dataFromApp[0];
      if (lastDataEntry && lastDataEntry.createdAt) {
        const lastDataTime = new Date(lastDataEntry.createdAt);

        const timeDifference = currentDate.getTime() - lastDataTime.getTime();
        const differenceInMinutes = timeDifference / (1000 * 60);

        if (differenceInMinutes < 5) {
          setActivityStatus("Active");
        } else {
          setActivityStatus("Inactive");
        }
      } else {
        console.error("createdAt field is missing in the data");
      }
    }
  }, [dataFromApp]);

  // datewise line chart data
  useEffect(() => {
    if (datepickerLineData.length > 0) {
      const lineLabels = datepickerLineData.map((item) => {
        const createdAt = new Date(item.createdAt).toLocaleString("en-GB");
        return createdAt;
      });

      const data = datepickerLineData.map((item) => item[selectedGauge]);
      // console.log('selected gauge', selectedGauge)
      // console.log(data);

      setDateWiseLineData({
        labels: lineLabels,
        datasets: [
          {
            label: selectedGauge,
            data: data,
            borderColor: "rgba(204, 0, 0, 1)",
            backgroundColor: "rgba(204, 0, 0, 0.2)",
            tension: 0.4,
          },
        ],
      });
    }
  }, [datepickerLineData]);

  // console.log('activity status', activityStatus);

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
            size: 5,
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

  // individual datepicker sensor api
  const handleDatepickerSensorPlot = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/backend/getHindalcoDatewiseData",
        { selectedGauge, datepickerSensorFromDate, datepickerSensorToDate }
      );
      if (response.data.success) {
        setDatepickerLineData(response.data.data);
      } else {
        console.log("problem finding datewise data");
      }
    } catch (error) {
      console.error(" Error fetching datewise data", error);
    }
  };

  // console.log("datepickerLineData", datepickerLineData);

  return (
    <div className="xl:h-screen p-4 text-white 2xl:text-2xl flex flex-col gap-2">
      <div className="xl:h-[14%] flex flex-col justify-center gap-2">
        {/* top bar */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2 md:gap-4">
            <img
              src={xymaLogo}
              alt="xymaLogo"
              className="h-8 md:h-12 2xl:h-14"
            />
            <img
              src={hindalcoLogo}
              alt="hindalcoLogo"
              className="h-10 md:h-14 2xl:h-16"
            />
          </div>
          <div className="text-sm md:text-2xl font-medium text-center">
            Temperature Measurement
          </div>
          <div className="w-auto md:w-[125px] flex justify-end">
            <Link to="/login">
              <button
                className="logout-button"
                onClick={() => localStorage.clear()}
              >
                <div className="logout-logo ">
                  <ImExit className="text-xl" />
                </div>

                <div className="logout-text text-lg">Logout</div>
              </button>
            </Link>
          </div>
        </div>

        {/* 2nd layer */}
        <div className="flex flex-col-reverse md:flex-row justify-between gap-2">
          {/* activity status */}
          <div className="flex gap-4 items-center">
            {activityStatus === "Active" ? (
              <div
                className="rounded-full w-9 h-9 2xl:w-12 2xl:h-12 flex justify-center items-center bg-gradient-to-tr from-green-700 via-green-500 to-green-300"
                data-tooltip-id="activity-status"
                data-tooltip-content="Data is being recieved!"
              >
                <BsDatabaseFillCheck className="text-2xl" />
              </div>
            ) : (
              <div
                className="rounded-full w-9 h-9 2xl:w-12 2xl:h-12 flex justify-center items-center activity-status-indicator"
                data-tooltip-id="activity-status"
                data-tooltip-content="No data is being recieved for more than 5 minutes"
              >
                <MdSystemSecurityUpdateWarning className="text-2xl" />
              </div>
            )}
            <ReactTooltip
              id="activity-status"
              style={{
                backgroundColor: "white",
                color: "#4B5563",
                fontSize: "0.75rem",
              }}
            />
            <div className="text-sm font-medium">
              Click to see individual sensor data
            </div>
          </div>
          <div className="flex items-center justify-between gap-2 text-xs md:text-sm">
            {/* last update */}
            <div className="px-2 py-1 border border-white rounded-xl flex items-center text-center gap-1">
              <div className="font-medium">Last&nbsp;update:</div>
              <div>
                {dataFromApp.length > 0 &&
                  new Date(dataFromApp[0].createdAt).toLocaleString("en-GB")}
              </div>
            </div>
            {/* report */}
            <div
              className="px-2 py-1 rounded-lg text-gray-600 font-medium flex gap-1 text-center items-center"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #4bc0c0, #49cccc, #45d9d9, #40e5e5, #3af2f2)",
              }}
            >
              Report generation <TbDownload className="text-xl " />
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
                  <div
                    className="w-1/2 flex items-center justify-center"
                    onClick={() => {
                      setGaugeClicked(true);
                      setSelectedGauge("S1");
                    }}
                  >
                    <Chart
                      chartType="Gauge"
                      data={gaugeData1}
                      options={gaugeOptions}
                      className="cursor-pointer"
                    />
                  </div>
                  <div
                    className="w-1/2 flex justify-center items-center"
                    onClick={() => {
                      setGaugeClicked(true);
                      setSelectedGauge("S2");
                    }}
                  >
                    <Chart
                      chartType="Gauge"
                      data={gaugeData2}
                      options={gaugeOptions}
                      className="cursor-pointer"
                    />
                  </div>
                </div>

                <div className="w-1/2 flex">
                  <div
                    className="w-1/2 flex justify-center items-center"
                    onClick={() => {
                      setGaugeClicked(true);
                      setSelectedGauge("S3");
                    }}
                  >
                    <Chart
                      chartType="Gauge"
                      data={gaugeData3}
                      options={gaugeOptions}
                      className="cursor-pointer"
                    />
                  </div>
                  <div
                    className="w-1/2 flex justify-center items-center"
                    onClick={() => {
                      setGaugeClicked(true);
                      setSelectedGauge("S4");
                    }}
                  >
                    <Chart
                      chartType="Gauge"
                      data={gaugeData4}
                      options={gaugeOptions}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* 2nd row */}
              <div className="h-1/3 flex">
                <div className="w-1/2 flex">
                  <div
                    className="w-1/2 flex justify-center items-center"
                    onClick={() => {
                      setGaugeClicked(true);
                      setSelectedGauge("S5");
                    }}
                  >
                    <Chart
                      chartType="Gauge"
                      data={gaugeData5}
                      options={gaugeOptions}
                      className="cursor-pointer"
                    />
                  </div>
                  <div
                    className="w-1/2 flex justify-center items-center"
                    onClick={() => {
                      setGaugeClicked(true);
                      setSelectedGauge("S6");
                    }}
                  >
                    <Chart
                      chartType="Gauge"
                      data={gaugeData6}
                      options={gaugeOptions}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
                <div className="w-1/2 flex">
                  <div
                    className="w-1/2 flex justify-center items-center"
                    onClick={() => {
                      setGaugeClicked(true);
                      setSelectedGauge("S7");
                    }}
                  >
                    <Chart
                      chartType="Gauge"
                      data={gaugeData7}
                      options={gaugeOptions}
                      className="cursor-pointer"
                    />
                  </div>
                  <div
                    className="w-1/2 flex justify-center items-center"
                    onClick={() => {
                      setGaugeClicked(true);
                      setSelectedGauge("S8");
                    }}
                  >
                    <Chart
                      chartType="Gauge"
                      data={gaugeData8}
                      options={gaugeOptions}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* 3rd row */}
              <div className="h-1/3 flex">
                <div className="w-1/2 flex">
                  <div
                    className="w-1/2 flex justify-center items-center"
                    onClick={() => {
                      setGaugeClicked(true);
                      setSelectedGauge("S9");
                    }}
                  >
                    <Chart
                      chartType="Gauge"
                      data={gaugeData9}
                      options={gaugeOptions}
                      className="cursor-pointer"
                    />
                  </div>
                  <div
                    className="w-1/2 flex justify-center items-center"
                    onClick={() => {
                      setGaugeClicked(true);
                      setSelectedGauge("S10");
                    }}
                  >
                    <Chart
                      chartType="Gauge"
                      data={gaugeData10}
                      options={gaugeOptions}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
                <div className="w-1/2 flex">
                  <div
                    className="w-1/2 flex justify-center items-center"
                    onClick={() => {
                      setGaugeClicked(true);
                      setSelectedGauge("S11");
                    }}
                  >
                    <Chart
                      chartType="Gauge"
                      data={gaugeData11}
                      options={gaugeOptions}
                      className="cursor-pointer"
                    />
                  </div>
                  <div
                    className="w-1/2 flex justify-center items-center"
                    onClick={() => {
                      setGaugeClicked(true);
                      setSelectedGauge("S12");
                    }}
                  >
                    <Chart
                      chartType="Gauge"
                      data={gaugeData12}
                      options={gaugeOptions}
                      className="cursor-pointer"
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
                {dataFromApp.length > 0 &&
                  dataFromApp.map((data, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0
                          ? ""
                          : "bg-gradient-to-r from-[#89a7d2] via-[#a1b7dd] to-[#b0c8e8]"
                      }`}
                    >
                      {/* background-image: linear-gradient(to right, #89a7d2, #8fabd5, #95afd8, #9bb3da, #a1b7dd, #a5bbe0, #a9bfe2, #adc3e5, #b0c8e8, #b4cceb, #b7d1ee, #bbd5f1); */}
                      <td className="border border-gray-500">{index + 1}</td>
                      <td className="border border-gray-500">{data.S1}</td>
                      <td className="border border-gray-500">{data.S2}</td>
                      <td className="border border-gray-500">{data.S3}</td>
                      <td className="border border-gray-500">{data.S4}</td>
                      <td className="border border-gray-500">{data.S5}</td>
                      <td className="border border-gray-500">{data.S6}</td>
                      <td className="border border-gray-500">{data.S7}</td>
                      <td className="border border-gray-500">{data.S8}</td>
                      <td className="border border-gray-500">{data.S9}</td>
                      <td className="border border-gray-500">{data.S10}</td>
                      <td className="border border-gray-500">{data.S11}</td>
                      <td className="border border-gray-500">{data.S12}</td>
                      <td className="text-xs border border-gray-400">
                        {new Date(data.createdAt).toLocaleString("en-GB")}
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
              <div
                className="hidden md:block"
                onClick={() => setLineGraphExpanded(!lineGraphExpanded)}
              >
                <button className="expand-button px-4 flex gap-2">
                  {lineGraphExpanded ? (
                    <LuShrink className="icon text-gray-600 text-lg" />
                  ) : (
                    <LuExpand className="icon text-gray-600 text-base" />
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
                  checked={hindalcoLimit === 100}
                  className="cursor-pointer"
                  onChange={handleLineLimit}
                />
                <label htmlFor="option1" className="mr-2 cursor-pointer">
                  100
                </label>
                <input
                  type="radio"
                  id="option2"
                  name="options"
                  value={300}
                  checked={hindalcoLimit === 300}
                  className="cursor-pointer"
                  onChange={handleLineLimit}
                />
                <label htmlFor="option2" className="mr-2 cursor-pointer">
                  300
                </label>
                <input
                  type="radio"
                  id="option3"
                  name="options"
                  value={500}
                  checked={hindalcoLimit === 500}
                  className="cursor-pointer"
                  onChange={handleLineLimit}
                />
                <label htmlFor="option3" className="mr-2 cursor-pointer">
                  500
                </label>
                <input
                  type="radio"
                  id="option4"
                  name="options"
                  value={1000}
                  checked={hindalcoLimit === 1000}
                  className="cursor-pointer"
                  onChange={handleLineLimit}
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
                  defaultValue={[0, 450]}
                  renderThumb={(props, state) => {
                    const { key, ...restProps } = props;
                    return (
                      <div key={key} {...restProps}>
                        {state.valueNow}
                      </div>
                    );
                  }}
                  pearling
                  minDistance={5}
                  orientation="vertical"
                  invert
                  onChange={(value) => setLineSliderValues(value)}
                />
              </div>
              <div className="w-[92%] ">
                <Line data={lineData} options={lineOptions} width={"100%"} />
                {/* <LineChartCanvas data={dataFromApp} /> */}
              </div>
            </div>
          </div>
        </div>
        {gaugeClicked && (
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[95%] w-[95%] rounded-xl text-gray-700 p-2 z-10 flex flex-col"
            style={{
              backgroundImage:
                "linear-gradient(to right top, #96adcf, #9eb3d2, #a7b8d5, #afbed8, #b7c4db, #bdcadf, #c2cfe3, #c8d5e7, #ccdced, #d1e4f3, #d6ebf9, #dbf2ff)",
            }}
          >
            <div className="flex justify-between">
              <form
                className="flex gap-4"
                onSubmit={handleDatepickerSensorPlot}
              >
                <div>Select date range</div>
                <label>From:</label>
                <input
                  type="date"
                  className="rounded-md px-0.5 2xl:p-2"
                  required
                  value={datepickerSensorFromDate}
                  onChange={(e) => setDatepickerSensorFromDate(e.target.value)}
                />
                <label>From:</label>
                <input
                  type="date"
                  className="rounded-md px-0.5 2xl:p-2"
                  required
                  value={datepickerSensorToDate}
                  onChange={(e) => setDatepickerSensorToDate(e.target.value)}
                />
                <button className="border border-black" type="submit">
                  plot
                </button>
              </form>
              <div className="border border-black ">{selectedGauge} data</div>
              <button
                className="border border-black"
                onClick={() => {
                  setGaugeClicked(false);
                  setSelectedGauge('');
                  setDatepickerSensorFromDate('');
                  setDatepickerSensorToDate('');
                  setDatepickerLineData([]);
                }}
              >
                🗙
              </button>
            </div>
            <div className='flex-1'>
              <Line data={datewiseLineData} options={lineOptions} width={'100%'} />
            </div>
          </div>
        )}
      </div>
      {/* overlay */}
      {(lineGraphExpanded || gaugeClicked) && (
        <div className="absolute inset-0 h-full w-full bg-black/50 " />
      )}
    </div>
  );
}

export default Dashboard
