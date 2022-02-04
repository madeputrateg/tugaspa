import Box from "./box";
import warna from "./postcoment.module.css";
import Comment from "./comment";
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
}]

function Postcoment(props){
    const [ment,setment] = useState(false);
    const [dicobak,setcobak] =useState("");
    return(
        <Box>
            <div className={warna.top}><img src={props.logo} className={warna.logo} title={props.logotitle}></img><h3>{props.nama}</h3></div>
            <div className={warna.textarea}> {props.isi}</div>
            <div className={warna.likeanddislike}><span onClick={()=>{setment(prevstate => !prevstate)}}>comment</span>
            <span onClick={()=>{console.log("like")}}>like</span>
            <span onClick={()=>{console.log("dislike")}}>dislike</span>
            <span>{props.like}</span></div>
            {ment?<div className={warna.comment}>{Data.map((z)=>{return (<Comment nama={z.nama} logo={z.logo} logotitle={z.logotitle} isi={z.isi} likecount={z.like} ></Comment>)})}
            <form onSubmit={(e)=>{e.preventDefault();console.log(dicobak);setcobak("")}}>    
        <input type="textarea" value={dicobak} onChange={e=>setcobak(e.target.value)}></input><input type="submit" title="tulis"></input></form>
        <span onClick={()=>setment(prevstate => !prevstate)} >liat lebih sedikit</span></div>:<span hidden></span>}
        </Box>
    )
}
export default Postcoment;