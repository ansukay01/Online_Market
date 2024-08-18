import React, {useState} from "react";
import './Register.css';


function Register () {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dataInput, setDataInput] = useState('');

        const submitThis=()=>{
             const info={firstName:firstName,
                         lastName:lastName,
                         email:email,
                        password:password}
                        setDataInput([info]);
        } 
    return (
        <div className="signupCardPosition">
        <div className="signupCard">
            <br />
            <h3 className="signupFont">Sign Up</h3>
        <form onSubmit={submitThis}>
            <div>
                <label htmlFor="firstName"></label>
                <div className="boxPosition">
                    <input className="box" type="text" name="firstName" id="firstName"
                     placeholder="First Name"
                     value={firstName} onChange={e=>(e.target.value)} />
                </div>
            </div>
            <br/>
            <div>
            <label htmlFor="lastName"></label>
                <div className="boxPosition">
                    <input className="box" type="text" name="lastName" id="lastName"
                     placeholder="Last-Name"
                     value={lastName} onChange={e=>(e.target.value)} />
            </div>
            </div>
            <br/>
            <div>
            <label htmlFor="email"></label>
                <div className="boxPosition">
                    <input className="box" type="text" name="email" id="email"
                     placeholder="Email"
                     value={email} onChange={e=>(e.target.value)} />
            </div>
            </div>
            <br/>
            <div>
            <label htmlFor="email"></label>
                <div className="boxPosition">
                    <input className="box" type="text" name="password" id="password"
                     placeholder="Password"
                     value={email} onChange={e=>(e.target.value)} />
                     </div>
            </div>
            <br />
            <div className="btnPosition">
                <button className="loginBtn" type="submit">Sign Up</button>
                </div>


        </form>
        </div>
        </div>
    );
    }

    export default Register;
       