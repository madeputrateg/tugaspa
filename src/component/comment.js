import { useState } from "react";
import warna from "./comment.module.css";

function Comment (props){
    return <div className={warna.isicomment}>
        <div className={warna.nama}><img src={props.logo} title={props.logotitle} className={warna.logo}></img><h3>{props.nama}</h3></div>
        <p>{props.isi}</p>
        <div className={warna.likecom}>
    <span onClick={()=>console.log("Like")}>like</span>
    <span onClick={()=>console.log("dislike")}>dislike</span>
    <span>{props.likecount}</span></div></div>
    
}
export default Comment;