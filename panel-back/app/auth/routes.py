from flask import request
from app.auth import bp
from app.auth.models import User
from werkzeug.security import generate_password_hash
from flask_login import login_user


@bp.route('/login', methods=['POST', 'GET'])
def login():
    request_data = request.get_json()
    email = request_data.get("Email")
    password = request_data.get("Password")
    user = User.objects(email=email).first()
    if user is None or not user.check_password(password):
        return "Usuario incorrecto"
    else:
        login_user(user)
        return "Válido"


@bp.route('/register', methods=['POST', 'GET'])
def register():
    request_data = request.get_json()
    username = request_data.get("Username")
    email = request_data.get("Email")
    password = request_data.get("Password")
    password_hash = generate_password_hash(password)
    user = User(username=username, email=email, password_hash=password_hash)
    user.save()
    return user.to_json()
