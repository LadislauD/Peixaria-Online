import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from dotenv import load_dotenv
from rotas.endpoints import direction
from database import db
load_dotenv()

app = Flask(__name__)
app.register_blueprint(direction)
app.config["SQLALCHEMY_DATABASE_URI"] = (
    f"mysql+pymysql://{os.getenv('DATABASE_USER')}:{os.getenv('DATABASE_PASSWORD')}@{os.getenv('DATABASE_HOST')}/{os.getenv('DATABASE_NAME')}"
)
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'
#db = SQLAlchemy()

CORS(app, origins="*")
CORS(app, supports_credentials=True)

db.init_app(app)
with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(host="localhost", port=5001, debug=True)