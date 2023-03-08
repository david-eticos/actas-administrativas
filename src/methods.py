from dbsql import consultar_db_pos01


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

    sql = open('static/login.sql', 'r', encoding="utf8").read().format(idUsers)
    response = consultar_db_pos01(sql)
    try:
        if len(response) > 0:

            jsonData = {
                "iduser": response[0][0],
                "name": response[0][1],
                "force": response[0][2],
                "modality": response[0][3],
                "battalion": response[0][4],
                "token": response[0][5],
                "message": "synced"
            }
        else:
            jsonData = {
                "succes": "false",
                "message": "desynchronise"
            }
    except NameError:

        print(NameError)

    return jsonData
