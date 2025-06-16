function MyComponent() {
    const inlineStyles = {
      backgroundColor: '#f0f0f0',
      padding: '20px',
      color: '#333333',
      fontSize: '24px'
    };
    return (
     <div style={inlineStyles}>
       <h1 style={inlineStyles}>Hello, Inline Styles!</h1>
     </div>
);
}

export default MyComponent;