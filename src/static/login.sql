select 

 u.IdUsuario
,CONCAT(u.Nombres,'',u.Apellidos) as Nombres
,b.Fuerza
,u.des_usuario
,CONCAT(b.IdBatallon,'-',b.Nombre) as ESM
,clave as token

 from usuarios u inner join Batallones b on u.Color=b.IdBatallon  where u.idusuario='{0}'