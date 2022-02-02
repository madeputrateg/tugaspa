import warna from "./box.module.css";

function Box(props){
    return(<div className={warna.box}>
        {props.children}
    </div>)
}
export default Box;