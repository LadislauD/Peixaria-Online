from sqlalchemy import Column, String, Integer, ForeignKey, select
from sqlalchemy.exc import SQLAlchemyError
from marshmallow import Schema, fields
from database import db, all_datas

class Imagem(db.Model):
    pkImagem = Column(
        "pk_imagem", 
        Integer, 
        primary_key=True, 
        autoincrement=True
        )
    fkPeixe = Column(
        "fk_peixe",
        Integer,
        ForeignKey("peixe.pk_peixe", ondelete="CASCADE")
    )
    urlImagem = Column("url_imagem", String(250))
    
    def all_imagem():
        return all_datas(Imagem)
    
    def to_dict(self):
        return{
            "pkImagem": self.pkImagem,
            "fkPeixe": self.fkPeixe,
            "urlImagem": self.urlImagem
        }

class ImagemSchema(Schema):
    urlImagem = fields.Str()
    pkImagem = fields.Int()
    fkPeixe = fields.Int()