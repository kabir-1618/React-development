import React from 'react'

function Header({title}) {
  return (
    <div style={{backgroundColor : "rgb(4, 85, 144)",color: 'white',fontSize: "20px", padding : 10}}>

        <h2>{title}</h2>
        </div>
  )
}

export default Header