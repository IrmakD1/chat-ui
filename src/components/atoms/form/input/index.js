import React from "react";
import "./styles.css";

const Input = ({ text, value, type }) => {
    return (
        <>
            <label>{text}</label>
            <input type={type} value={value}/>
        </>
    )
}

export default Input