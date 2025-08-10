import Chart from "react-apexcharts";
const TrafficChart = () => {
    const options = {
        plotOptions: {
            bar: {
                columnWidth: '40%' // Adjust bar width here
                ,
                horizontal: false,
                borderRadius: 7,
                borderRadiusApplication: 'end',
                borderRadiusWhenStacked: '',
            },
        },
        chart: {
            type: 'bar',
            toolbar: { show: false },
            width: '100%',
            height: '100%',
        },
        dataLabels: {
            enabled: false,
        },
        series: [
            {
                name: 'sales',
                data: [30, 70, 45, 200, 49, 60, 70,]
            },

        ],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: 'vertical',
                shadeIntensity: 1.5,
                gradientToColors: ['#4318FF', '#4318FF',],

                opacityFrom: 1,
                opacityTo: 0.35,
                stops: [0, 90, 100]
            }
        },


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

        tooltip: { enabled: false }
    };
    const series = [
        {
            name: 'sales',
            data: [30, 70, 45, 200, 49, 60, 70,]
        },
    ];
    return <Chart options={options} series={series} type="bar" />;
};
export default TrafficChart;