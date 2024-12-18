from datetime import datetime, timedelta, timezone
import os
import jwt
from flask import make_response, request

def create_token(id, username):
    timeNow = datetime.now(timezone.utc)
    expiresIn = timedelta(minutes=3)
    
    payload = {
        "sub": id,
        "name": username,
        "exp": timeNow + expiresIn
    }
    
    token = jwt.encode(
        payload,
        os.getenv('SECRET'),
        "HS256",
    )    
    return token

def decodeToken(tokenReceive):
    return jwt.decode(tokenReceive, os.getenv('SECRET'), algorithms=["HS256"])

def get_token_validation():
    token = request.cookies.get('session')
    if not token:
        print('inexistente')
        return make_response({'message': 'Token não encontrado!'}, 401)
    try:
        dados = decodeToken(token)
        return make_response({
            'message': 'Usuário autenticado', 
            'username': dados['name'],
            'idCliente': dados['sub'],
            'confirmation': True
            }, 200)
        
    except jwt.ExpiredSignatureError:
        print('expirado')
        return make_response({
            'message': 'Token expirado!',
            'confirmation': False            
            }, 401)
    except jwt.InvalidTokenError:
        print('invalido')
        return make_response({
            'message': 'Token inválido!',
            'confirmation': False
            }, 401)