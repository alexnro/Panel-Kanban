from flask import Flask
from flask_login import LoginManager
from flask_cors import CORS
from config import Config
from flask_pymongo import MongoClient, PyMongo
from flask_jwt_extended import JWTManager
from flask_mongoengine import MongoEngine


login = LoginManager()
mongo = PyMongo()
client = MongoClient('mongodb+srv://admin:123@panel-kanban-5mm05.mongodb.net/kanban?retryWrites=true&w=majority')
db = client.kanban
mongo_engine = MongoEngine()
jwt_manager = JWTManager()
cors = CORS()


def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    login.init_app(app)
    mongo.init_app(app)
    mongo_engine.init_app(app)
    jwt_manager.init_app(app)
    cors.init_app(app)

    from app.auth import bp as auth_bp
    app.register_blueprint(auth_bp)

    from app.task import bp as task_bp
    app.register_blueprint(task_bp)

    from app.kanbans import bp as kanbans_bp
    app.register_blueprint(kanbans_bp)

    return app


from app import models
