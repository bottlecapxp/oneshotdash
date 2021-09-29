import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom"
import Header from '../Header/Header'

/**
* @author
* @function Profile
**/

const Profile = (props) => {
    const [location, setLocation] = useState({
        data: []
    })
    const history = useHistory()
    const onSelection = (data) =>{
        localStorage.setItem('dashboard_lot', data.id)
        localStorage.setItem('dashboard_lot_name', data.name)
        history.push(`/dash/${data.id}`)
    }
    const onChange_ = (e) =>{
        console.log(e.target.value)
    }

    useEffect(()=>{
        fetch('https://osParking.pythonanywhere.com/get-location', {
            method: 'GET', 
            mode: 'cors', 
            headers: {
                'Access-Control-Allow-Origin': '*', 
                'Content_Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(data =>{
            setLocation({
                data: data.data
            })
        })
    }, [])

  return(
    <div>
        <Header title={'Hello Dan!'}/>
        <div id='profile_wrapper'> 
        <section>
            <div id='overview_holder'>
            <h1>Quick Overview</h1>
            <select id='profile_select_lot' onChange={onChange_}>
                {
                    location.data.map((value, index)=>{
                        return <option value={value.id} key={index}>{value.id}</option>
                    })
                }
            </select>
            </div>
           
            <div className='profile_card_holder'>
                <div className='card col'>
                    Total for Today
                   <h1>$0</h1>
                </div>
                <div className='card col'>
                    Total for This Week
                    <h1>$0</h1>
                </div>
                <div className='card col'>
                    Total for this month
                    <h1>$0</h1>
                </div>
            </div>
        </section>
        <section id='profile_section_two'>  
            <div className='selection_of_lots_dash'>
                Visit Lot Dashboard
                <input type='text' id='search_bar' name='search' value='Search...' />
                <div className='lots_dash_scroll'>
                {
                    location.data.map((data, index)=>{
                        return (
                            <div className='card profile_dash_selection' onClick={()=>{onSelection(data)}}>
                            <div><strong>{data.name}</strong></div>
                            <div>Lot id: {data.id}</div>
                            </div>
                            )
                    })
                }
                </div>
            

            
            </div> 
        </section>
        </div>

    </div>
   )

 }

export default Profile