import React from "react";
import "./styles.css";

const Input = ({ text, value, type, handleChange, id }) => {
    return (
        <>
            <label>{text}</label>
            <input type={type} value={value} onChange={(e) => handleChange(e, id)}/>
        </>
    )
}

export default Input