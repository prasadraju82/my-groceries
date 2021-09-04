import React, { useContext, useState, useRef } from 'react';
import "../../css/Grocery.css";
import MyContext from '../context/MyContext';

function InputItem(){

    //const [items, setItemes] = useState([]);
    const value = useRef(); 
   // const [value, setValue] = useState(""); //useRef

    const { items = [], setItemes} = useContext(MyContext);

    let itemQuantity = 1
    const addItems = ()=>{
        debugger;
        // disable add button
        //value.current.focus();
        if(value !== ""){
            let isQuantityChanged = false;
            
            if(items.length === 0){
                setItemes([ {item: value.current.value, quantity: itemQuantity, isPurchased: false}]);
                // setItemes([ {item: value, quantity: itemQuantity, isPurchased: false}]);
            }
            if(items.length > 0){
                // items.forEach(index => { //use find index instead of for each
                //     if(index.item.trim().toUpperCase() === value.trim().toUpperCase()){
                //         index.quantity = index.quantity + 1;
                //         isQuantityChanged = true;
                //     }
                // });

                debugger;

                let itemFound = items.findIndex(index => index.item.trim().toUpperCase() === value.trim().toUpperCase());

                if(itemFound > -1){
                    items[itemFound].quantity = items[itemFound].quantity + 1;
                    isQuantityChanged = true;
                }
                //add else condition

                if(!isQuantityChanged) 
                {
                    items.push({item:value.current.value,quantity:itemQuantity, isPurchased: false})
                    // items.push({item:value,quantity:itemQuantity, isPurchased: false})
                }

                setItemes([...items]);
            }
            value.current.value = "";
            //setValue("")
        }
    }

    // const onItemChange = (event) => {
    //     debugger;
    //     if(value.current != null){
    //         if(value.current.value === ""){
    //             document.getElementsByTagName('button')[0].disabled = true;
    //         }
    //         else{
    //             document.getElementsByTagName('button')[0].disabled = false;
    //         }
    //     }
    // }
    console.log((value?.current?.value), value.current);

    return(
        <>
            <div>
                    <label>Item Name: </label>
                    {/* <input type = "text" value={value} onChange={(event) => {setValue(event.target.value)} } /> */}
                    <input type = "text" ref={value} onChange={() => {console.log((value && value.current && value.current.value && value.current.value.length > 0))}} />
                    <button onClick={() => {addItems()}} style={{margin:'5px'}} disabled={(value && value.current && value.current.value && value.current.value.length > 0) }>
                        Add 
                    </button>
                </div>
        </>
    );
}

export default InputItem;