import React, { useEffect, useState } from 'react';
const InputPassword = ({ id, logic, placeholder, onChanged, errors }) => {
    const [eyeSwap, setEye] = useState('pi pi-eye');
    const [up, setUp] = useState('');

    const swapEye = () => {
        var x = document.getElementById(id);
        if (eyeSwap == 'pi pi-eye') {
            setEye('pi pi-eye-slash');
            x.type = "text";
            return;
        }
        setEye('pi pi-eye');
        x.type = "password";
    }

    return (
        <div className='relative'>
            <input
                type={'password'}
                id={id}
                style={{
                    border: "1px solid rgb(209, 213, 219)",
                    boxShadow: "none",
                    WebkitPaddingStart: "0.8rem"
                }}
                className='p-inputtext'
                placeholder={placeholder}
                {...logic}
            />

            <i
                style={{
                    right: "10px",
                    top: "12px",
                    cursor: "pointer",
                    position: "absolute",
                }}
                id="toggleEye"
                onClick={swapEye}
                className={eyeSwap}>
            </i>
            {errors}
        </div>
    );
}

export default InputPassword;