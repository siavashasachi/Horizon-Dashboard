import Chart from "react-apexcharts";
const TrafficChart = () => {
  const options = {
    chart: {
      width: '100%',
      height: '100%',
      type: 'pie',
    },
    series: [44, 55,],
    fill: {
      colors: ['#4318FF', '#6AD2FF']
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    }
  };
  const series = [44, 55,];
  return <Chart options={options} series={series} type="pie" />;
};
export default MyPieChart;