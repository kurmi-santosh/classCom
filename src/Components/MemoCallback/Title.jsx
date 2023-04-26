import React from "react";

const Title = () => {
    console.log('Rendering title component');
    return (<h4 style={{margin:'30px'}}>
        Use Callback hook
    </h4>)
}

export default React.memo(Title);