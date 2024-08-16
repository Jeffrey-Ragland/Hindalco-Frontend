import React from 'react';
import {Link} from 'react-router-dom';
import xymaLogo from '../Assets/xymaLogoWhite.png';
import hindalcoLogo from '../Assets/hindalcoLogo.png';
import {Chart} from 'react-google-charts';

const Dashboard = () => {

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
      height: 100,
      greenFrom: 0,
      greenTo: 30,
      yellowFrom: 30,
      yellowTo: 60,
      redFrom: 60,
      redTo: 100,
      minorTicks: 5,
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
          {/* background-image: linear-gradient(to right, #38ba98, #4ec494, #64cd90, #7bd68a, #92de84); */}
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
          <div className="w-[40%]">
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
              className=" w-1/2 rounded-xl flex justify-center items-center text-gray-600"
              style={{
                backgroundImage:
                  "linear-gradient(to right top, #96adcf, #9eb3d2, #a7b8d5, #afbed8, #b7c4db, #bdcadf, #c2cfe3, #c8d5e7, #ccdced, #d1e4f3, #d6ebf9, #dbf2ff)",
              }}
            >
              bar chart
            </div>
          </div>
        </div>
        <div className=" h-[40%] flex gap-2">
          {/* table */}
          <div
            className=" w-1/2 rounded-xl flex justify-center items-center text-gray-600"
            style={{
              backgroundImage:
                "linear-gradient(to right top, #96adcf, #9eb3d2, #a7b8d5, #afbed8, #b7c4db, #bdcadf, #c2cfe3, #c8d5e7, #ccdced, #d1e4f3, #d6ebf9, #dbf2ff)",
            }}
          >
            table
          </div>
          {/* line chart */}
          <div
            className=" w-1/2 rounded-xl flex justify-center items-center text-gray-600"
            style={{
              backgroundImage:
                "linear-gradient(to right top, #96adcf, #9eb3d2, #a7b8d5, #afbed8, #b7c4db, #bdcadf, #c2cfe3, #c8d5e7, #ccdced, #d1e4f3, #d6ebf9, #dbf2ff)",
            }}
          >
            line chart
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard
