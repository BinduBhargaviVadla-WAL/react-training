import React, {Component} from 'react';  
  
const Hoc = (HocComponent) =>{
    const Compnt = () => {
        return (
            <div>
                <h1>HOC</h1>
                <HocComponent name="This is inner component"></HocComponent>
            </div>
        )
    }
    return Compnt;
}  
export default Hoc;