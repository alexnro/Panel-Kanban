from flask import request
import app


@app.route('/login')
def login():
    return request.args
