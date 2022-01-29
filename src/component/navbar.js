import warna from "./navbar.module.css";


function Navgasi (props){
    return(<div className={props.className}>
    <div className={warna.kurungan}>
      <div className={warna.kiri}><img src="/logo192.png" className={warna.logo} alt="Logo"></img>
      </div>
      <div className={warna.kanan}>tidak?</div>
    </div></div>)
}

export default Navgasi;