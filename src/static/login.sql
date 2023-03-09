select 

 u.IdUsuario
,CONCAT(u.Nombres,' ',u.Apellidos) as Nombres
,b.Fuerza
,CONCAT(u.grupo,' ',u.des_usuario) as des_usuario
,CONCAT(b.IdBatallon,'-',b.Nombre) as ESM
,clave as token
,b.IdBatallon
,u.grupo
,CONCAT( u.IdUsuario,' ',u.Nombres,' ',u.Apellidos) as usuario

 from usuarios u inner join Batallones b on u.Color=b.IdBatallon  where u.idusuario='{0}'