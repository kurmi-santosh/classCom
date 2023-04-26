import React from "react";

const Display = ({title, value}) => {
    console.log(`Rendering display ${title}`);
    return (<b> {title}    :   {value} </b>)
}

export default React.memo(Display);