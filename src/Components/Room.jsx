import React, { useState } from 'react'
import Products from './Products'


export default function Room(props) {
    // const [productStatus, setProductStatus] = useState('red')
    const [show, setShow] = useState(true)

    const changeProductStatus = (indexOfProduct) => {
        // debugger;
        // let temp = props.productStatus;
        // if (temp === 'red'){
        //     temp ='green';
        // }
        // else {
        //     temp = 'red';
        // }
        // props.setProductStatus(temp)
        props.turnOnOffProduct(props.indexOfRoom, indexOfProduct);
    }

    return (
            <div className='roomDetailsDiv'>
                <h2 className='roomUnderline'>room</h2>
                <h2><span className='underline'>room's name </span>: {props.details.name}</h2>
                <h2 className='roomTypeLine'><span className='underline'>room type </span>: {props.details.roomType}</h2>
                
                <div className='addProductDiv'>

                    <button className='addProductBtn' style={{display:!show?'none':'inline'}} onClick={() => {setShow(!show)}}>add product</button>
                    {!show ? <Products show={show} addNewProdect={props.addNewProduct} setShow={setShow} room={props.details}
                     productStatus={props.productStatus} productsList={props.details.productsList} /> : ''}
                     
                     {props.details.productsList.map((element, i) => {
                         <button onClick={() => {changeProductStatus(i)}} className='productBtn'
                          style={{backgroundColor:props.details.productsList[i].status}}>{element.name}, {element.quantity}</button>
                     })}
                </div>

            </div>
    )
}
