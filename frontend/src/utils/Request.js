import axios from 'axios';
import { msgError, redirectFunction } from "./helpers";
import { urlDatabase, basePath } from './constantes';
import { redirectDocument } from 'react-router-dom';

export const get_request = async (endpoint, parameters = undefined) => {
    const config = {
        withCredentials: true
    };

    if (parameters)
        config.params = parameters;

    const response = await axios.get(`${urlDatabase}${endpoint}`, config)
    return response.data;
}

export const post_request = async (endpoint, data) => {
    try {
        const config = {
            withCredentials: true,
        };
        const response = await axios.post(`${urlDatabase}${endpoint}`,
            data,
            config
        )
        return response
    } catch (error) {
        msgError(error)
    }
};