from flask import Flask
from flask_login import LoginManager
from config import Config
from flask_mongoengine import MongoEngine
from flask_cors import CORS


login = LoginManager()
db = MongoEngine()
cors = CORS()


def create_app(config_class=Config):
    app = Flask(__name__)
    cors.init_app(app)
    app.config.from_object(config_class)

    from app.auth import bp as auth_bp
    app.register_blueprint(auth_bp)

    login.init_app(app)
    db.init_app(app)

    return app


from app import models
