import { Navigate, Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { get_request } from '../utils/Request.js';
import { basePath } from '../utils/constantes.js';
import { redirectFunction } from '../utils/helpers.js';

const ProtectedRoutes = () => {
  const [tokenValidation, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const verificarSessao = async () => {
    await get_request('/validation')
      .then((response) => {
        //console.log(response)
        if (response.confirmation)
          setIsAuthenticated(true);
      })
      .catch((error) => {
        console.log("TA LIXADO:", error)
        redirectFunction(basePath, '/login')
      })
      .finally(() => {
        setLoading(false)
      })
  };

  useEffect(() => {
    // Função para verificar o status da sessão
    verificarSessao();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  let auth = { 'token': tokenValidation }

  return (
    auth.token ? <Outlet /> : <Navigate to='/login' />
  )
}

export default ProtectedRoutes;