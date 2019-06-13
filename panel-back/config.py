import os


basedir = os.path.abspath(os.path.dirname(__file__))


class Config(object):
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
    MONGODB_SETTINGS = {
        'db': 'kanban',
        'host': 'mongodb+srv://admin:unicornio@panel-kanban-5mm05.mongodb.net/kanban?retryWrites=true&w=majority'
    }
    MONGO_URI = 'mongodb+srv://admin:unicornio@panel-kanban-5mm05.mongodb.net/kanban?retryWrites=true&w=majority'
