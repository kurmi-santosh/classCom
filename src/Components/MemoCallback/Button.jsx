import React from "react"

const Button = (props) => {
    console.log(`Rendering buttton ${ props.children } `)
    return (
        <button style={{margin:'-15px 10px', padding:'0px 20px'}} onClick={props.handleClick}>{props.children}</button>
    )
}

export default React.memo(Button)