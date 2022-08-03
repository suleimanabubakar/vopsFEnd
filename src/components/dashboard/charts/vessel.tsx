import ReactApexChart from "react-apexcharts"
import { ApexOptions } from "apexcharts";
export const VesselChart = () => {

    const series =  [{
        name: 'Loaded',
        data: [44, 55, 41, 67, 22, 43]
      }, {
        name: 'Discharged',
        data: [13, 23, 20, 8, 13, 27]
      }];

      const options : ApexOptions = {
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          toolbar: {
            show: false
          },
          zoom: {
            enabled: true
          }
        },

        title: {
            text: 'Voyages Activites',
            style: {
                fontFamily: 'E',
            }
        },

        colors: ['#2028EB','#e5e7eb'],

        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }],
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 0,
            columnWidth: '20%',
          },
      
        },
        grid: {
            show:false
        },
        tooltip: {
            style: {
                fontFamily: 'E'
            }
        },
        dataLabels: {
            enabled: false,
          
        },
        xaxis: {
          categories: ['MVE33DE','EEDEED','EEDVED','EEEFEDE','CREEDVDE','333443E'],
          labels:{
            style: {
                fontFamily:'E',
                fontSize:'10px',
                fontWeight:'bold'
            }
          }
   
        },
        yaxis: {
            labels: {
                style: {
                    fontFamily: 'E',
                }
            },
            tooltip: {
                enabled:false,
            }
        
        },


        legend: {
          position: 'bottom',
          offsetY: 40,
          fontFamily:'E'
        },
        fill: {
          opacity: 1
        }
    };
    
    
  


    return (
        <div className="w-full lg:w-1/4 p-4">
           
             <ReactApexChart series={series} options={options} type="bar"  height={360} />
        </div>
    )
}