import { useState } from "react";
import warna from "./signin.module.css";

function Signin(){
    const [login,setLogin]=useState({
        username:"",
        password:""
    })

    const handleChangeLoginNama= event=>{
        setLogin(prevstate=>({...prevstate,username:event.target.value}))
    }
    const handleChangeLoginPassword= event=>{
        setLogin(prevstate=>({...prevstate,password:event.target.value}))
    }
    const sumbitLoginHandeler = event =>{
        event.preventDefault();
        console.log(login)
    }
    return(<div className={warna.center}><form className={warna.signup} onSubmit={sumbitLoginHandeler}><h1>Sign in</h1>
    <label >Nama<input type="text" value={login.username} onChange={handleChangeLoginNama}></input></label>
    <label >Password<input type="password" value={login.password} onChange={handleChangeLoginPassword}></input></label>
    <input type="submit" value="selesai"></input>
    </form></div>)
}

export default Signin;