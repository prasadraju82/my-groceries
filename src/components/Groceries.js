import React, { useState} from 'react';
import "../css/Grocery.css";
function Groceries(){
    const [value, setValue] = useState("");
    const [items, setItemes] = useState([]);

    let itemQuantity = 1
    const addItems = ()=>{

        if(value !== ""){
            let isQuantityChanged = false;
            
            if(items.length === 0){
                setItemes([...items, {item: value, quantity: itemQuantity, isPurchased: false}]);
            }
            if(items.length > 0){
                items.forEach(index => {
                    if(index.item === value){
                        index.quantity = index.quantity + 1;
                        isQuantityChanged = true;
                    }
                });

                if(!isQuantityChanged)
                {
                    items.push({item:value,quantity:itemQuantity, isPurchased: false})
                }

                setItemes([...items]);
            }

            setValue("");
        }
    }

    const handleChecks = (prod) =>{
        const updatedItems = items.map((el) => {
            if(el.item === prod.item){
                return{ ...el, isPurchased: !el.isPurchased}
            }
            return el;
        });
        setItemes(updatedItems);
    }

    const clearAllItems = () => {
        setItemes([]);
    }
     
    const products = [];
    items.forEach(p => { 
        products.push(
        <div className="flex-container">
            
                <div>
                  <label  style={{ color: p.isPurchased ? "red" : "black" }}> {p.item}</label> 
                </div>
                <div>
                    {p.quantity}
                </div>
                <div>
                    <input type="checkbox" value={p.item} onClick={() => handleChecks(p)} />
                    {/* <button onClick={() => handleChecks(p)}>Click</button> */}
                </div>
            
        </div>
    )
    })
    return(
        <>
            <div>
                <div>
                    <label>Item Name: </label>
                    <input type = "text" value={value} onChange={(event) => {setValue(event.target.value)} } />
                    <button onClick={() => {addItems()}} style={{margin:'5px'}}>
                        Add 
                    </button>
                </div>
                <div style={{height:'20px', paddingBottom:'12px'}}>
                    <h3>Grocery List</h3>
                </div>
                <div className="flex-container">
                    <div style={{fontSize: '20px', backgroundColor: 'lightskyblue'}}>Product</div><div style={{fontSize: '20px', backgroundColor: 'lightskyblue'}}>Quantity</div><div style={{fontSize: '20px',backgroundColor: 'lightskyblue'}}>Is Purchased</div>
                </div>
                <div style={{textAlign:'center'}}>
                        {
                            products
                        }
                </div>
            </div>
            <button onClick={() => {clearAllItems()}}>Clear All</button>
        </>
    )
}

export default Groceries;