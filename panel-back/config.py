import os


basedir = os.path.abspath(os.path.dirname(__file__))


class Config(object):
    MONGODB_SETTINGS = {
        'db': 'kanban',
        'host': 'mongodb+srv://admin:unicornio@panel-kanban-5mm05.mongodb.net/kanban?retryWrites=true&w=majority'
    }
