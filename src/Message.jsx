import React, { useState, useEffect } from "react";

const Message = () => {
    const [message, setMessage] = useState("Hello, World!");

    useEffect(() => {
        console.log("Component has mounted");
        document.title = 'New Title';
        const timer = setInterval(() => {
            console.log("Tick")
        }, 1000);
        return () => {
            console.log("Component will unmount");
            clearInterval(timer);
        }
    }, []);
    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
}

export default Message;