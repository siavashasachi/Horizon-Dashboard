import { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

function TrafficChart() {
    const chartRef = useRef(null);
    let chart = useRef(null);

    useEffect(() => {
        const options = {
            chart: {
                type: 'bar',
                toolbar: { show: false },
            },
            dataLabels:{
                enabled:false,
            },
            series: [
                {
                    name: 'sales',
                    data: [30, 70, 45, 200, 49, 60, 70,]
                },

            ],
            


            xaxis: {
                categories: ['00', '04', '08', '12', '14', '16', '18'],
                max: 6,
                axisBorder: { show: false },
                axisTicks: { show: false },
                style: {
              colors: ['#A3AED0'],
          },
            },
            yaxis: { show: false },
            grid: { show: false },
            stroke: { curve: 'smooth', width: 3, },
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

    return <div ref={chartRef} id="chart2" />;
}

export default TrafficChart;
