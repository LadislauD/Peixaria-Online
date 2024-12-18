from database import db
from sqlalchemy import Column, String, Float, Integer, CHAR, ForeignKey
from sqlalchemy.exc import SQLAlchemyError
from marshmallow import Schema, fields


class Telefone(db.Model):
    pkTelefone = Column("pk_telefone", Integer, primary_key=True, autoincrement=True)
    fkTelefone = Column(
        "fk_endereco_cliente",
        Integer,
        ForeignKey("cliente.pk_cliente", ondelete="CASCADE"),
        nullable=False,
    )
    numeroTelefone = Column("numero_telefone", String(9), nullable=False)
    
    def to_dict(self):
        return{
            "pkTelefone": self.pkTelefone,
            "numeroTelefone": self.numeroTelefone,
            "idClienteTelefone":self.fkTelefone
        }
    
    def add_telefone(self, telefone):
        try:
            db.session.add(telefone)
            db.session.commit()
        except SQLAlchemyError as error:
            db.session.rollback()
            print(f"Erro ao adicionar telefone do cliente: {error}")
            return None

class TelefoneSchema(Schema):
    numeroTelefone = fields.Str()