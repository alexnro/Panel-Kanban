from flask import request
import app
from flask_cors import cross_origin


@app.route('/login', methods=['GET', 'POST'])
@cross_origin
def login():
    return request.args
