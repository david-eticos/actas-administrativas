import pyodbc


def developer_conexion():

    direccion_servidor = '10.120.120.25'
    nombre_bd = 'pos01'
    nombre_usuario = 'webservice_f2'
    password = 'D3v31Op3nt@p05oi'
    try:
        conexion = ('DRIVER={ODBC Driver 17 for SQL Server};SERVER=' +
                    direccion_servidor+';DATABASE='+nombre_bd+';UID='+nombre_usuario+';PWD=' + password)
        print("\n"*2)
        print("conexión exitosa")
    except Exception as e:
        print("Ocurrió un error al conectar a SQL Server: ", e)

    return conexion


def produccion_conexion():

    direccion_servidorlinux = '10.120.120.25'
    nombre_bdlinux = 'pos01'
    nombre_usuariolinux = 'webservice_f2'
    passwordlinux = 'D3v31Op3nt@p05oi'
    try:
        conexion = ('DRIVER=FreeTDS;SERVER=' +
                    direccion_servidorlinux+';PORT=1433;DATABASE='+nombre_bdlinux+';UID='+nombre_usuariolinux+';PWD=' + passwordlinux + ';TDS_Version=8.0')
        print("\n"*2)
        print("conexión exitosa")

    except Exception as e:
        print("Ocurrió un error al conectar a SQL Server: ", e)

    return conexion
