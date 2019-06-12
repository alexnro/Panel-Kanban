from app import db, login
from flask_login import UserMixin
from werkzeug.security import check_password_hash
from flask_jwt_extended import create_access_token, create_refresh_token
from json import dumps


class User(db.Document, UserMixin):
    username = db.StringField(required=True)
    email = db.StringField(required=True)
    password_hash = db.StringField()

    def __repr__(self):
        return '<User {}>'.format(self.username)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def create_token(self):
        access_token = create_access_token(identity=self.username)
        refresh_token = create_refresh_token(identity=self.username)
        return dumps({'access_token': access_token, 'refresh_token': refresh_token})


@login.user_loader
def load_user(username):
    user = User.objects(username=username)
    if not user:
        return None
    return User(user['username'])
