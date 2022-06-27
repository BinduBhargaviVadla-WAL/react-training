import { useContext } from "react";
import UserObContext from "../UserObContext";
const UserName =()=>{
    const userOb = useContext(UserObContext)
    return(
       <h1>{userOb.personal.name}</h1>
    )
}
export default UserName;