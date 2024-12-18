from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import select
db = SQLAlchemy()

def all_datas(dataClass):        
        result = db.session.execute(
            select(dataClass)
            ).all()      
        datas = [x[0].to_dict() for x in result]
        return datas

def limit_datas(dataClass, limit):
    result = db.session.query(dataClass).limit(limit)
    datas = [x.to_dict() for x in result]
    return datas

def execute_query(statement, errorMessage):
    try:
        db.session.execute(statement)
        db.session.commit()
    except SQLAlchemyError as error:
        db.session.rollback()
        print(errorMessage)
        return None