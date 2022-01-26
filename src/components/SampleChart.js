import * as React from 'react';
import Chart from 'react-apexcharts'

export const HeatMapChart = ({ height = 450 }) => {
  const generateData = (count, { min, max }) => {
    return Array(count).fill(0).map(x => x + ((max - min) * Math.random()) + 1);
  };

  const options =  {
    chart: {
      height: 350,
      type: 'heatmap',
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#008FFB"],
    title: {
      text: 'HeatMap Chart'
    },
  },
  series = [{
      name: 'Metric1',
      data: generateData(30, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric2',
      data: generateData(30, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric3',
      data: generateData(30, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric4',
      data: generateData(30, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric5',
      data: generateData(30, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric6',
      data: generateData(30, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric7',
      data: generateData(30, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric8',
      data: generateData(30, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric9',
      data: generateData(30, {
        min: 0,
        max: 90
      })
    }
  ];

  return (
    <div id="chart">
      <Chart options={options} series={series} type="heatmap" height={height} />
    </div>
  );
}

export const BarChart = ({ width = 500, height = 310 }) => {
  const options = {
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    xaxis: {
      categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  },
  series = [{
    data: [30, 40, 25, 50, 49, 21, 70, 51]
  }];

  return (
    <div className="bar">
      <Chart options={options} series={series} type="bar" width={width} height={height} />
    </div>
  );
}

export const RadialBarChart = ({ height = 380 }) => {
  const options = {
    labels: ['RadialBar'],
    plotOptions: {
      radialBar: {
          hollow: {
              size: '70%',
          }
      },
    },
  },
  series = [68];

  return (
    <div className="radialbar">
      <Chart options={options} series={series} type="radialBar" height={height} />
    </div>
  );
}