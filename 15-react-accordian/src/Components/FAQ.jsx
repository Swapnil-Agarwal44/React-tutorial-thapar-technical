import { useState } from "react";

export const FAQ = ({cur, toggleButton, isActive}) =>{

    const {question, answer} = cur; 


    return(<>
        <li>
            <div className="accordion-grid">
                <p>{question}</p>
                <button onClick={toggleButton} className={isActive ? "active-btn" : ""}> {!isActive ? "Show" : "Hide"}</button>
                <p> { isActive && answer}</p>
            </div>
        </li>
    </>)
}