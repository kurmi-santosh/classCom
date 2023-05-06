import React from "react";

const Display = ({title, value, isAgeEven }) => {
    console.log(`Rendering display ${title}`);
    return (<b> {title}    :   {value} : {isAgeEven ? isAgeEven === true ? 'Even': 'Odd' : ''} </b>)
}

export default React.memo(Display);