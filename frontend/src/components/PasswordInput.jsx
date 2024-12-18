import React, { useState } from "react";
import { Password } from 'primereact/password';

function PasswordInput({id, placeholder, promptLabel}){
    const [value, setValue] = useState('');
    return (
            <Password  
            inputId={id}
            value={value} onChange={(e) => setValue(e.target.value)} 
            placeholder={placeholder}
            promptLabel={promptLabel}
            weakLabel='Fraco'
            mediumLabel='Simples'
            strongLabel='Palavra-passe segura'
            />
    );
}

export default PasswordInput;