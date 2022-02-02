import { useLocation } from "react-router-dom";
import Signup from "./component/signup";
import Signin from "./component/signin";
import Profilecom from "./component/profilecom";
import warna from "./profile.module.css";



function Profile(props){

    const location = useLocation()

    if (location.state!=null) {
        switch(location.state.mode){
            case "Sign up":
      return(<Signup/>) 
            case "profile":
                return(
                    <Profilecom/>
                )  
            default :
                
    }
    }
    return(<Signin/>)
    
}

export default Profile;