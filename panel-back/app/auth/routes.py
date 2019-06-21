from flask import request
from app.auth import bp
from app.models import User, Task
from werkzeug.security import generate_password_hash
from flask_login import login_user, logout_user
from flask_httpauth import HTTPBasicAuth, HTTPTokenAuth


basic_auth = HTTPBasicAuth()
token_auth = HTTPTokenAuth()


@bp.route('/login', methods=['POST', 'GET'])
def login():
    request_data = request.get_json()
    email = request_data.get("Email")
    password = request_data.get("Password")
    user = User.objects.get(email=email)
    if user is None or not user.check_password(password):
        return "Usuario incorrecto"
    else:
        login_user(user)
        tokens = user.create_token()
        user.update(access_token=tokens.get("access_token"))
        return str(tokens)


@bp.route('/register', methods=['POST', 'GET'])
def register():
    request_data = request.get_json()
    username = request_data.get("Username")
    email = request_data.get("Email")
    password = request_data.get("Password")
    password_hash = generate_password_hash(password)
    user = User(username=username, email=email, password_hash=password_hash)
    user.save()
    return user.email


@bp.route('/logout', methods=['POST', 'GET'])
def logout():
    email = request.args.get("email")
    User.objects.get(email=email).update(unset__access_token=1)
    logout_user()
    return 'Logged out'


@bp.route('/checkToken', methods=['GET'])
def check_token():
    email = request.args.get("email")
    user = User.objects.get(email=email)
    return str(user.access_token)


@bp.route('/getNewTaskId', methods=['GET'])
def get_new_task_id():
    tasks = Task.objects
    aux = 0
    for task in tasks:
        aux += 1
    return str(aux)


@bp.route('/addTask', methods=['POST', 'GET'])
def add_task():
    task_id = request.args.get("task_id")
    title = request.args.get("title")
    message = request.args.get("message")
    column = request.args.get("column")
    task = Task(_id=task_id, title=title, message=message, column=column)
    task.save()
    return str(task)


@bp.route('/deleteTask', methods=['POST', 'GET'])
def delete_task():
    task_id = request.args.get('task_id')
    Task.objects.get(_id=task_id).delete()
    return 'Task deleted'


@bp.route('/updateTask', methods=['POST', 'GET'])
def update_task():
    task_id = request.args.get("task_id")
    title = request.args.get("title")
    message = request.args.get("message")
    column = request.args.get("column")
    task = Task.objects.get(_id=task_id)
    task.update(title=title, message=message, column=column)
    return 'Task updated'
