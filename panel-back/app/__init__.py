from flask import Flask
from flask_login import LoginManager
from config import Config
from flask_mongoengine import MongoEngine
from flask_jwt_extended import JWTManager

login = LoginManager()
db = MongoEngine()
jwt_manager = JWTManager()


def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    login.init_app(app)
    db.init_app(app)
    jwt_manager.init_app(app)

    from app.auth import bp as auth_bp
    app.register_blueprint(auth_bp)

    from app.api import bp as api_bp
    app.register_blueprint(api_bp, url_prefix='/api')

    return app


from app import models
