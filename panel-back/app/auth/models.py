from app import db, login
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash


class User(db.Document, UserMixin):
    username = db.StringField(required=True)
    email = db.StringField(required=True)
    password_hash = db.StringField()

    def __repr__(self):
        return '<User {}>'.format(self.username)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)


@login.user_loader
def load_user(username):
    user = User.objects(username=username)
    if not user:
        return None
    return User(user['username'])
