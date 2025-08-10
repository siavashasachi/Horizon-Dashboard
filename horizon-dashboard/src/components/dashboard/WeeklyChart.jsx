import { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

function WeeklyChart() {
  const chartRef = useRef(null);
  let chart = useRef(null);

  useEffect(() => {
    const options = {
      chart: {
        type: 'bar',
        toolbar: { show: false },
          stacked: true,
        height: "200px"
  
      },
       
  plotOptions:{ bar: {
      columnWidth: '25%' // Adjust bar width here
      ,
      horizontal: false,
      borderRadius: 5,
          borderRadiusApplication: 'end',
          borderRadiusWhenStacked: '',
    },
},
      series: [
        {
          name: 'sales',
          data: [20, 70, 145, 200, 49, 60, 70, 250]
        },
        {
          name: 'sales2',
          data: [50, 90, 185, 100, 249, 160, 70, 150]
        },
        {
          name: 'sales3',
          data: [50, 20, 25, 150, 300, 160, 70, 150]
        }
      ],
      colors: ['#6AD2FF', '#775FFC',"#E6EDF9"],
      dataLabels : {
        enabled:false,
      },
      xaxis: {
        categories: ['17', '18', '19', '20', '21', '22', '23','24'],

        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      yaxis: { show: false },
      grid: { show: false },

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

  return <div ref={chartRef} id="chart0" />;
}

export default WeeklyChart;
