import React, { useEffect, useState } from 'react'
import Cards from '../Components/Cards/Cards'
import Header from '../Header/Header'
import '../Pages/Pages.css'

/**
* @author
* @function Dashboard
**/

const Dashboard = (props) => {
const [total, setTotal] = useState({
  total: 0, 
  vh_total: 0, 
  data: []
})

useEffect(()=>{
fetch('https://osParking.pythonanywhere.com/today-visitors', {
method: 'GET',
mode: 'cors',
headers:{
'Access-Control-Allow-Origin':'*',
'Content-Type': 'application/json'
}
}).then(response => response.json())
.then(resp =>{
  if(!null){
    setTotal({
      total: resp.total, 
      vh_total: resp.counted, 
      data: resp.data
    })
  }
})
}, [])

console.log(total.data)
  return (
    <div>
      <Header title={'Dashboard'}/>
      <div className="analytical_section">
        <div className='sort_cards'>
          <Cards type='bar'/>
          <Cards type='occupancy' vhTotal={total.vh_total}/>
          <div style={{width: '30%'}}></div>
          <Cards type='liveVisitors' data_={total.data}/>
        </div>
        <div className='sort_cards'>
          <Cards type='dailySpend' total={total.total} />
          <Cards type='payments'/>
          <div style={{width: '30%'}}></div>
        </div>
      </div>
    </div>
  )

}

export default Dashboard