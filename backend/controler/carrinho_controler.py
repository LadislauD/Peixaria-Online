import json
from models.carrinho import Carrinho
from controler.token_controler import decodeToken
from flask import make_response, request

def convert_to_json(value):
    return json.loads(value.decode('utf-8'))

def add_item_on_cart():
    try:
        json = request.get_json()
        token = request.cookies.get('session')
        cliente = decodeToken(token)
        values = []
        for item in json:
            values.append({
                'fkPedidoPeixe': item['id'],
                'fkPedidoCliente': cliente['sub']
            })
        #Carrinho.insert_to_cart(values)
    except Exception as error:
        print(f"Precisa fazer login!\n {error}")