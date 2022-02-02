import { useState } from "react"
import warna from "./signup.module.css"

function Signup(){
    const [keadaan,setKeadaan]=useState({
        username:"",
        password:"",
        email:"",
        checkpassword:""
    })
    const handleChangeNama = event =>{
        setKeadaan(prevstate => ({...prevstate,username:event.target.value}))
    }
    const handleChangePassword = event =>{
        setKeadaan(prevstate=>({...prevstate,password:event.target.value}))
    }
    const handleChangeEmail =event =>{
        setKeadaan(prevstate =>({...prevstate,email:event.target.value}))
    }
    const sumbitHandeler = event =>{
        event.preventDefault();
        console.log(keadaan)
    }
    return(<div className={warna.center}>
      <form className={warna.signup} onSubmit={sumbitHandeler}><h1>Sign up</h1>
      <label >Nama<input type="text" value={keadaan.username} onChange={handleChangeNama}></input></label>
      <label >Email<input type="email" value={keadaan.email} onChange={handleChangeEmail}></input></label>
      <label >Password<input type="password" value={keadaan.password} onChange={handleChangePassword}></input></label>
      <label >ulangPassword<input type="password" value={keadaan.checkpassword} onChange={event => {setKeadaan(prevstate=>({...prevstate,checkpassword:event.target.value}))}}></input></label>
      {keadaan.checkpassword===keadaan.password?<div>benar</div>:<div>salah</div>}
      <input type="submit" value="selesai"></input>
      </form></div>)
}
export default Signup;