import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import './componentsStyles/emailInputStyle.css';

function EmailInput({ placeholderValue }) {
    const [value, setValue] = useState('');
    return (
        <InputText
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholderValue}
        />
    );
}

export default EmailInput;