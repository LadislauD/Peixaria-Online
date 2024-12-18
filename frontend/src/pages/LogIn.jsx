import React, { useEffect, useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { useForm } from "react-hook-form"
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { urlDatabase, basePath } from '../utils/constantes';
import Centralizar from '../components/Centralizar';
import axios from 'axios';
import 'primeicons/primeicons.css';
import { redirectFunction } from '../utils/helpers';

//componente
const LogIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [displayError, setDisplay] = useState('none');
    const [ingredients, setIngredients] = useState([]);
    const [eyeSwap, setEye] = useState('pi pi-eye');

    const requestFunction = async (data) => {
        await axios.post(`${urlDatabase}/login`, {
            email: data.email,
            password: data.password
        }, {
            withCredentials: true
        })
            .then(resp => {
                let responseData = resp.data;
                if (!responseData.response) {
                    setDisplay('block')
                    return;
                }
                //redirectFunction(basePath, '/');
            })
            .catch(err => console.log(err));
    };

    const swapEye = () => {
        var x = document.getElementById("inputPass");
        if (eyeSwap == 'pi pi-eye') {
            setEye('pi pi-eye-slash');
            x.type = "text";
            return;
        }
        setEye('pi pi-eye');
        x.type = "password";
    }

    const onIngredientsChange = (e) => {
        let _ingredients = [...ingredients];
        if (e.checked)
            _ingredients.push(e.value);
        else
            _ingredients.splice(_ingredients.indexOf(e.value), 1);
        setIngredients(_ingredients);
    }

    return (
        <Centralizar>
            <img
                height="560px"
                src="/Peixaria da Banda(Capa).jpg"
            />
            <div className='login-div'>
                <div>
                    <h1>
                        Faça o login <br />da sua conta
                    </h1>
                </div>

                <form onSubmit={handleSubmit(requestFunction)} className='pt-5'>
                    <div className='flex flex-col gap-2 input-sect'>
                        <InputText placeholder={'Insira seu email'} id='email-input-id'
                            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                            onChange={() => setDisplay('none')}
                        />
                        {errors.email &&
                            <p
                                className='text-red-500'>
                                Email is required and must be valid
                            </p>
                        }

                        <div className='relative'>
                            <input
                                type='password'
                                id="inputPass"
                                style={{
                                    border: "1px solid rgb(209, 213, 219)",
                                    boxShadow: "none",
                                    WebkitPaddingStart: "0.8rem",
                                    height: "44px"
                                }}
                                className='p-inputtext 
                                    p-component 
                                    p-password 
                                    p-password-input 
                                    p-password-panel 
                                    p-password-info'
                                {...register("password", { required: true })}
                                placeholder='Palavra-passe'
                                onChange={() => setDisplay('none')}
                            />
                            {errors.password && <p className='text-red-500'>Password is required</p>}
                            <p style={{
                                display: "none",
                                color: "red",
                                marginTop: "0.5rem",
                                marginLeft: "0.5rem"
                            }}
                                className={displayError}
                                id="username-help">
                                Email ou senha incorrectos certifique-se que digitou correctamente
                                <br /> a sua palavra-passe e o seu email
                            </p>
                            <i style={{
                                right: "10px",
                                top: "12px",
                                cursor: "pointer",
                                position: "absolute",
                            }}
                                id="toggleEye"
                                onClick={swapEye}
                                className={eyeSwap}>
                            </i>
                        </div>
                    </div>

                    <div className="flex justify-content-between align-items-center my-4 w-full">
                        <div className='flex align-items-center '>
                            <Checkbox
                                inputId="ingredient1"
                                value="Cheese"
                                onChange={onIngredientsChange}
                                checked={ingredients.includes('Cheese')} />
                            <label htmlFor="ingredient1" className="ml-2"> Relembra-me </label>
                        </div>
                        <a
                            href="https://react.dev"
                            target="_blank"
                            className='links-to-go text-black-alpha-90'
                        >
                            Esqueci-me da palavra-passe
                        </a>
                    </div>

                    <Button
                        label="Iniciar sessão"
                        type='submit'
                        style={{ height: "40px", backgroundColor: "#067ABB" }}
                        className='w-12 text-white hover:no-underline m-0'
                    />
                </form>

                <div
                    className='flex flex-column flex-wrap text-sm gap-2'
                >
                    <p className=''>
                        Criando uma conta,
                        você aceita os nossos Termos de Serviços e <br />
                        Política de Privacidade
                    </p>
                    <p>Não tem uma conta?
                        <a
                            href="/cadastrar"
                            className='links-to-go text-blue-700 no-underline'>
                            Cadastra-se!
                        </a>
                    </p>
                    <a
                        href="/"
                        style={{ textDecoration: "none" }}
                        className='links-to-go text-blue-700 flex gap-2'>
                        <i className="pi pi-arrow-left text-blue-700"></i>
                        <p
                            style={{
                                margin: "0",
                                display: "inline"
                            }}>
                            Voltar a pagina inicial
                        </p>
                    </a>
                </div>

            </div>
        </Centralizar>
    )
}
export default LogIn;