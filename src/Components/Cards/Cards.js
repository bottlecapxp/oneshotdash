import React, { useEffect, useState } from 'react'
import BarChart from '../Charts/BarChart'
import Apple from '../../Assets/ApplePay.svg'
import Google from '../../Assets/GooglePay.svg'
import CC from '../../Assets/credit-logo.svg'
import '../Cards/Card.css'
import PieChart from '../Charts/PieChart'

/**
* @author
* @function Cards
**/

const Cards = (props) => {
    const [bar, setBar] = useState(false)
    const [occupancy, setOccupancy] = useState(false)
    const [dailySpend, setDailySpend] = useState(false)
    const [payments, setPayments] = useState(false)
    const [liveVisitors, setLiveVisitors] = useState(false)

    useEffect(() => {
        const type = props.type
        if (type === 'bar') {
            setBar(true)
        } else if (type === 'occupancy') {
            setOccupancy(true)
        } else if (type === 'dailySpend') {
            setDailySpend(true)
        } else if (type === 'payments') {
            setPayments(true)
        } else if (type === 'liveVisitors') {
            setLiveVisitors(true)
        }

    }, [])
    return (
        <div className={liveVisitors ? 'card_long' : 'card'}>
            {bar ?
                <div>
                    <div className='titles'>
                        <h2>Peak times</h2>
                        <div>
                       <BarChart />
                        </div>
                    </div>
                </div>
                : ''}
            {occupancy ?
                <div>
                    <div className='titles'>
                        <h2>Occupancy</h2>
                        <div>
                        <h4>{props.vhTotal} Total Vehicles</h4>
                        <h4>{Math.floor(props.vhTotal / 24)} Vehicles avg per hour</h4>
                        </div>
                       
                    </div>
                </div> :
                ''}
            {dailySpend ?
                <div>
                    <div className='titles'>
                        <h2>Daily Spend</h2>
                    </div>
                    <div>
                        <h1 id='enlarge_txt'>${props.total}</h1>
                    </div>
                </div> :
                ''}
            {payments ?
                <div>
                    <div className='titles'>
                        <h2>Payments</h2>
                        <div className='adjust_ align_center'>
                        <div className='logos_examp'>
                            <div className='adjust_'>
                                <img src={Google} alt=''></img>
                                <div className='colorDot yellow'></div>
                            </div>
                            <div className='adjust_'>
                                <img src={Apple} alt=''></img>
                                <div className='colorDot green'></div>
                                
                            </div>
                            <div className='adjust_'>
                                <img src={CC} alt=''></img>
                                <div className='colorDot red'></div>
                            </div>
                        </div>
                        <div>
                            <PieChart />
                        </div>


                        </div>
                    </div>
                </div> :
                ''}
            {liveVisitors ?
                <div>
                    <div className='titles'>
                        <h2>Live Visitors</h2>
                    </div>
                    <div>
                        <form>
                            <input type='text' id='header-search' name='search'></input>
                        </form>
                        <div className='listed_contents'> 
                        <div className='live_visitors_scroll'>
                            {
                                props.data_.map((value, index)=>{
                                   return(
                                    <div id='driver_info'>
                                        <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                                            <div>{value.name}</div>
                                            <div style={{color: 'red'}}>{value.et}</div>
                                        </div>
                                        <div>
                                            {value.lp}
                                        </div>

                                    </div>
                                   ) 
                                })
                            }
                        </div>
                        </div>
                    </div>




                </div> :
                ''}
        </div>
    )

}

export default Cards