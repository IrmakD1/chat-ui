import React from "react";
import "./styles.css";

const Button = ({ text, handleClick, styling, type = null }) => {
    return (
        <>
        <button className={styling} type={type} onClick={handleClick}>{text}</button>
        </>
    )
}

export default Button