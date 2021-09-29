import React, {useEffect, useState} from 'react'
import Header from '../Header/Header'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import Plus from './../Assets/plus.svg'
import Minus from './../Assets/minus.svg'

/**
* @author
* @function Lot_Management
**/

const Lot_Management = (props) => {
    const [value, setValue] = useState(new Date())
    const [setDate, setSetDate] = useState({
        setDate: new Date().toLocaleDateString()
    })
    const [newData, setNewData] = useState({
        data: []
    })
    const [hourlyIncrement, setHourlyIncrement] = useState(0)
    const [maxIncrement, setMaxIncrement] = useState(0)

    const max_inc = () =>{
       setMaxIncrement(maxIncrement + 1)
    }
    const hourly_inc = () =>{
        setHourlyIncrement( hourlyIncrement + 1)
    }
    const max_dec = () =>{
        if(maxIncrement === 0){}else{
            setMaxIncrement(maxIncrement - 1)}
     }
    const hourly_dec = () =>{
        if(hourlyIncrement === 0){}else{
            setHourlyIncrement( hourlyIncrement - 1)}
     }
    const onchange_ = data =>{
        setValue(data) 
        setSetDate({
            setDate: data.toLocaleDateString()
        })   
    }
   
        const onDelete = (id) =>{
            fetch(`https://osParking.pythonanywhere.com/delete-schedules?id=${id}`, {
                method: 'DELETE',
                mode: 'cors',
                headers: {
                    'Access-Control-Allow-Origin':'*',
                    'Content-Type': 'application/json'
                },
            }).then(response => response.json())
                .then(data => {
                    console.log('Response:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
                setTimeout(()=>{
                    window.location.reload()
                }, 300)
        }
    
    const onSubmission = e =>{
        e.preventDefault()
        const send_data = {
            'title': e.target.title.value, 
            'date': setDate.setDate,
            'start_time': `${e.target.startHour.value}:${e.target.startMin.value}${e.target.dn.value}`,
            'exp_time': `${e.target.endHour.value}:${e.target.endMin.value}${e.target.dn.value}`, 
            'rate_per_hr': e.target.hourlyRate.value,
            'max_rate': e.target.maxRate.value, 
            'repeats': e.target.repeat.value 
        }
        // console.log(send_data)
        // The url need to implement a dynamic lot number possibly from the localstorage


        fetch('https://osParking.pythonanywhere.com/schedules?lotnumber=1111', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(send_data)
        }).then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
            setTimeout(()=>{
                window.location.reload()
            }, 1000)
    }
    const location = localStorage.getItem('dashboard_lot')
    useEffect(()=>{
        fetch(`https://osParking.pythonanywhere.com/get-schedules?lotnumber=${location}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json'
            },
        }).then(response => response.json())
            .then(data => {
                // console.log(data.data)
                setNewData({
                    data: data.data
                })
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }, [])

console.log(setDate)
  return(
    <div>
    <Header title={'Set Rates'}/>
    <div className="analytical_section rateSection">
        <div className='management_holder'> 
        <div className='calendar_management'>
            <Calendar onChange={onchange_} value={value}/>
            <h3 style={{textAlign:'left', width:'80%', marginBottom: '0px'}}>Registered Rates</h3>
            <div id='rate_settings'> 
            {
                newData.data.map((value, index)=>{
                    return(
                        <div className='rates_card'>
                            <div className='rate_card_header'>
                            <div>{value.title}</div>
                            <div>Set For: {value.date}</div>
                            </div>
                            <div className='rates_content'> 
                            <div>Starts: {value.start_time}</div>
                            <div>Expires: {value.exp_time}</div>
                            <div>Rate per hr: ${value.rpr}</div>
                            <div>Maximum rate: ${value.max_rate}</div>
                            <div>Repeats: {value.repeats}</div>
                            </div>
                            <div className='rate_delete'>
                                <div className='delete_icon' onClick={()=>{onDelete(value.id)}}>Delete</div>
                            </div>
                        </div>
                    )
                })
            }       
            </div>


        </div>
       
        <form onSubmit={onSubmission} className='setting_management'>
            <div className='search_wrapper'>
            <h4 className='rate_titles'>Title</h4>
            <input className='title_input' type='text' name='title' placeholder='Weekend Date Rate' />
            </div>

            <div className='time_slots'>
                <div className='before_time'>
                    <div className='label_wrapper'>
                    <label htmlFor='startHour'>Hour</label>
                    <input className='time_slots_input' type='number' name='startHour' max='12' min='1' placeholder='0'/>
                    </div>
                    <div className='label_wrapper'>
                    <label htmlFor='startMin'>Mins</label>
                    <input className='time_slots_input' type='number' name='startMin' max='59'min='0' placeholder='0'/>
                    </div>
                    
                </div>
                <div style={{display: 'flex', justifyContent: 'center', width: '8%',  height: '30px', alignItems: 'center'}}>
                    <h5>to</h5>
                </div>
                <div className='after_time'>
                    <div className='label_wrapper'>
                    <label htmlFor='endHour'>Hour</label>
                    <input className='time_slots_input' type='number' name='endHour' max='12' min='1' placeholder='0'/>
                    </div>

                <div className='label_wrapper'>
                <label htmlFor='endMins'>Mins</label>
                <input className='time_slots_input' type='number' name='endMin' max='59' min='0' placeholder='0'/>
                </div>
                </div>
                <select name='dn' className='day-night'>
                    <option>AM</option>
                    <option>PM</option>
                </select>
            </div>

            <div className='rates'> 
            <h4 className='rate_titles'>Price Per Hour</h4>
            <div className='rate_container'>
                <div className='adjustment_btns' onClick={hourly_dec}><img className='icon_increment' src={Minus} alt='minus icon'></img></div>
                <div><input id='rate_input' name='hourlyRate' type='number' value={hourlyIncrement} /></div>
                <div className='adjustment_btns' onClick={hourly_inc}><img className='icon_increment' src={Plus} alt='Plus icon'></img></div>
            </div>
            </div>

            <div className='rates'> 
            <h4 className='rate_titles'>Maximum Cost</h4>
            <div className='rate_container'>
                <div className='adjustment_btns' onClick={max_dec} ><img className='icon_increment' src={Minus} alt='minus icon'></img></div>
                <div><input id='rate_input' name='maxRate' type='number' value={maxIncrement} /></div>
                <div className='adjustment_btns' onClick={max_inc}><img className='icon_increment' src={Plus} alt='Plus icon'></img></div>
            </div>
            </div>


            <div className='rates'> 
            <h4 className='rate_titles'>Repeat</h4>
            <div className='rate_container'>
                <div className='repeat_selection_container'>
                    
                    <input className='radio_btn' type='radio' id='daily' name='repeat' defaultValue='never' />
                    <label htmlFor='daily'>Never</label>
                </div>
                <div className='repeat_selection_container'>     
                    <input className='radio_btn' type='radio' id='daily' name='repeat' defaultValue='daily' />
                    <label htmlFor='daily'>Daily</label>
                </div>
                <div className='repeat_selection_container'>         
                    <input className='radio_btn' type='radio' id='daily' name='repeat' defaultValue='weekly' />
                    <label htmlFor='daily'>Weekly</label>
                </div>
                <div className='repeat_selection_container'>
                    <input className='radio_btn' type='radio' id='daily' name='repeat' defaultValue='monthly' />
                    <label htmlFor='daily'>Monthly</label>
                </div>
                <div className='repeat_selection_container'>
                    <input className='radio_btn' type='radio' id='daily' name='repeat' defaultValue='annually' />
                    <label htmlFor='daily'>Annual</label>
                </div>
            </div>
            </div>

            <input id='submit_rates' type='submit' value='Save Rate Present'/>
            
        </form>
        </div>
    </div>
  </div>
   )

 }

export default Lot_Management