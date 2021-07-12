create database escuela;

use escuela;

create table contacto (
    idcontacto int not null auto_increment,
    nombre varchar(40) not null,
    email varchar(40) not null,
    telefono int(18) not null,
    asunto varchar (100) not null,
    mensaje varchar (400) not null,
    primary key (idcontacto)
);

describe contacto;

insert into contacto values (null, 'NombreCont1', 'pruebacontacto1@gmail.com', 1234567, 'Consulta1', 'clases1');
insert into contacto values (null, 'NombreCont2', 'pruebacontacto2@gmail.com', 1234568, 'Consulta2', 'clases2');
insert into contacto values (null, 'NombreCont3', 'pruebacontacto3@gmail.com', 1234569, 'Consulta3', 'clases3');

select * from contacto;