import { useEffect, useState } from "react"
import { MouseContainer } from "./unmountMouse";

export const EffectUpdates = ()=> {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const [showMousePosition, setShowMousePosition] = useState(false);
    

    useEffect(()=>{
        // Only once
        document.title = `Initialized with ${count}`
        console.log('Init count');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    

    useEffect(()=>{
        console.log('Updating doc title');
        document.title = `Clicked ${count} times`;
    },[count])



    return (
        <div style={{marginTop:'20px'}}>
            <input type="text" value={name} onChange={(event)=> {
                setName(event.target.value)
                console.log('Name updated');
            }}/>
            <button onClick={()=>{setCount(count+1)}}>Increment</button>
            
            <br/>

            <div style={{marginTop:'20px'}}>
                <button onClick={()=> setShowMousePosition(!showMousePosition)}>
                    {showMousePosition ? <span>Hide</span> : <span>Show</span>}
                </button>
                <br/>
                {showMousePosition && <MouseContainer/>}
            </div>
        </div>
    )
        
}