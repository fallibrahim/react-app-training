import React , {useState } from 'react';

const FormName = () => {
    // const [name, setName] = useState('');
     const [isOpen, setIsOpen] = useState(false);
    return (
    <div> 

<button onClick={() => setIsOpen(!isOpen)}>
{isOpen ? 'Close Menu' : 'Open Menu'}
</button>
{isOpen && <div>This is the menu!</div>}
</div>
    );
}

export default FormName;