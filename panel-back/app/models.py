from app import login
from flask_login import UserMixin
from werkzeug.security import check_password_hash
from flask_jwt_extended import create_access_token, create_refresh_token
from json import dumps
from datetime import datetime, timedelta
from mongoengine import Document, fields
import base64
import os


class User(Document, UserMixin):
    username = fields.StringField(required=True)
    email = fields.StringField(required=True)
    password_hash = fields.StringField()
    access_token = fields.StringField()
    refresh_token = fields.StringField()
    token_expiration = fields.DateTimeField()

    def __repr__(self):
        return '<User {}>'.format(self.username)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def create_token(self):
        self.access_token = create_access_token(identity=self.username)
        self.refresh_token = create_refresh_token(identity=self.username)
        return {'access_token': self.access_token, 'refresh_token': self.refresh_token}

    def get_token(self, expires_in=3600):
        now = datetime.utcnow()
        if self.access_token and self.token_expiration > now + timedelta(seconds=60):
            return self.access_token
        self.access_token = base64.b64encode(os.urandom(24)).decode('utf-8')
        self.token_expiration = now + timedelta(seconds=expires_in)
        return self.access_token

    def revoke_token(self):
        self.token_expiration = datetime.utcnow() - timedelta(seconds=1)

    @staticmethod
    def check_token(token):
        user = User.objects.get(token=token)
        if user is None or user.token_expiration < datetime.utcnow():
            return None
        return user


@login.user_loader
def load_user(username):
    user = User.objects(username=username)
    if not user:
        return None
    return User(user['username'])
