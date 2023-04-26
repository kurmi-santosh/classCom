import { useState } from "react"

export const HookCounter = () =>{

    const [count, setCount] = useState(0);

    const incrementCount = (num) => {
        for(let i=0; i<num; i++) {
            setCount(prevState => prevState + 1);
        }
    }

    const decrementCount = (num) => {
        //Bad because even though we increment twice, it inc only once
        for(let i=0; i<num; i++){
            setCount(count - 1);
        }
        
    }

    return <div>
            <button style={{display:'inline'}} onClick={()=>decrementCount(2)}>-</button>
            <h3 style={{display:'inline'}}> { count } </h3>
            <button style={{display:'inline'}} onClick={()=>incrementCount(2)}>+</button>
        </div>
}