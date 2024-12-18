from flask import Blueprint
from controler.cliente_controler import *
from controler.peixe_controller import *
from controler.carrinho_controler import *
from controler.token_controler import get_token_validation
direction = Blueprint("directions", __name__)

@direction.route("/validation", methods=["GET"])
def validation(): 
    return get_token_validation()

@direction.route("/serverOn", methods=["GET"])
def serverCheck(): 
    return 'True'

@direction.route("/peixes/all", methods=["GET"])
def peixes():
    return get_all_peixes()      

@direction.route("/login", methods=["POST"])
def login():
    return make_login()

@direction.route("/client/all", methods=["GET"])
def all_client():
    return get_all_clients()

@direction.route("/registration", methods=["POST"])
def registration():
    return get_registered()
    
@direction.route("/carrinho/add", methods=["POST"])
def cartAdd():
    return add_item_on_cart()