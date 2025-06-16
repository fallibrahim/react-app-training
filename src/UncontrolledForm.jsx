import React, { useRef } from 'react';

function UncontrolledForm() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted value:', inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="uncontrolled-input">Uncontrolled Input:</label>
      <input
        type="text"
        id="uncontrolled-input"
        ref={inputRef}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;