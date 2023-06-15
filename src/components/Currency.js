import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const handleCurrency = (currency) => {
        dispatch({
            type: 'CHG_CURRENCY', 
            payload: currency
        })
    }

    return (
        <div style={{
            backgroundColor: 'lightgreen',
            }}
            className='alert alert-primary text-white'>
            <span>Currency: </span>
            <select style={{ 
                        backgroundColor: 'lightgreen',                        
                    }}
                    className="text-white"
                    id="CurrencySelect" 
                    onChange={(event) => handleCurrency(event.target.value)}>
                <option className="text-black" value='$' name="dolar">$ Dollar</option>
                <option className="text-black" value='£' selected name="pound">£ Pound</option>
                <option className="text-black" value='€' name="euro">€ Euro</option>
                <option className="text-black" value='₹' name="ruppee">₹ Ruppee</option>
            </select>
        </div>
    )
};

export default Currency;