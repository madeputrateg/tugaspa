import Box from "./box";
import warna from "./postcoment.module.css";

function Postcoment(props){
    return(
        <Box>
            <div className={warna.top}><img src="./logo192.png" className={warna.logo} title="logo"></img><h3>{props.nama}</h3></div>
            <div className={warna.textarea}> haalhhalhalhldhalsd haalhhalhalhldhalsd haalhhalhalhldhalsd
            haalhhalhalhldhalsd haalhhalhalhldhalsd haalhhalhalhldhalsd
            haalhhalhalhldhalsd haalhhalhalhldhalsd haalhhalhalhldhalsd
            haalhhalhalhldhalsd haalhhalhalhldhalsd haalhhalhalhldhalsd
            haalhhalhalhldhalsd haalhhalhalhldhalsd haalhhalhalhldhalsd
            haalhhalhalhldhalsd haalhhalhalhldhalsd haalhhalhalhldhalsd</div>
            <div className={warna.likeanddislike}><span onClick={()=>{console.log("comment")}}>comment</span>
            <span onClick={()=>{console.log("like")}}>like</span>
            <span onClick={()=>{console.log("dislike")}}>dislike</span>
            <span>{1}</span></div>
        </Box>
    )
}
export default Postcoment;