import { useState, useEffect } from "react";

export const MouseContainer = () => { 

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (e)=>{
        console.log('Mouse position set');
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(()=>{
        // Only once
        window.addEventListener('mousemove', logMousePosition)

        return ()=> {
            // Unmounting code
            window.removeEventListener('mousemove', logMousePosition);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div>
            Mouse Position X : {x}
            Mouse Position Y : {y}
        </div>
    )
}