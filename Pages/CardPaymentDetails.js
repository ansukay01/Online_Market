import React from "react";
import { useState } from "react";
import './CardPaymentDetails.css';
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import { Link } from "react-router-dom";

 export const CardPaymentDetails = () => {
    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cardExpiryDate, setExpiryDate] = useState('');
    const [cvvCode, setCvvCode] = useState('');
    const [dataInput, setDataInput] = useState('');

    const submitThis=()=>{
        const info={cardName:cardName,
                    cardNumber:cardNumber,
                    cardExpiryDate: cardExpiryDate,
                    cvvCode: cvvCode
                    };
         setDataInput([info]);
    } 

    return (
        <div className="systemCard">
    <div className="cardLocation">
    <div className="paymentCard">
        <br/>
    <h3 className="welcomeFont">Payment Details</h3>
        <form action="" onSubmit={submitThis}>
            <div>
                <label className="passwordAndEmail" htmlFor="email"></label>
                <br />
                <div className="boxPosition">
                <input type='text' className="box" name='email' id='email'
                 placeholder="Name on the Card" value={cardName} 
                onChange={(e)=>setCardName(e.target.value)} />
                </div>
            </div>
             
            
                <div>
                    <label className="passwordAndEmail" htmlFor="password"></label>
                    <br />
                    <div className="boxPosition">
                    <input type='text' className="box" name='password' id='password'
                     placeholder="Card Number" value={cardNumber} 
                    onChange={e=>setCardNumber(e.target.value)} />
                    </div>
                </div>

                <div>
                <label className="passwordAndEmail" htmlFor="email"></label>
                <br />
                <div className="boxPosition">
                <input type='text' className="box" name='email' id='email'
                 placeholder="Expiration Date..MM/YY" value={cardExpiryDate} 
                onChange={(e)=>setExpiryDate(e.target.value)} />
                </div>
            </div>

            <div>
                <label className="passwordAndEmail" htmlFor="email"></label>
                <br />
                <div className="boxPosition">
                <input type='text' className="box" name='email' id='email'
                 placeholder="Security Code" value={cvvCode} 
                onChange={(e)=>setCvvCode(e.target.value)} />
                </div>
            </div>
                <br />
                <div className="btnPosition">
                
                <button className="loginBtn" type='submit'>Place Your Order</button>
                
                </div>
        </form>
        </div>
        </div>
        </div>
    );
}



    


