import os


basedir = os.path.abspath(os.path.dirname(__file__))


class Config(object):
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
    MONGODB_SETTINGS = {
        'db': 'panel-kanban',
        'host': 'mongodb+srv://admin:unicornio@panel-kanban-5mm05.mongodb.net/test?retryWrites=true&w=majority'
    }
