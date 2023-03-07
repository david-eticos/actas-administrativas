from flask import Flask, request
from flask_cors import CORS
from dbsql import consultar_db_pos01
import json


app = Flask(__name__)
CORS(app)

@app.route('/app/user', methods=['POST'])
def ini():

    users = request.json
    idUsers = users["id"]
    print(users["id"])
    # idUsers = '1013590475'
    sql = f"select nombres,idusuario,des_usuario from usuarios where idusuario='{idUsers}'"
    response = consultar_db_pos01(sql)

    item = {
        "Nombres": response[0][0],
        "id": response[0][1],
        "Permiso": response[0][2]
    }

    return item


@app.route('/app/actaDispensacion',methods=['POST'])
def dispensacion():
    None


@app.route('/app/actaSuministro')
def suministro():
    None

@app.route('/app/actaSatelite')
def satelite():
    None


if __name__ == '__main__':
    app.run(debug=True)
