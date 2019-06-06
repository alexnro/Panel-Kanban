from app.auth import bp


@bp.route('/login', methods=['GET'])
def login():
    print(
        "hello"
    )
    return "hello"


@bp.route('/register', methods=['POST', 'GET'])
def register():
    return True
