import './App.css'
import {HashRouter, Routes, Route} from 'react-router-dom'
import HomePage from './Components/HomePage'
import { useState } from 'react'
import AddRoom from './Components/AddRoom'
import Room from './Components/Room'
import Title from './Components/Title'

export default function App() {

  const [page, setPage] = useState(1);
  const [roomsList, setRoomsList] = useState([]) 
  const [productsList, setProductsList] = useState([])
  const [productStatus, setProductStatus] = useState('red')

  const addNewRoom = (roomDetails)=>{
    setRoomsList([...roomsList,roomDetails])
  }


  const addNewProduct = (product) => {
    setProductsList(...productsList, product)
  }
  // add new product (category,)

  // turnOnOff Product (indexOfRoom,IndexOfProductsList,Condition)


  const turnOnOffProduct = (indexOfRoom, indexOfProduct) => {
    debugger;
    let tempRoom = roomsList[indexOfRoom]
    let tempProduct = tempRoom.productsList[indexOfProduct]
    
    if (tempProduct.status === 'red'){
      tempProduct.status ='green';
    }
    else {
      tempProduct.status = 'red';
    }
  }

  return (
    <div className='App'>

      <Title /> 
      <HashRouter>
        <Routes>
          <Route path='/' element={<HomePage roomsList={roomsList} setPage={setPage}/>}/>
          <Route path='/addroom' element={<AddRoom addNewRoom={addNewRoom} productsList={productsList} roomsList={roomsList} setRoomsList={setRoomsList} setPage={setPage}/>}/>
          {roomsList.map((e,i)=>{
            return <Route path={`/room${e.name}`} element={<Room setProductStatus={setProductStatus} productStatus={productStatus} turnOnOffProduct={turnOnOffProduct} addNewProduct={addNewProduct} details={e} indexOfRoom={i} />}/> 
          })}
        </Routes>

      </HashRouter> 
    </div>
  )
}