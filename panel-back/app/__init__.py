from flask import Flask
from flask_login import LoginManager
from config import Config
from flask_mongoengine import MongoEngine

login = LoginManager()
db = MongoEngine()


def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    from app.auth import bp as auth_bp
    app.register_blueprint(auth_bp, url_prefix='/auth')

    from app.api import bp as api_bp
    app.register_blueprint(api_bp, url_prefix='/api')

    login.init_app(app)
    db.init_app(app)

    return app


from app import models
