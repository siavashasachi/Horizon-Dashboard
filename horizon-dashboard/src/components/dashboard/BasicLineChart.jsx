import { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

function BasicLineChart() {
  const chartRef = useRef(null);
  let chart = useRef(null);

  useEffect(() => {
    const options = {
      chart: {
        type: 'line',
        toolbar: { show: false },
      },
      series: [
        {
          name: 'sales',
          data: [30, 70, 45, 200, 49, 60, 70, 250, 125]
        },
        {
          name: 'sales2',
          data: [50, 20, 85, 100, 249, 160, 70, 150, 225]
        }
      ],
      colors: ['#6AD2FF', '#775FFC'],

      xaxis: {
        categories: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
        max: 6,
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      yaxis: { show: false },
      grid: { show: false },
      stroke: { curve: 'smooth' ,width: 3,},
      tooltip: { enabled: false }
    };

    chart.current = new ApexCharts(chartRef.current, options);
    chart.current.render();

    // Cleanup on unmount
    return () => {
      if (chart.current) {
        chart.current.destroy();
      }
    };
  }, []);

  return <div ref={chartRef} id="chart" />;
}

export default BasicLineChart;
