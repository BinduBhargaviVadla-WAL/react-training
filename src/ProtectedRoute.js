import {Navigate, Outlet} from "react-router-dom";
const ProtectedRoute = () =>{
    let loggedIn = parseInt(localStorage.getItem("loggedIn"));
    if(loggedIn){
        console.log("logged in");
        return <Outlet/>
    }
    else{
        console.log("Not logged in")
        return <Navigate to="/login"/>
    }
    
};
export default ProtectedRoute;