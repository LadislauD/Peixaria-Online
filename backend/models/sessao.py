from sqlalchemy import Column, String, Float, Integer, CHAR, ForeignKey
from sqlalchemy.exc import SQLAlchemyError
from marshmallow import Schema, fields
from database import db

class Session(db.Model):
    sessionId = Column('session_Id', String(10), primary_key=True)