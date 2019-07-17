import os


basedir = os.path.abspath(os.path.dirname(__file__))


class Config(object):
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
    MONGODB_SETTINGS = {
        'db': 'kanban',
        'host': 'mongodb+srv://admin:123@cluster0-5mm05.mongodb.net/kanban?retryWrites=true&w=majority'
    }
    MONGO_URI = 'mongodb+srv://admin:123@cluster0-5mm05.mongodb.net/kanban?retryWrites=true&w=majority'
