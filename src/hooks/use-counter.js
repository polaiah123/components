import { useState, useEffect } from "react";

function useCounter(initialCount) {
    const [count, setCount] = useState(initialCount);
  
    useEffect(()=> {
        console.log(count);
    }, [count]);
    
    const incrementHandle = () => {
    setCount(count + 1);
    };
  
    return{
      count,
      incrementHandle
    }
     
  
  }

  export default useCounter;