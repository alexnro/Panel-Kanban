from flask import request
from app.auth import bp
from app.auth.models import User
from werkzeug.security import generate_password_hash


@bp.route('/login', methods=['GET'])
def login():
    print(
        "hello"
    )
    return "hello"


@bp.route('/register', methods=['POST', 'GET'])
def register():
    req_data = request.get_json()
    username = req_data.get("Username")
    email = req_data.get("Email")
    password = req_data.get("Password")
    password_hash = generate_password_hash(password)
    user = User(username=username, email=email, password_hash=password_hash)
    user.save()
    print(req_data.get("Username"))
    return req_data.get("Username")
