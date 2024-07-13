import  { useState } from 'react'
import userContext from '../context/UserContext'
import {useContext} from 'react'
export default function Login() {

    const {setUser} = useContext(userContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();

        setUser({username,password});
    }
  return (
    <div>
        <h1>Login Page</h1>

        <input
        type='text'
        placeholder='Enter Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        <input
        type='text'
        placeholder='Enter Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}></button>      
    </div>
  )
}
