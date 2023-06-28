import './Registration.css';
import { Link, useNavigate} from 'react-router-dom'
import { registerApi } from '../../../api/authapi';
import { useState } from 'react';

function Registration() {
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setemail] = useState('')
    const [phoneNo, setphoneNo] = useState('')
    const [password, setpassword] = useState('')
    const [user, setUser] = useState({})
    const [token, setToken] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": password,
            "phoneNo": phoneNo
        }
       try {
        const response = await registerApi(data);
        setUser(response.user);
        setToken(response.access_token)
        console.log(user, token)
        navigate('/homepage', {state: {response}})
       } catch (error) {
        throw error
       }
    }
    return (
        <div id="signIn">
        <h1>Create An Account</h1>
        <form onSubmit={handleSubmit}>
              <label>FirstName</label>
              <input type="text" placeholder="FirstName" required value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
              <label>LastName</label>
              <input type="text" placeholder="LastName" required value={lastName} onChange={(e) => setlastName(e.target.value)}/>
              <label>Email</label>
              <input type="email" placeholder="Email" required value={email} onChange={(e) => setemail(e.target.value)}/>
              <label>Phone No</label>
              <input type="tel" placeholder="Phone No" required value={phoneNo} onChange={(e) => setphoneNo(e.target.value)}/>
              <label>Password</label>
              <input type="password" placeholder="password" required value={password} onChange={(e) => setpassword(e.target.value)}/>
              <div className="submitBox">
                  <button className="submit">Create an Account</button>
              </div>
              <div id="signUp">Already have an account?<Link to="/" id="signUp">Sign in</Link></div>
        </form>
    </div>
    )
}

export default Registration