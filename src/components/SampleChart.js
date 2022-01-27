import * as React from 'react';
import { useTheme } from '@mui/material';
import Chart from 'react-apexcharts';


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
    title: {
      text: 'HeatMap Chart'
    },
    toolbar: {
      show: false,
    },
    plotOptions: {
      heatmap: {
        colorScale: {
          ranges: [{
              from: -30,
              to: 5,
              color: '#00A100',
              name: 'low',
            },
            {
              from: 6,
              to: 20,
              color: '#128FD9',
              name: 'medium',
            },
            {
              from: 21,
              to: 45,
              color: '#FFB200',
              name: 'high',
            }
          ]
        }
      }
    }
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

export const BarChart = ({ height = 380 }) => {
  
  const theme = useTheme();

  const options = {
    chart: {
      width: "100%",
      type: "bar"
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 1,
      colors: ["#fff"]
    },
    xaxis: {
      categories: [
        "Korea",
        "Canada",
        "Poland",
        "Italy",
        "France",
        "Japan",
        "China"
      ]
    },
    legend: {
      position: "right",
      verticalAlign: "top",
      containerMargin: {
        left: 35,
        right: 60
      }
    },
    toolbar: {
      show: false,
    },
    responsive: [
      {
        breakpoint: theme.breakpoints.values['sm'],
        options: {
          plotOptions: {
            bar: {
              horizontal: false
            }
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ]
  },
  series = [
    {
      data: [44, 55, 41, 64, 22, 43, 21]
    },
    {
      data: [53, 32, 33, 52, 13, 44, 32]
    }
  ];

  return (
    <div className="bar">
      <Chart options={options} series={series} type="bar" height={height} />
    </div>
  );
}

export const RadialBarChart = () => {
  const options = {
    chart: {
      height: 280,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          total: {
            show: true,
            label: 'TOTAL'
          }
        }
      }
    },
    labels: ['TEAM A', 'TEAM B', 'TEAM C', 'TEAM D']
  },
  series = [67, 84, 97, 61];

  return (
    <div className="radialbar">
      <Chart options={options} series={series} type="radialBar" />
    </div>
  );
}

export const StackedAreaChart = ({ height = 360 }) => {
  const options = {
    chart: {
      type: 'area',
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'Area Chart',
      align: 'left',
      style: {
        fontSize: '14px'
      }
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      tickAmount: 4,
      floating: false,
    
      labels: {
        style: {
          colors: '#8e8da4',
        },
        offsetY: -7,
        offsetX: 0,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false
      }
    },
    fill: {
      opacity: 0.5
    },
    tooltip: {
      x: {
        format: "yyyy",
      },
      fixed: {
        enabled: false,
        position: 'topRight'
      }
    },
    toolbar: {
      show: false,
      tools: {
        download: true,
        selection: false,
        zoom: false,
        zoomin: false,
        zoomout: false,
        pan: false,
        reset: false,
      },
    },
    grid: {
      yaxis: {
        lines: {
          offsetX: -30
        }
      },
      padding: {
        left: 20
      }
    }
  },
  series = [{
    name: 'north',
    data: [
      { x: 1996, y: 322 },
      { x: 1997, y: 324 },
      { x: 1998, y: 329 },
      { x: 1999, y: 342 },
      { x: 2000, y: 348 },
      { x: 2001, y: 334 },
      { x: 2002, y: 325 },
      { x: 2003, y: 316 },
      { x: 2004, y: 318 },
      { x: 2005, y: 330 },
      { x: 2006, y: 355 },
      { x: 2007, y: 366 },
      { x: 2008, y: 337 },
      { x: 2009, y: 352 },
      { x: 2010, y: 377 },
      { x: 2011, y: 383 },
      { x: 2012, y: 344 },
      { x: 2013, y: 366 },
      { x: 2014, y: 389 },
      { x: 2015, y: 334 }
    ]
  }, {
    name: 'south',
    data: [
      { x: 1996, y: 162 },
      { x: 1997, y: 90 },
      { x: 1998, y: 50 },
      { x: 1999, y: 77 },
      { x: 2000, y: 35 },
      { x: 2001, y: -45 },
      { x: 2002, y: -88 },
      { x: 2003, y: -120 },
      { x: 2004, y: -156 },
      { x: 2005, y: -123 },
      { x: 2006, y: -88 },
      { x: 2007, y: -66 },
      { x: 2008, y: -45 },
      { x: 2009, y: -29 },
      { x: 2010, y: -45 },
      { x: 2011, y: -88 },
      { x: 2012, y: -132 },
      { x: 2013, y: -146 },
      { x: 2014, y: -169 },
      { x: 2015, y: -184 }
    ]
  }];

  return (
    <div className="area">
        <Chart options={options} series={series} type="area" height={height} />
      </div>
  );
};