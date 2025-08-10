import { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

function MyPieChart() {
  const chartRef = useRef(null);
  let chart = useRef(null);

  useEffect(() => {
    const options = {
      chart: {
                width: 250,
                type: 'pie',
              },
               series: [44, 55,],
        fill:{
            colors:['#4318FF','#6AD2FF']
        },
        legend: {
            show:false,
        },
        dataLabels: {
            enabled:false,
        }
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

  return <div ref={chartRef} id="chart3" />;
}

export default MyPieChart;
