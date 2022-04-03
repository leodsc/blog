create database db_blog_pessoal;

use db_blog_pessoal;

create table tb_postagens(
	id bigint auto_increment,
    titulo varchar(64) not null,
    texto text not null,
    data_postagem date not null,
    
    primary key (id)
);

create table tb_temas(
	id bigint auto_increment,
    nome varchar(16) not null,
    cor varchar(6) not null,
    
    primary key (id)
);

create table tb_temas_postagens(
	/* junction table */
	tema_id bigint not null,
    postagem_id bigint not null,
    
    foreign key(tema_id) references tb_temas(id),
    foreign key(postagem_id) references tb_postagens(id)
);

create table tb_usuarios(
	id bigint auto_increment,
    postagens_id bigint,
    nome varchar(32) not null,
    ultimo_nome varchar(32) not null,
    data_cadastro date not null,
    profissao varchar(16),
    foto longblob,
    
    primary key(id),
    foreign key(postagens_id) references tb_postagens(id)
);
