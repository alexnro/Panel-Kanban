from flask import request
from app.kanbans import bp
from app.models import Kanbans, Task


@bp.route('/addKanban', methods=['POST', 'GET'])
def add_kanban():
    _id = request.args.get("_id")
    name = request.args.get("name")
    kanban = Kanbans(_id=_id, name=name)
    kanban.save()
    return str(kanban)


@bp.route('/getKanban', methods=['POST', 'GET'])
def get_kanban():
    kanbans = Kanbans.objects
    kanban_dict = []
    for kanban in kanbans:
        data = {
            '_id': kanban.id,
            'name': kanban.name
        }
        kanban_dict.append(data)
    return str(kanban_dict)


@bp.route('/deleteKanban', methods=['POST', 'GET'])
def delete_kanban():
    name = request.args.get('name')
    Task.delete_tasks_from_kanban(name)
    Kanbans.objects.get(name=name).delete()
    return 'Kanban deleted'
