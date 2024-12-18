import React, { useState } from 'react';

function DayPicker({ dayPicked, logic }) {
    let days = Array(31);
    for (let i = 1; i <= 31; i++)
        days[i] = i;
    return (
        <select
            className='picker-style p-inputtext'
            {...logic}
            name="day"
            id="dayId"
            //onChange={e => dayPicked(e.target.value)}
        >
            {days.map((item, index) => (
                <option key={index} value={index}>{item}</option>
            ))}
        </select>
    )
}

export default DayPicker;