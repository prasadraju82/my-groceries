import {  useState, useEffect } from "react";
import InputItem from './pages/InputItem';
import DisplayItems from './pages/DisplayItems';
import { ItemProvider } from './context/MyContext'

function GroceryMain(params) {
    //const [value, setValue] = useState("");
    const [items, setItemes] = useState([]);

    const ClearAll = () => {
        setItemes([]);
    }

    useEffect(() => {
        setItemes(JSON.parse(window.localStorage.getItem('item')));
        
      }, []);
    
    useEffect(() => {
        window.localStorage.setItem('item', JSON.stringify(items));
        
      }, [items]);
      
    return(<ItemProvider value={{ items, setItemes }}>
        <div>
            <InputItem />
            <DisplayItems/>
            <div>
                <button onClick={() => {ClearAll()}}>
                    Clear All Items
                </button>
            </div>
        </div>
    </ItemProvider>)
    
}

export default GroceryMain;