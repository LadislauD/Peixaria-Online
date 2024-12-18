from models.cliente import Cliente
from models.telefone import Telefone
from controler.token_controler import create_token
from flask import make_response, request
from datetime import datetime, timedelta, timezone
from argon2 import PasswordHasher
#import jwt

def get_registered():
    dados = request.get_json()
    email = dados["email"]
    usuarioExist = Cliente.query.filter_by(email=email).first()
    
    if usuarioExist:
        return make_response(
            {"response": "Conta já existe"
             }, 200)
    
    ph = PasswordHasher()
    
    password = ph.hash(dados["password"])
    numeroTelefone = dados["numeroTelefone"] 

    cliente = Cliente(
        primeiroNome=dados["primeiroNome"],
        ultimoNome=dados["ultimoNome"],
        email=email,
        senha=password,
        sexo=dados["sexo"],
    )

    clienteInserted = cliente.add_cliente(cliente)
        
    if numeroTelefone:
        clienteId = cliente.to_dict()["pkcliente"]
        telefone = Telefone(fkTelefone=clienteId, numeroTelefone=numeroTelefone)
        telefone.add_telefone(telefone)
                
    return make_response({
            "message": "CLIENTE REGISTRADO" 
        }, 200)

def get_all_clients():
    clientes = Cliente.query.all()
    clienteDict = [x.to_dict() for x in clientes]
    return make_response(
        clienteDict,
        200)

def get_all_clients():
    clientes = Cliente.query.all()
    clienteDict = [x.to_dict() for x in clientes]
    return make_response(clienteDict, 200)

def make_login():    
    bodyJson = request.get_json()
    emailRequest = bodyJson["email"]
    passwordRequest = bodyJson["password"]  
     
    ph = PasswordHasher()
        
    try:
        usuario = Cliente.select_a_client_by_email(emailRequest)
        ph.verify(usuario.senha, passwordRequest)
        jwt = create_token(usuario.pkcliente, usuario.primeiroNome)
    except:
        response = make_response({
            "message": "Email or password invalid",
            "response": False
            }, 401)
        return response
    
    response = make_response({
        "response": "Success",
        "username": usuario.primeiroNome
        }, 200)        
    response.set_cookie("session", jwt)
    return response