from flask import Flask
from flask_login import LoginManager
from config import Config


login = LoginManager()


def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    login.init_app(app)

    return app
