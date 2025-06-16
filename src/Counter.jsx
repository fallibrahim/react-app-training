import React, { useState } from 'react';
const Counter = () => {
      const [count, setCount] = useState(0);

    // const handleIncrement = () => {
    //     setCount(count + 1);
    // };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={()=> setCount(count + 1)} className="btn btn-primary">Increment</button>
        </div>
    );
};

export default Counter;