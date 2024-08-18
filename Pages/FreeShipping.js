import React, { useState } from "react";
import './FreeShipping.css';

function FreeShipping () {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastname] =useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [country, setCountry] = useState('');
    const [district, setDistrict] = useState('');
    const [address, setAddress] = useState('');
    const [postalCode, setPostalcode] = useState('');
    const [dataInput, setDataInput] = useState('');

    const submitThis =()=>{
      const  info={firstName:firstName, 
              lastName:lastName,
              phoneNumber:phoneNumber,
             country:country,
             district:district,
             address:address,
             postalCode:postalCode
            };
          setDataInput([info]);
    }

    return (
        <div className="shippingCardPosition">
        <div className="shippingCard">
            <br />
            
            <h3 className="infoFont">Personal Info</h3>
            <form action="" onSubmit={submitThis}>
                <div>
                <label htmlFor="firstname"></label>
                <div className="boxPosition">
                <input className="box" type='text' name='firstName' id='firstName' 
                value={firstName}
                placeholder="First Name"
                onChange={e=>setFirstName(e.target.value)} />
                </div>
                </div>
             <br />
              <div>
               <label htmlFor="firstname"></label>
                <div className="boxPosition">
                <input className="box" type='text' name='lastName' id='lastName' 
                value={lastName}
                placeholder="Last-Name"
                onChange={e=>setLastname(e.target.value)} />
                </div>
                </div>
                <br />
                <div>
                <label htmlFor="phoneNumber"></label>
                <div className="boxPosition">
                <input className="box" type='text' name='phoneNumber' id='phoneNumber' 
                value={phoneNumber}
                placeholder="Phone-Number"
                onChange={e=>setPhoneNumber(e.target.value)} /> 
                </div>
                </div>
                <br />
                <div>
                <label htmlFor="country"></label>
                <div className="boxPosition">
                <input className="box" type='text' name='country' id='country' 
                value={country}
                placeholder="Country"
                onChange={e=>setCountry(e.target.value)} /> 
                </div>
                </div>
                <br />
                <div>
                <label htmlFor="firstname"></label>
                <div className="boxPosition">
                <input className="box" type='text' name='district' id='district' 
                value={district}
                placeholder="District/State"
                onChange={e=>setDistrict(e.target.value)} />
                </div>
                </div>
                 <br/>
                 <div>
                 <label htmlFor="address"></label>
                 <div className="boxPosition">
                <input className="box" type='text' name='address' id='address' 
                value={lastName}
                placeholder="Address"
                onChange={e=>setAddress(e.target.value)} />
                </div>
                </div>
                <br/>
                <div>
                <label htmlFor="postalcode"></label>
                <div className="boxPosition">
                <input className="box" type='text' name='postalcode' id='postalcode' 
                value={lastName}
                placeholder="Postal Code"
                onChange={e=>setPostalcode(e.target.value)} />
                </div>
                </div>
                <br />
                <div className="btnPosition">
                <button className="loginBtn" type="submit">Submit and Save</button>
                </div>


              
            </form> 
        
        

            
            </div>
        </div>
    );
}

    export default FreeShipping;