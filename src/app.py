from flask import Flask, request
from flask_cors import CORS
from dbsql import consultar_db_pos01


app = Flask(__name__)

CORS(app)


@app.route('/app/ini/', methods=['POST'])
def ini():
    # users = request.json
    # idUsers = users["id"]
    # print(users["id"])
    sql = f"select nombres,idusuario,des_usuario from usuarios where idusuario='{idUsers}'"
    response = consultar_db_pos01(sql)
    print(response)

    return 'nothing asfterss'


@app.route('/app/ini/login')
def login():
    None


@app.route('/admin/<string:id>/<string:idusuario>')
def evenLogin(id, idusuario):
    None


if __name__ == '__main__':
    app.run(debug=True)
