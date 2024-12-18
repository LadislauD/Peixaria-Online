import React, { useEffect, useState } from 'react';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Home from './pages/HomePage';
import PerfilConfig from './pages/PerfilConfig';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from './components/ProtectedRoutes';
import ShopCart from './pages/ShopCart';
import NotFound from './pages/NotFound';

function DefineRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          Component={Home}
          errorElement={NotFound}
        />
        <Route
        path='*'
        Component={NotFound}
        />
        <Route path='/notFound' Component={NotFound} />
        <Route path='/login' Component={LogIn} />
        <Route path='/cadastrar' Component={SignUp} />
        <Route path='/carrinho' Component={ShopCart} />
        
        <Route element={<ProtectedRoutes />}>
          <Route path='/perfilConfig' Component={PerfilConfig} />
          <Route path='/sobre' />
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

const App = () => {
  const get_request = async (endpoint, parameters = '') => {

    let response;

    try {
      response = await axios.get(`${urlDatabase}${endpoint}`,
        //{ params: parameters },
        { withCredentials: true }
      )
    } catch (error) {
      msgError(error)
    }
    return response;
  }

  return (
    <DefineRoutes />
  )
}

export default App;