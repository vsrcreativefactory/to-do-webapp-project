import React from "react";

const New = () => {
    let isLogged = true;
    const CheckUser = (props) => {
            if (isLogged) {
                return <h1 className="text-success">Success, {props.name}</h1>
            } else {
                return <h1 className="text-danger">Please login</h1>
            }
            
    }
    return (
        <div>
            <CheckUser name={"VSR"} />
        </div>
    )
    
    
}

export default New;