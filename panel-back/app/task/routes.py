from flask import request
from app.task import bp
from app.models import Task


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


@bp.route('/getTasks', methods=['POST', 'GET'])
def get_task():
    tasks = Task.objects
    for task in tasks:
        print(task)
    return ''
