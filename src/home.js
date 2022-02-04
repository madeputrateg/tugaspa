import warna from "./home.module.css"
import Postcoment from "./component/postcoment";
import Box from "./component/box";
import { useState } from "react";
const Data=[{
    nama:"are you they we",
    logo:"/logo192.png",
    logotitle:"logonya",
    isi:"bapak kau pea babi",
    like:999
},
{
    nama:"kek",
    logo:"/logo192.png",
    logotitle:"logonya",
    isi:"bapak kau pea babi",
    like:999
},
{
    nama:"yakodasi",
    logo:"/logo192.png",
    logotitle:"logonya",
    isi:"bapak kau pea babi",
    like:999
},
{
    nama:"are you they we",
    logo:"/logo192.png",
    logotitle:"logonya",
    isi:"bapak kau pea babi",
    like:999
},
{
    nama:"kek",
    logo:"/logo192.png",
    logotitle:"logonya",
    isi:"bapak kau pea babi",
    like:999
},
{
    nama:"yakodasi",
    logo:"/logo192.png",
    logotitle:"logonya",
    isi:"bapak kau pea babi",
    like:999
}]

function Home(props){

    const [hasil,sethasil]=useState("")
    return (<div className={warna.isi}>
        <Box>
            <form className={warna.form} onSubmit={(e)=>{e.preventDefault();}}>
                <label><input type="text" value={hasil} onChange={e=>sethasil(e.target.value)} placeholder="write something new"></input></label>
                <label><input type="submit" value="Post"></input></label>
            </form>
        </Box>
        {Data.map((e)=>{return (<Postcoment nama={e.nama} logo={e.logo} logotitle={e.logotitle} isi={e.isi} like={e.like}></Postcoment>)})}
    </div>)
}

export default Home;