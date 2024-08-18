import React,{useState} from "react";
import './LogIn.css';


function LogIn  ()  {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dataInput, setDataInput] = useState('');

    const submitThis=()=>{
        const info={email:email,password:password};
         setDataInput([info]);
    }

 return (
     <div className="systemCard">
    <div className="cardLocation">
    <div className="logInCard">
        <br/>
    <h3 className="welcomeFont">Welcome Back</h3>
        <form action="" onSubmit={submitThis}>
            <div>
                <label className="passwordAndEmail" htmlFor="email"></label>
                <br />
                <div className="boxPosition">
                <input type='text' className="box" name='email' id='email'
                 placeholder="Email" value={email} 
                onChange={(e)=>setEmail(e.target.value)} />
                </div>
            </div>
             
            
                <div>
                    <label className="passwordAndEmail" htmlFor="password"></label>
                    <br />
                    <div className="boxPosition">
                    <input type='text' className="box" name='password' id='password'
                     placeholder="Password" value={password} 
                    onChange={e=>setPassword(e.target.value)} />
                    </div>
                </div>
                <br />
                <div className="btnPosition">
                <button className="loginBtn" type='submit'>Log In</button>
                
                </div>
        </form>
        </div>
        </div>
        </div>
    );
}

export default LogIn;
