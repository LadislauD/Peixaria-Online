import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputMask } from 'primereact/inputmask';
import InputPassword from '../components/InputPassword';
import SelectGender from '../components/SelectGender';
import Name from '../components/Name';
import DayPicker from '../components/DayPicker';
import MonthPicker from '../components/MonthPicker';
import YearPicker from '../components/YearPicker';
import Centralizar from '../components/Centralizar';
import { redirectFunction } from '../utils/helpers';
import { basePath, urlDatabase } from '../utils/constantes';
import 'primeicons/primeicons.css';
import { post_request } from '../utils/Request';

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [gender, setGender] = useState('');

  const requestData = async (data) => {
    let errorMsg = document.getElementById('error-password')
    let confpassword = document.getElementById('confpassword');

    if (data.password != data.confPassword) {
      errorMsg.style.display = "inline";
      confpassword.style.borderColor = 'red';
      return;
    } else {
      errorMsg.style.display = "none";
      confpassword.style.borderColor = "rgb(209, 213, 219)";
    }

    await post_request(`/registration`, {
      primeiroNome: data.primeiroNome, 
      ultimoNome: data.ultimoNome,
      email: data.email, 
      password: data.password,
      numeroTelefone: data.numeroTelefone, 
      sexo: data.sexo
    })
    .then(response => {
      if(response.status === 200){console.log("entrou?")
        redirectFunction(basePath,'/home');}
    }).catch(err =>{
      console.log(err);
    })
    
    /*axios.post(`${urlDatabase}/registration`, {
      primeiroNome: data.primeiroNome, ultimoNome: data.ultimoNome,
      email: data.email, password: data.password,
      numeroTelefone: data.numeroTelefone, sexo: data.sexo
    });

    let responseData = response.data;
    console.log(responseData);
    if (!responseData.message == "400") {
      return;
    }
    redirectFunction('/home')*/
  }

  useEffect(() => {
    console.log("updating")
    //console.log(pass1)
    //let errorPass = document.getElementById("error-password");
    //let errorConf = document.getElementById("error-conf");
    //if (pass1 == '' && errorMsg0 != undefined) errorMsg0.style.display = "none"
    //else errorMsg0.style.display = "inline"

    //if (pass2 == '' && errorMsg1 != undefined) errorMsg1.style.display = "none"
    //else errorMsg1.display = "inline"

    /*if (!checkPass(pass1, pass2)) {
      errorMsg.display = "inline"
      document.getElementById('confpassword').style.borderColor = "red";
    }
    else {
      errorMsg.display = "none"
      document.getElementById('confpassword').style.borderColor = "rgb(209, 213, 219)";
    }*/
  })

  return (
    <Centralizar>
      <div className='p-7 sign-div'>
        <div className='title-div'>
          <h2>Faça o seu cadastro</h2>
        </div>

        <div className='flex flex-column gap-2'>

          <form onSubmit={handleSubmit(requestData)} className='sign-div'>
            <div className='input-sect' style={{ flexDirection: 'row' }}>
              <Name
                placeholder={"Nome"}
                id={"nome-id"}
                logic={{ ...register("primeiroNome", { required: true }) }} />
              <Name
                placeholder={"Sobrenome"}
                id={"sobrenome-id"}
                logic={{ ...register("ultimoNome", { required: true }) }} />
            </div>
            {(errors.primeiroNome || errors.ultimoNome) &&
              <p className='text-red-500 m-0 p-0'>
                Você precisa fornecer o seu Nome e Sobrenome!
              </p>}

            <InputText onChange={(e) => {
              e.preventDefault()
            }}
              placeholder={'Digite seu email'}
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email &&
              <p className='text-red-500 m-0 p-0'>
                Você precisa digitar um email
              </p>}

            <InputPassword
              placeholder={"Digite uma nova palavra-passe"}
              logic={{ ...register("password", { required: true }) }}
              id={"password"}
              errors={errors.password &&
                <p className='text-red-500 m-0 p-0'>
                  Você precisa definir uma palavra-passe
                </p>}
            />

            <InputPassword
              placeholder={"Confirme a sua palavra-passe"}
              logic={{ ...register("confPassword", { required: true }) }}
              id={"confpassword"}
              errors={errors.confPassword &&
                <p className='text-red-500 m-0 p-0'>
                  Você precisa confirmar a palavra-passe
                </p>}
            />
            <p
              style={{ display: "none" }}
              id='error-password'
              className='text-red-500 m-0 p-0'>
              Verifique se a palavra-passe fazem correspondência
            </p>

            <SelectGender
              getGender={setGender}
              logic={{ ...register("sexo", { required: true }) }}
              errors={errors.sexo &&
                <p className='text-red-500 m-0 p-0'>Defina um genero!</p>}
            />

            <div className='flex gap-4'>
              <DayPicker logic={{ ...register("day") }} />
              <MonthPicker logic={{ ...register("month") }} />
              <YearPicker logic={{ ...register("year") }} />
            </div>

            <InputMask
              id="phoneNumberId"
              mask="999999999"
              placeholder="(244) 9xx-xxx-xxx"
              {...register("numeroTelefone")} />

            <Button
              label="Criar conta"
              type='submit'
              style={{ height: "3rem", backgroundColor: "#067ABB" }}
              className='w-12 text-white hover:no-underline mt-3'
              id='button-sign-submit'
            />
          </form>
        </div>

        <div className='flex gap-8 mt-5'>
          <a href="/login" className='links-to-go text-blue-700 flex gap-2'>
            <p style={{ margin: "0", display: "inline" }}>Fazer login</p>
          </a>

          <a href="/" className='links-to-go text-blue-700 flex gap-2'>
            <p style={{ margin: "0", display: "inline" }}>Voltar a pagina inicial</p>
          </a>
        </div>

      </div>
    </Centralizar>
  )
}

export default SignUp;