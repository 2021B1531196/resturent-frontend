import React from 'react'
import "./BookTable.css"

function BookTable() {
  return (
    <div className='Book_container'>
        <div className="book_form">
                <h2>Make Your Booking</h2>
            <form className='book_content'>
                <p>Name</p>
                <input type='string' placeholder='Name'/>
                <p>Age Group</p>
                <input type='email'  placeholder='Age group'/>
                <p>Number of People</p>
                <input type='number' placeholder=''/>
                <p>Private Room</p>
                <label>
                    <input type="radio"  name="Private_room" value="Yes"></input>Yes</label>
                <label>
                    <input type="radio"  name="Private_room" value="no"></input>No</label>
                
                
                
                <button>Reserve table</button>

            
                
            </form>
               
        </div>
    </div>
  )
}

export default BookTable