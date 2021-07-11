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

