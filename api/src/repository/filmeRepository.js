import { con } from '../repository/connection';

export async function inserirFilme(filme) {

const comando = 

    ` insert into tb_filme (id_usuario, nm_filme, ds_sinopse, vl_avaliacao, dt_lancamento, bt_disponivel)

         values (?, ?, ?, ?, ?, ?);`

const [resposta] = await con.query (comando,[filme.usario, filme.nome, filme.sinopse, filme.avaliacao, filme.lancamento, filme.disponivel]);
filme.id = resposta.insertId;

return filme;

}

export async function alterarImagem(imagem,id) {

const comando = 

`update  tb_filme

      set   img_filme      =?

where   id_filme          =?;`

const[resposta] = await con.query(comando, [imagem, id]);

return resposta.affectedRows;

}

export async function listarTodosFilmes() {

const comando = 

`select id_filme               id,

           nm_file                nome,

           vl_avaliacao        avaliacao,

            ds_sinopse         sinopse,

           dt_lancamento   lancamento,

           bt_disponeivel   disponivel

  from tb_filme`;

const [linhas] = await con.query (comando);

return linhas;

}

export async function buscarPorid(id) {

const comando = 

`select id_filme               id,

           nm_file                nome,

      ds_sinopse          sinopse,

img_filme            imagem,

           vl_avaliacao        avaliacao,

            ds_sinopse         sinopse,

           dt_lancamento   lancamento,

           bt_disponeivel   disponivel

  from tb_filme

  where id_filme = ?`;

const [linhas] = await con.query (comando, [id]);

return linhas[0];

}

export async function buscarPorNome(nome) {

const comando = 

`select id_filme               id,

           nm_file                nome,

           vl_avaliacao        avaliacao,

            ds_sinopse         sinopse,

           dt_lancamento   lancamento,

           bt_disponeivel   disponivel

  **from** tb_filme

  where id_filme like ?`;

const [linhas] = await con.query (comando, ['%${nome}%']);

return linhas;

}

export async function removerFilme(id) {

const comando = 

`Delete from tb_filme

            **where** id_filme=?`;

const [resposta] = await con.query (comando, [id]);

return resposta.affectedRows;

}

export async function alterarFilme(id, filme){

const comando = 

    `update tb_filme

       **set** nm_filme          = ?,

             ds_sinopse        =?,

       vl_avaliacao      =?,

       dt_lancamento =?,

       bt_disponivel = ?

    where id_filme=? `

const [resposta] = await con.query(comando, [filme.nome, filme.sinopse, filme.avaliacao, filme.lancamento, filme.disponivel, id]);

return resposta.affectedRows;

}