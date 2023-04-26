import { useState, useCallback, useReducer } from "react";
import Title from "./Title"
import Display from "./Display";
import Button from "./Button";

export const CallbackDemo = () => {
    
    const [age, setAge] = useState(25);
    
    const IncAge = useCallback(() => {
       setAge( age + 1);
    },[age])

    const initialCount = 0;
    const myReducer = (state, action) =>{
        switch(action){
            case 'inc' :
                return state+1;
            case 'dec':
                return state-1;
            default:
                return state;        
        }
    }
    const [count, dispatchCount] = useReducer(myReducer, initialCount);

    const IncCount = useCallback(() => {
        dispatchCount('inc');
    },[])

    const DecCount = useCallback(()=>{
        dispatchCount('dec')
    },[])
  
    return (
        <div>
            <Title/>
            <div style={{display:'inline-flex', margin:'20px'}}>
                {/* Modify count depends on nothing, and the count depends reducer. So, button won't render */}
                <Button handleClick={ DecCount }> Dec </Button>
                <Display title={'Count'} value={count}/>
                <Button handleClick={ IncCount }> Inc </Button>
            </div>
            <br/>
            <div style={{display:'inline-flex', margin:'20px'}}>
                <Display title={'Age'} value={age}/>
                {/* Inc Age depends on age value, and re-renders when age changes */}
                <Button handleClick={ IncAge }>Inc Age</Button>
            </div>
        </div>
    )
}