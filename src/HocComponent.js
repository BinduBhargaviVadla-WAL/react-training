import React from 'react'
  
const HocComponent = (OriginalComponent) => {

    const NewComponent = () =>{
        return <OriginalComponent name="Bindu"></OriginalComponent>
    }
    // Returns the new component
    return NewComponent
}
  
export default HocComponent;