import Navgasi from "./component/navbar";
import warna from "./App.module.css";
import Home from "./home";
import Profile from "./profile";
import { BrowserRouter,Routes,Route,Navigate,Outlet  } from "react-router-dom";



function App (){
 return (
    <BrowserRouter>
    <Routes >
    <Route path="/" element={<div className={warna.main}><Navgasi className={warna.navbar}/><div className={warna.isi}><Outlet ></Outlet></div></div>} >
        <Route path="" element={<Navigate to="/home"></Navigate>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="profile" element={<Profile></Profile>} ></Route>
    </Route>
    </Routes>
    <Outlet></Outlet>
    </BrowserRouter>
  )   
}

export default App;