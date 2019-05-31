from flask import Flask, current_app
from flask_login import LoginManager


login = LoginManager()


def create_app():
    app = Flask(__name__)

    login.init_app(app)
