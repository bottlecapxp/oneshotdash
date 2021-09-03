import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'

/**
* @author
* @function Notifications
**/

const Notifications = (props) => {
    const [titleArray, setTitleArray] = useState([])

  
    const [message, setMessage] = useState('Your Message')
    const onSubmission = e =>{
        e.preventDefault()
        setTitleArray((prevState)=>{
            return [...prevState, e.target.messageTitle.value]
        })
        console.log(titleArray)

    }
    useEffect(()=>{

    }, [titleArray])


    
  return(

    <div>
     <Header title={'Set Rates'}/>
        <div className='notifications_holder'>
        <div className='notification_wrapper'>
            <h3 className='not_wrapper_titles'>Your Notifications</h3>
            <div>
              {titleArray.map((data)=>(<li  class='not_title_' key={data}>{data}</li>))}     
            </div>
            {/* <button className='mutual_not_btn'>Add</button> */}
        </div>
        <div className='notification_wrapper middle'>
        <h3 className='not_wrapper_titles'>Edit Notification</h3>
        <form id='not_form' onSubmit={onSubmission}>
            <input id='not_msg_title' type='text' maxlength='25' name='messageTitle' placeholder='Title' />
            <textarea id='message' name='message'  onChange={(e)=>{ setMessage(e.target.message)}} value={message}></textarea>
            <input type='file' id='file' name='file'/>

        <input type='submit' className='mutual_not_btn' value='Submit'/>
        </form>
        
        </div>
        <div className='notification_wrapper'>
        <h3 className='not_wrapper_titles'>Set Conditions</h3>
        <select name='dn' className='conditions_template'>
        {titleArray.map((data)=>(<option  class='not_title_' key={data}>{data}</option>))}  
        </select>

        <form className='conditions'>
            <h4 id="trigger_title">Triggers</h4>
            <div className='checkbox'>
                <input type='checkbox' name='expiration' value='expiration' />
                <label htmlFor='expiration'>On expiration</label>
            </div>
            <div className='checkbox'>
                <input type='checkbox' name='impound' value='impound' />
                <label htmlFor='expiration'>On Impound</label>
            </div>
            <div className='checkbox'>
                <input type='checkbox' name='launch' value='launch' />
                <label htmlFor='expiration'>On launch</label>
            </div>
            <div className='checkbox'>
                <input type='checkbox' name='payment' value='Pay_confirmed' />
                <label htmlFor='expiration'>On payment confirmed</label>
            </div>
            <div id='submit_div'>
            <input type='submit' className='mutual_not_btn' value='Submit'/>
            </div>
            
        </form>


        
        </div>
        {/* Add list of content here */}
        
        </div>
    </div>
   )

 }

export default Notifications