import { useEffect } from "react";
import { basePath } from "../utils/constantes";
import { redirectFunction } from "../utils/helpers";
import { Navigate } from "react-router-dom";
import { get_request } from "../utils/Request";

const NotFound = () => {
    useEffect(()=>{
        get_request('/serverOn')
            .then((response) => {
                if(response.status == 200);
                    redirectFunction(basePath, '/');
            })
            .catch((error) => {
            })
    },[])
    return <>
        <div style={{
            fontFamily: 'sans-serif',
            textAlign: 'center',
            padding: '150px',

        }}>
            <h1
                style={{ fontSize: '50px' }}>
                404 Not Found!
            </h1>
            <div>
            Desculpe pelo transtorno, mas estamos a realizar algumas manutenções no momento. 
            Se precisar pode sempre contactar-nos, caso contrário voltaremos online em breve!
            </div>
            <p>&mdash; The Team</p>
        </div>
    </>
}

export default NotFound;
