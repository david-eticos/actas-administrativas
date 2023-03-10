from dbsql import consultar_db_pos01
import collections
import json


def userLogin(idUsers, password):

    sql = open('static/login.sql', 'r', encoding="utf8").read().format(idUsers)
    response = consultar_db_pos01(sql)
    try:
        if len(response) > 0:
            logeoUser = str(response[0][0])
            logeopasword = str(response[0][5])
            jsonData = {}

            if idUsers == logeoUser and password == logeopasword:
                jsonData = {
                    "iduser": response[0][0],
                    "name": response[0][1],
                    "force": response[0][2],
                    "modality": response[0][3],
                    "battalion": response[0][4],
                    "token": response[0][5],
                    "esm": response[0][6],
                    "group": response[0][7],
                    "user": response[0][8],
                    "message": "synced"
                }
            else:

                jsonData = {

                    "succes": "false",
                    "message": "desynchronise"
                }
        else:
            jsonData = {
                "succes": "false",
                "message": "desynchronise"
            }
    except NameError:

        print(NameError)

    return jsonData


def userPermissions(idUsers):
    print(idUsers)
    sql = open('static/login.sql', 'r', encoding="utf8").read().format(idUsers)
    response = consultar_db_pos01(sql)
    jsonData = {}
    # print(response)
    sql2 = open('static/batallonesumi.sql', 'r', encoding="utf8").read().format(idUsers)
    res = consultar_db_pos01(sql2)
    data= []
    # print(res)
    for row in res:

        d = collections.OrderedDict()
        d['batallon'] = row.esm
        data.append(d)

    try:
        if len(response) > 0:

            jsonData = {

                   "iduser": response[0][0],
                    "name": response[0][1],
                    "force": response[0][2],
                    "modality": response[0][3],
                    "battalion": response[0][4],
                    "token": response[0][5],
                    "esm": response[0][6],
                    "group": response[0][7],
                    "user": response[0][8],
                    "esmdetalle": data,
                    "message": "synced"
            }
        else:

            jsonData = {
                "succes": "false",
                "message": "desynchronise"
            }
    except NameError:

        print(NameError)
    # print(jsonData)

    return jsonData


def validaactasumi(esm,factura,num):
    print(esm)
    print(factura)
    print(num)
    

    None
