from sqlalchemy import Column, String, Float, Integer, CHAR, ForeignKey, select
from sqlalchemy.exc import SQLAlchemyError
from marshmallow import Schema, fields
from database import db

class Cliente(db.Model):
    pkcliente = Column("pk_cliente", Integer, primary_key=True, autoincrement=True)
    primeiroNome = Column("primeiro_nome", String(30), nullable=False)
    ultimoNome = Column("ultimo_nome", String(30))
    email = Column("email", String(100), nullable=False, unique=True)
    senha = Column("senha", String(100), nullable=False)
    sexo = Column("sexo", CHAR, nullable=False)
        
    def select_a_client_by_email(emailRequest):
        return Cliente.query.filter_by(email=emailRequest).first()
    
    def add_cliente(self, cliente):
        try:
            db.session.add(cliente)
            db.session.commit()
            return cliente
        except SQLAlchemyError as error:
            db.session.rollback()
            print(f"Erro ao adicionar um cliente: {error}")
            return None
    
    def to_dict(self):
        return{
            "pkcliente": self.pkcliente,
            "primeiroNome": self.primeiroNome,
            "ultimoNome": self.ultimoNome,
            "email": self.email,
            "senha": self.senha,
            "sexo": self.sexo
        }

class ClienteSchema(Schema):
    primeiroNome = fields.Str()
    ultimoNome = fields.Str()
    email = fields.Str()
    senha = fields.Str()
    sexo = fields.Str()