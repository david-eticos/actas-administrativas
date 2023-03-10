
select
CONCAT(b.IdBatallon,' ',b.Nombre,'-',b.Sigla) as esm
 from usuariospermisos u inner join batallones b on u.Menu=b.IdBatallon where u.IdUsuario='1013590475' and u.programa='4548' and b.tipo='SUMINISTROS'