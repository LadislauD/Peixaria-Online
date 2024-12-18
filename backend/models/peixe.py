from sqlalchemy import Column, String, Float, Integer, select, insert, delete, update
from sqlalchemy.exc import SQLAlchemyError
from marshmallow import Schema, fields
from database import db, all_datas, limit_datas, execute_query

class Peixe(db.Model):
    pkPeixe = Column("pk_peixe", Integer, primary_key=True, autoincrement=True)
    nomePeixe = Column("nome_peixe", String(20), nullable=False)
    imgPeixe = Column("imagem_peixe", String(200))
    quantidadePeixe = Column("quantidade_peixe", Integer, nullable=False)
    categoriaPeixe = Column("categoria_peixe", String(20), nullable=False)
    precoPeixe = Column("preco_peixe", Float(precision=2, asdecimal=True), nullable=False)
    
    def all_peixe():
        return all_datas(Peixe)
    
    def get_limit_peixes(limit):
        return limit_datas(Peixe, limit)
    
    def delete_a_peixe(id):
        query = (
            delete(Peixe).
            where(Peixe.pkPeixe == id)
        )
        execute_query(query,f"Erro ao deletar peixe com id: { id }")
    
    def add_peixe(self, peixe):
        query = (
            insert(Peixe).
            values(
                nomePeixe=peixe['name'], 
                quantidadePeixe=peixe['quantidade'],
                categoriaPeixe=peixe['categoria'],
                precoPeixe=peixe['preco']                                                           
            ))
        execute_query(query, f"Erro ao adicionar peixe: { peixe }")
    
    def to_dict(self):
        return{
            "pkPeixe": self.pkPeixe,
            "nomePeixe": self.nomePeixe,
            "quantidadePeixe": self.quantidadePeixe,
            "categoriaPeixe": self.categoriaPeixe,
            "imgPeixe": self.imgPeixe,
            "precoPeixe": self.precoPeixe
        }

class PeixeSchema(Schema):
    nomePeixe = fields.Str()
    quantidadePeixe = fields.Int()
    imgPeixe = fields.Str()
    categoriaPeixe = fields.Str()