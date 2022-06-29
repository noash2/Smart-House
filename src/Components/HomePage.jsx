import React from 'react'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

export default function HomePage(props) {
    const nav = useNavigate();
 
  return (
      <div className='homePageDiv'>
          {props.roomsList.map((element, index) => {
              return <button className='roomBtn' style={{backgroundColor: element.color}}><Link to={`/room${element.name}`}>{element.name}</Link></button>
              // return <button className='roomBtn' style={{backgroundColor: element.color}} onClick={() => {nav('/room')}}>{element.name}</button>
            })}
            <br /><br />
        <Link to='/addroom'><button className='plusBtn' onClick={() => {{props.setPage(2)}}}> + </button></Link>
      </div>
    )
}

// Room productsList={productsList} setProductsList={setProductsList} index={index} roomsList={roomsList}