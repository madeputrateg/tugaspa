import Navgasi from "./component/navbar";
import warna from "./App.module.css";
import Home from "./home";
import { BrowserRouter,Routes,Route,Navigate,Outlet  } from "react-router-dom";


function App (){
 return (
    <BrowserRouter>
    <Routes >
    <Route path="/" element={<div><Navgasi className={warna.navbar}/><Outlet></Outlet></div>}>
        <Route path="" element={<Navigate to="/home"></Navigate>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
    </Route>
    </Routes>
    <Outlet></Outlet>
    </BrowserRouter>
  )   
}

export default App;