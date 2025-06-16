import React, { useRef } from 'react';

function UseRef() {
// 1. Create a ref object
const inputRef = useRef(null);

const handleClick = () => {
// 2. Access the DOM element
inputRef.current.focus();
};

return (
<div>
<input ref={inputRef} type="text" />
<button onClick={handleClick}>Focus the input</button>
</div>
);
}

export default UseRef;