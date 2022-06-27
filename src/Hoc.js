import { useEffect, useState } from "react";
import axios from "axios";
// This is not a component, its a function that takes input as component and returns a modified component
const Hoc = (InputComponent) => {
    const Abc = () => {
        const [userOb, setUserOb] = useState({ username: "default", hobbies: [] });
        useEffect(() => {
            axios.get("userob.json").then((res) => {
                console.log(res.data);
                setUserOb(res.data);
            });
        }, []);
        return <InputComponent userOb={userOb}/>
    };
    return Abc;
};
export default Hoc;