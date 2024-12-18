from sqlalchemy import Column, String, Float, Integer, CHAR, ForeignKey
from sqlalchemy.exc import SQLAlchemyError
from marshmallow import Schema, fields
from database import db


class Endereco(db.Model):
    pkEndereco = Column("pk_endereco", Integer, primary_key=True, autoincrement=True)
    fkEndereco = Column(
        "fk_endereco_cliente",
        Integer,
        ForeignKey("cliente.pk_cliente", ondelete="CASCADE"),
        nullable=False,
    )
    provincia = Column("provincia", String(30))
    municipio = Column("municipio", String(100))
    cidade = Column("cidade", String(30))
    bairro = Column("bairro", String(30))
    
    def add_endereco(endereco):
        try:
            db.session.add(endereco)
            db.session.commit()
        except SQLAlchemyError as error:
            db.session.rollback()
            print(f"Erro ao adicionar endereco do cliente: {error}")
            return None
    
    def to_dict(self):
        return{
            "pkEndereco": self.pkEndereco,
            "idClienteEndereco":self.fkEndereco,
            "provincia":self.provincia,
            "municipio":self.municipio,
            "cidade": self.cidade,
            "bairro": self.bairro
        }

class EnderecoSchema(Schema):
    provincia = fields.Str()
    municipio = fields.Str()
    cidade = fields.Str()
    bairro = fields.Str()