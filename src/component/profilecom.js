import warna from "./profilecom.module.css";
import Profilehead from "./profilehead";
import Postcoment from "./postcoment";
const Data =[
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
    }
]

function Profilecom(){
    return(<div className={warna.middle}>
        <Profilehead/>
        {Data.map((e)=>{return (<Postcoment nama={e.nama} logo={e.logo} logotitle={e.logotitle} isi={e.isi} like={e.like}></Postcoment>)})}</div>)
}
export default Profilecom;