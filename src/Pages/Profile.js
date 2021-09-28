import React from 'react'
import Header from '../Header/Header'

/**
* @author
* @function Profile
**/

const Profile = (props) => {
    const lots = [1308, 1208, 1208, 1202, 1212]
    const onSelection = (data) =>{
        console.log(data)
    }
  return(
    <div>
        <Header title={'Hello Dan!'}/>
        <div id='profile_wrapper'> 
        <section>
            <div id='overview_holder'>
            <h1>Quick Overview</h1>
            <select id='profile_select_lot'>
                <option>
                    Lot# 14616
                </option>
                <option>
                    Lot# 146134
                </option>
                <option>
                    Lot# 146221
                </option>
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
                    lots.map((data)=>{
                        return <div className='card profile_dash_selection' onClick={()=>{onSelection(data)}}>{data}</div>
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