
import Chart from "react-apexcharts";
const WeeklyChart = () => {
  const options = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
      stacked: true,
      width: '100%',
      height: '100%',

    },

    plotOptions: {
      bar: {
        columnWidth: '25%' // Adjust bar width here
        ,
        horizontal: false,
        borderRadius: 5,
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: '',
      },
    },

    colors: ['#6AD2FF', '#775FFC', "#E6EDF9"],
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['17', '18', '19', '20', '21', '22', '23', '24'],

      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: { show: false },
    grid: { show: false },

    tooltip: { enabled: false }
  };
  const series = [
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
  ]
  return <Chart options={options} series={series} type="bar" />;
};
export default WeeklyChart;