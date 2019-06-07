from flask import request
from app.auth import bp
from app import db


@bp.route('/login', methods=['GET'])
def login():
    print(
        "hello"
    )
    return "hello"


@bp.route('/register', methods=['POST', 'GET'])
def register():
    req_data = request.get_json()
    print(req_data.get("Username"))
    return req_data.get("Username")
