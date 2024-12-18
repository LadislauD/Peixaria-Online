from sqlalchemy import Column, delete, update, insert, Integer, ForeignKey
from sqlalchemy.exc import SQLAlchemyError
from marshmallow import Schema, fields
from database import db, execute_query

class Carrinho(db.Model):
    pkPedido = Column("pk_pedido", Integer, primary_key=True, autoincrement=True)
    fkPedidoCliente = Column(
        "fk_pedido_cliente",
        Integer,
        ForeignKey("cliente.pk_cliente", ondelete="CASCADE"),
    )
    fkPedidoPeixe = Column(
        "fk_pedido_peixe",
        Integer,
        ForeignKey("peixe.pk_peixe", ondelete="CASCADE")
    )
    quantidadePeixe = Column(
        "quantidade_peixe",
        Integer
    )
    
    def to_dict(self):
        return{
            "pkPedido": self.pkPedido,
            "fkPedidoCliente": self.fkPedidoCliente,
            "fkPedidoPeixe": self.fkPedidoPeixe
        }
    
    def del_from_cart(id):
        query = (
                delete(Carrinho).
                where(Carrinho.pkPedido == id)
            )
        execute_query(query, f"Erro ao deletar um item no carrinho")
    
    def insert_to_cart(carrinho):
        query = (
                insert(Carrinho).
                values(carrinho)
            )
        execute_query(query, f"Erro ao adicionar item no carrinho")
        
    def update_quantity_cart(id, quantidadePeixe):
        query = (
            update(Carrinho).
            where(Carrinho.pkPedido == id).
            values(quantidadePeixe=quantidadePeixe)
        )
        execute_query(query,f"Erro ao deletar um item no carrinho")
        
class CarrinhoSchema(Schema):
    pkPedido = fields.Int()
    fkPedidoCliente = fields.Int()
    fkPedidoPeixe = fields.Int()