import React, { useContext } from 'react';
import "../../css/Grocery.css";
import MyContext from '../context/MyContext';

function DisplayItems(){
    const { items = [], setItemes} = useContext(MyContext);

    const handleChecks = (prod) =>{
        const updatedItems = items.map((el) => {
            if(el.item === prod.item){
                return{ ...el, isPurchased: !el.isPurchased}
            }
            return el;
        });
        setItemes(updatedItems);
    }
     
    const products = [];
    if(items != null){
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
                        <input type="checkbox" value={p.item} onClick={() => handleChecks(p)} checked={p.isPurchased} />
                        {/* <button onClick={() => handleChecks(p)}>Click</button> */}
                    </div>
                </div>
            )
        })
    }

    return(
        <>
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
        </>
    )
}

export default DisplayItems;