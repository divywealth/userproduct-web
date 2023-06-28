import './Signin';
import { Link, useNavigate} from 'react-router-dom'
import { useState } from 'react';
import { loginApi } from '../../../api/authapi';

function Signin() {
    const navigate = useNavigate()
    const [phoneNo, setPhoneNo] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            "phoneNo": phoneNo,
            "password": password
        };
        try {
            const response = await loginApi(data);
            console.log(response)
            navigate('/homepage', {state: {response}});
        } catch (error) {
            
        }
    }
    return (
        <div id="signIn">
        <h1>Welcome Back</h1>
    <p>Please enter your details</p>
    <form onSubmit={handleSubmit}>
        <label>Phone No</label>
        <input type="tel" placeholder="Enter phoneNo" required value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)}/>

        <label>Password</label>
        <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)}/>

        <div className="submitBox">
            <button className="submit">Sign In</button>
        </div>

        <div id="signUp">Dont have an account? <Link to="/Registration" id="signUp">Sign up</Link></div>
    </form>
  </div>
    )
}

export default Signin