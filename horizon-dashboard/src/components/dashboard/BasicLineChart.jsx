import Chart from "react-apexcharts";
const BasicLineChart = () => {
  const options = {
    chart: {
      type: 'line',
      toolbar: { show: false },
      width: '100%',
      height: '100%',
    },

    colors: ['#6AD2FF', '#775FFC'],

    xaxis: {
      categories: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
      max: 6,
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: { show: false },
    grid: { show: false },
    stroke: { curve: 'smooth', width: 5, },
    tooltip: { enabled: false }
  };
  const series = [
    {
      name: 'sales',
      data: [30, 70, 45, 200, 49, 60, 70, 250, 125]
    },
    {
      name: 'sales2',
      data: [50, 20, 85, 100, 249, 160, 70, 150, 225]
    }
  ];
  return <Chart options={options} series={series} type="line" />;
};
export default BasicLineChart;