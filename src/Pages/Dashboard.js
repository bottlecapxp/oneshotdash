import React from 'react'
import Cards from '../Components/Cards/Cards'
import Header from '../Header/Header'
import '../Pages/Pages.css'

/**
* @author
* @function Dashboard
**/

const Dashboard = (props) => {
  return (
    <div>
      <Header title={'Dashboard'}/>
      <div className="analytical_section">
        <div className='sort_cards'>
          <Cards type='bar'/>
          <Cards type='occupancy' />
          <div style={{width: '30%'}}></div>
          <Cards type='liveVisitors'/>
        </div>
        <div className='sort_cards'>
          <Cards type='dailySpend'/>
          <Cards type='payments'/>
          <div style={{width: '30%'}}></div>
        </div>
      </div>
    </div>
  )

}

export default Dashboard