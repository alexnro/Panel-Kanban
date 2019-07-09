from flask import request
from app.kanbans import bp
from app.models import Kanbans


@bp.route('/addKanban', methods=['POST', 'GET'])
def add_kanban():
    name = request.args.get("name")
    kanban = Kanbans(name=name)
    kanban.save()
    return str(kanban)

@bp.route('/getKanban', methods=['POST', 'GET'])
def get_kanban():
    kanbans = Kanbans.objects
    kanban_dict = []
    for kanban in kanbans:
        data = {
            'name': kanban.name
        }
        kanban_dict.append(data)
    return str(kanban_dict)