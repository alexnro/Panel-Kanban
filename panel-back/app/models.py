from app import login
from flask_login import UserMixin
from werkzeug.security import check_password_hash
from flask_jwt_extended import create_access_token
from mongoengine import Document, fields
import base64
import os


class User(Document, UserMixin):
    username = fields.StringField(required=True, unique=True)
    email = fields.StringField(required=True, unique=True)
    cargo = fields.StringField()
    password_hash = fields.StringField()
    access_token = fields.StringField()

    def __repr__(self):
        return '<User {}>'.format(self.username)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def create_token(self):
        self.access_token = create_access_token(identity=self.username)
        return {'access_token': self.access_token}

    def get_token(self):
        if self.access_token:
            return self.access_token
        self.access_token = base64.b64encode(os.urandom(24)).decode('utf-8')
        return self.access_token

    @staticmethod
    def check_token(token):
        user = User.objects.get(access_token=token)
        if user is None:
            return None
        return user


@login.user_loader
def load_user(username):
    user = User.objects(username=username)
    if not user:
        return None
    return User(user['username'])


class Task(Document):
    _id = fields.StringField(primary_key=True)
    title = fields.StringField()
    message = fields.StringField()
    column = fields.StringField()
    kanban = fields.StringField()

    @staticmethod
    def delete_tasks_from_kanban(kanban):
        Task.objects(kanban=kanban).delete()


class Kanbans(Document):
    _id = fields.StringField(primary_key=True)
    name = fields.StringField()
