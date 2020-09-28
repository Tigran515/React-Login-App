import React from "react";
import styles from "./Input.module.css"

export default function Input({ placeholder, onChange, value }) {
    return (
        <input  placeholder={placeholder} onChange={onChange} value={value}></input >
    );
}