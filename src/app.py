from flask import Flask, request
from flask_cors import CORS
import json
from methods import *


app = Flask(__name__)
CORS(app)


@app.route('/app/login', methods=['POST'])
def ini():

    users = request.json
    idUsers = users["idusers"]
    password = users["password"]
    response = userLogin(idUsers, password)

    return response


@app.route('/app/user', methods=['POST'])
def user():

    users = request.json
    idUsers = users["idusers"]
    response = userPermissions(idUsers)
    return response


@app.route('/app/actaDispensacion', methods=['POST'])
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
