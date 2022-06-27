import { useContext } from "react";
import UserObContext from "../UserObContext";
import UserName from './UserName';
const UserPersonalInfo=(props)=>{
    const userOb = useContext(UserObContext);
    return(
        <div>
            <UserName/>
            <div>Name: {userOb.personal.name}</div>
            <div>Phone no: {userOb.personal.phoneNo}</div>
        </div>
    )
}
export default UserPersonalInfo