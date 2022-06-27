import { useContext } from "react";
import UserObContext from "../UserObContext";
const UserProfessionalInfo=()=>{
    const userOb = useContext(UserObContext);
    return(
        <div>
            <div>Company: {userOb.professional.company}</div>
            <div>designation: {userOb.professional.designation}</div>
        </div>
    )
}
export default UserProfessionalInfo