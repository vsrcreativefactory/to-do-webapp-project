import React from 'react'

function Child() {
    const childStyle = {color:"red"}
    return (
    <div>
        <h3 style={childStyle}>Child component of Home</h3>
    </div>
  )
}

export default Child