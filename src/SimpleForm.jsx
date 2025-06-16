import React from 'react';

function SimpleForm() {
 const  [username, setUsername] = React.useState('');
  const handleChange  = (event) => {
    setUsername(event.target.value);
    console.log('Username changed:', event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted username:', username);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label><br />
      <input type="text" id="username" name="username"  value={username} onChange={handleChange}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleForm;