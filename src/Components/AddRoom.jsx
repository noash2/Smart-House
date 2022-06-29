import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

export default function(props) {
  const nav = useNavigate();
  
  const [roomName, setName] = useState('');
  const [roomColor, setColor] = useState('');
  const [roomType, setRoomType] = useState('');
  
  const checkValidName = () => {
    let tempRoom = {name:roomName, roomType:roomType, color:roomColor, productsList:[]}
    
    if (roomName < 1){
      alert ('ERROR')
    }
    else if (roomType !== 'bedroom' && roomType !== 'bathroom' && roomType !== 'kitchen'){
      alert ('ERROR')
    }
    else {
      props.addNewRoom(tempRoom)
    }

    nav('/');
  }

  return (
    <div>

      <select className='selectRoomType' onChange={(e) => {setRoomType(e.target.value)}} name="rooms" required>
        <option className='selectRoomType roomType' value="chooseRoom" selected>-- Choose A Room --</option>
        <option className='selectRoomType roomType' value="bedroom">Bedroom</option>
        <option className='selectRoomType roomType' value="bathroom">Bathroom</option>
        <option className='selectRoomType roomType' value="kitchen">Kitchen</option>
      </select><br />

      <input className='homeInput' onChange={(e) => {setName(e.target.value)}} type="text" placeholder="Please enter the room's name" maxLength={5}/><br />
      <input className='homeInput' onChange={(e) => {setColor(e.target.value)}} type="text" placeholder="Please enter the room's color" /><br />
      
      <button className='addRoomBtn' onClick={() => {checkValidName()}}>Add</button>
    </div>
  )
}
