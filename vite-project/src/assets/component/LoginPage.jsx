import React, { useState } from 'react'
import styles from '../component/Login.module.css'
// import { FaRegUser } from "react-icons/fa";
// import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const Login = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (event) =>{
        event.preventDefault();
        if (username === "sesika" && password === "345678"){
            navigate('/datamodels');
        }
        else if(username == '')
        {
            alert("Username is Empty")
        }
        else if(password == '')
            {
                alert("Password is Empty")
            }
        else{
            alert("Invalid Username OR Password");
        };
    }
  return (
    <>
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.header}>
                <h1>LOGIN</h1>
            </div>
            <form onSubmit={handleLogin}>
                <div className={styles.username}>
                    <label htmlFor="username">USERNAME:</label>
                    <div className={styles.name}>
                        <input type="text"  onChange={(e) => setUsername(e.target.value)}/>
                        {/* <FaRegUser className={styles.icons} /> */}
                    </div>
                </div>     
                <div className={styles.userpassword}>
                    <label htmlFor="username">PASSWORD:</label>
                    <div className={styles.name}>
                        <input type="password" value={password} onChange={(e) =>setPassword(e.target.value)}/>
                        {/* <RiLockPasswordLine className={styles.icons}/> */}
                    </div>
                </div>    
                <div className={styles.button}>
                    <button type='submit'>SUBMIT</button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}
export default Login;