from flask import request
from app.kanbans import bp
from app.models import Kanbans


@bp.route('/addKanban', methods=['POST', 'GET'])
def add_kanban():
    name = request.args.get("name")
    kanban = Kanbans(name=name)
    kanban.save()
    return str(kanban)

