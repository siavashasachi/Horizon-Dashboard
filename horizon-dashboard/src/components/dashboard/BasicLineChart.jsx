import ApexCharts from 'apexcharts'


function BasicLineChart(){
  var options = {
  chart: {
    type: 'line',
    toolbar: {
        show:false
    }
  },
  series: [{
    name: 'sales',
    data: [30,70,45,200,49,60,70,250,125]
  }],
    colors: ['#6AD2FF', '#6AD2FF'],
  xaxis: {
    categories: ['Sep',"Oct","Nov","Dec","Jan","Feb","Mar"],
    max:6,
     axisBorder:  {
        show:false
    },
    axisTicks: {
        show:false
    },
  },
  yaxis : {
    show:false,
  },
  grid: {
    show:false,
  },
  stroke: {
    curve: "smooth",
  },
  tooltip: {
    enabled : false
  }
}

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();
    return(
      <div id='chart'></div>
    )
}
export default BasicLineChart