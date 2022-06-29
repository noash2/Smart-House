import React, { useState } from 'react'

export default function Products(props) {

    let tempProductsList = props.productsList;
    const [productName, setproductName] = useState('');
    const [quantity, setQuantity] = useState(0);
    
    const setProductAndQuantity = (element) => {
        setproductName(element)
        setQuantity(quantity + 1)
    }
    let flag = false;
    
    const addProductToList = () => {
        debugger;
        let tempProduct = {name:productName, quantity: quantity, status: props.productStatus}
        let productsQuantity = 0
        props.room.productsList.map((element) => {
            productsQuantity += element.quantity
        })

        
        if (props.room.roomType !== 'bathroom' && productName === 'bolier'){
            flag = true;
            setQuantity(quantity - 1)
            alert('ERROR');   
        }

        else if (productsQuantity === 5){
            flag = true;
            alert('ERROR');
        }

        else {

            for (let i = 0; i < tempProductsList.length; i++){

                if (tempProductsList[i].name === 'stereo System' && tempProductsList[i].quantity === 1) {
                    flag = true;
                    alert('ERROR');
                }

                else if(productName === tempProductsList[i].name){
                    flag = true;
                    setQuantity(quantity + 1)
                    tempProductsList[i].quantity += quantity;
                    break;
                }
            }
            if (flag === false){
                tempProductsList.push(tempProduct)
            }
            // props.setProductsList(tempProductsList)
            props.addNewProduct(tempProduct)
        }
    props.setShow(!props.show);
}

  return (
    <div style={{display:!props.show?'inline':'none'}}>
        
        <h1 className='productsHead'>products</h1>
        
        <select className='selectProducts' name="products" onChange={(e) => {setProductAndQuantity(e.target.value)}}>
            <option value="chooseProduct" selected>-- Choose A Product --</option>
            <option value="air Conditioner">Air Conditioner</option>
            <option value="bolier">Bolier</option>
            <option value="stereo System">Stereo System</option>
            <option value="light">Light</option>
        </select><br /><br />

        <button className='addProductBtn' onClick={() => {addProductToList()}}>Add </button>
        
    </div>
  )
}
