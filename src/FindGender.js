import { useState,useEffect } from "react";
import axios from "axios";
const FindGender = () =>{
    let [gender, setGender] = useState("");
    let [count, setCount] = useState(0);
    let [probability,setProbability] =useState(0);
    let [personName, setPersonName] = useState("initial name");
    let [image,SetImage] = useState();
    // useEffect(() =>{
    //     axios.get("https://api.genderize.io/?name=luc").then((res) =>{
    //         console.log(res.data.gender);
    //         setGender(res.data.gender);
    //         setCount(res.data.count);
    //         setProbability(res.data.probability);
    //     });
    // },[]);
    useEffect(() =>{
        axios.get('https://fakestoreapi.com/products/1').then((res) =>{
            console.log(res.data);
            alert("res.data")
            //setCountries(res.data.country);
            SetImage(res.data.image);
        });
    },[]);
    const callServer = () =>{
        axios.get(`https://api.genderize.io/?name=${personName}`).then((res) =>{
            console.log(res.data);
            setGender(res.data.gender);
            setCount(res.data.count);
            setProbability(res.data.probability);
        });
    }

    return (
        <div className="border">
            <h1>Your Gender and count:</h1>
            <input type="text" value={personName}
            onInput = {(event) => {
                setPersonName(event.target.value);
            }}
            />
            <button onClick={callServer}>Get Gender</button>
            <h1>Gender : {gender}</h1>
            <h1>Count: {count}</h1>
            <h1>probability: {probability}</h1>
            <img src={image}/>
        </div>
    );
}
export default FindGender;