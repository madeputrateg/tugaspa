import warna from "./navbar.module.css";
import { Link} from "react-router-dom";
import { useState } from "react";

const linkstyle={
  margin:"1rem",
};


function Navgasi (props){
  const [login,statelogin]=useState(true);
  const [drop,setdrop]=useState(true)
    return(<div className={props.className}>
    <div className={warna.kurungan}>
      <div className={warna.kiri}><Link to="/home" style={linkstyle}><img src="/logo192.png" className={warna.logo} alt="Logo" ></img></Link>
      <Link  className={warna.tombol} to="/home">Home</Link>
      <Link className={warna.tombol} to="/profile" state={{mode:"profile"}} >Profile</Link>
      </div>
      {login?<div className={warna.kanandrops}>
      {drop?<div className={warna.dropper}><div><img className={warna.gmbprof} src="/logo192.png" title="logos" ></img><p> nama yang ada </p><span onClick={()=>{setdrop(prevstate=>!prevstate)} } className={warna.spanbut}> {" >"}</span></div>
      <div><p>log out</p></div><div><p>setting</p></div></div>
      :<div className={warna.kays}><img className={warna.gmbprof} src="/logo192.png" title="logos" ></img><p> nama yang ada </p><span onClick={()=>{setdrop(prevstate=>!prevstate)}} className={warna.spanbut}> v</span></div>}</div>
      :<div className={warna.kanan}><img src="/logo192.png" className={warna.gmbprof} alt="profile" ></img>
      <Link className={warna.tombol} to="/profile" state={{mode:"Sign on"}}>Sign in</Link><Link to="/profile" state={{mode:"Sign up"}} className={warna.tombol}>Sign up</Link></div>}
    </div></div>)
}

export default Navgasi;