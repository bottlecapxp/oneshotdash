import React from 'react'
import { Pie } from 'react-chartjs-2';

/**
* @author
* @function PieChart
**/


const data = {
 
    datasets: [
      {
        data: [12, 19, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
         
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        
        ],
        borderWidth: 1,
      },
    ],
  };
const PieChart = (props) => {
  return(
    <Pie data={data} width={'200px'} height={'auto'} options={{ maintainAspectRatio: false }}/>
   )

 }

export default PieChart