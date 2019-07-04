from flask import Blueprint

bp = Blueprint('kanbans', __name__)

from app.kanbans import routes
