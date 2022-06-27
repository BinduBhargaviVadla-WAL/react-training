import {useEffect,useState} from 'react'

const LearnUSeEffect=()=>{
    let [no,setNo]=useState(0);
    useEffect(()=>{
        alert("Component Loaded")
        let componentRemoved=()=>{
            alert("The Component is removed so i called")
        }
        return componentRemoved
    },[])
    useEffect(()=>{
        console.log(`The value of no is changed and new value =${no}`)
    })
    return(
        <div className='content'>
            useState vs useEffect hook example.
            <br/>State value = <strong>{no}</strong><br/>
            <input type="number" value={no} onInput={(event)=>{
                setNo(event.target.value)
            }}/>
        </div>
    )
}

export default LearnUSeEffect