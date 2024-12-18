import React, { useState } from 'react';

function NumberPicker({length, initial, final}){
    const [date, setDate] = useState(null);
    let days = Array(31);
    
    for (let i = {initial}; i <= {final}; i++) 
        days[i] = i;

    return (
        <select className='picker-style' name="year" id="yearId">
            {days.map((item, index) => (
                    <option key={index} value={index}>{item}</option>
            ))}
        </select>
    )
}

export default NumberPicker;