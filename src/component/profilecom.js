import warna from "./profilecom.module.css";
import Profilehead from "./profilehead";
import Postcoment from "./postcoment";

function Profilecom(){
    return(<div className={warna.middle}>
        <Profilehead/>
        <Postcoment nama="hallo"/></div>)
}
export default Profilecom;