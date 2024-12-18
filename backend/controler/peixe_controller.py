from models.peixe import Peixe
from flask import make_response, request

def get_all_peixes():
      peixes = Peixe.all_peixe()    
      response = make_response({
          "dados": peixes
          }, 200)
      return response