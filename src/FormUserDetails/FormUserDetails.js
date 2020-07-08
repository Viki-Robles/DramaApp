import React from "react";


export default function FormUserDetails() {
    return (
        <>
            <label>Choose your level</label>
            <select className="levels" id="levels">
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
        </>
    )
}