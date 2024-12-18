import React, { useState } from "react";

function YearPicker({ yearPicked, logic }) {
    let days = Array(31);
    for (let i = 1905; i < 2025; i++)
        days[i] = i;
    return (
        <select
            className='picker-style p-inputtext'
            {...logic}
            name="year"
            id="yearId"
            //onChange={e => yearPicked(e.target.value)}
        >
            {days.map((item, index) => (
                <option key={index} value={index}>{item}</option>
            ))}
        </select>
    )
}

export default YearPicker;