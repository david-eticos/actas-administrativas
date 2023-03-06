import pyodbc
from configdb import developer_conexion, produccion_conexion


conexion = developer_conexion()
# conexion = produccion_conexion()


def consultar_db_pos01(sql):
    conn = pyodbc.connect(conexion)
    cursor = conn.cursor()
    consulta = sql
    cursor.execute(consulta)
    resultado = cursor.fetchall()
    conn.commit()
    conn.close()

    return resultado


def insertar_db_pos01(sql):
    conn1 = pyodbc.connect(conexion)
    cursor = conn1.cursor()
    consulta = sql
    try:
        cursor.execute(consulta)
        cursor.commit()
        cursor.close()
    except pyodbc.IntegrityError as identifier:
        print(identifier)
        cursor.close()
