import { inserirFilme } from '../repository/filmeRepository.js'
import multer from 'multer'

import { Router } from 'express'

const server = Router();

const upload = multer({ dest: 'storage/capasFilmes' })

server.post('/filme', async (req, resp) => {

    try {

        const novoFilme = req.body

        if (!novoFilme.nome)

            throw new erro('Necessário nome do filme');

        if (!novoFilme.sinopse)

            throw new erro('Sinopse do filme necessário');

        if (novoFilme.avaliacao == undefined || novoFilme.avaliacao < 0)

            throw new erro('Avaliação do filme necessário');

        if (!novoFilme.lancamento)

            throw new erro('Campo lançamento do filme necessário');

        if (!novoFilme.disponivel)

            throw new erro('Disponibilidade necessária');

        if (!novoFilme.usuario)

            throw new erro('Usuário não logado');

        const filmeInserido = await inserirFilme(filmeParaInserir)

        resp.send(filmeInserido);

    } catch (err) {

        resp.status(400).send({

            erro: err.message

        })

    }

})

server.put('/filme/:id/imagem', upload.single('capa'), async (req, resp) => {

    try {

        const { id } = req.params;

        const imagem = req.file.path;

        const resposta = await alterarImagem(imagem, id);

        if (resposta != 1)

            throw new Error('a imagem não pode ser salva');

        resp.status(204).send();

    } catch (err) {

        resp.status(400).send({

            erro: err.message

        })

    }

})

server.get('/filme', async (req, resp) => {

    try {

        const resposta = await listarTodosFilmes();

    } catch (err) {

        resp.status(400).send({

            erro: err.message

        })

    }

})

server.get('/filme/busca', async (req, resp) => {

    try {

        const { nome } = req.query;

        const resposta = await buscarPorNome(nome);

        if (resposta.length == 0)

            throw new Error('Filme não encontrado')

        resp.send(resposta);

    } catch (err) {

        resp.status(400).send({

            erro: err.message

        })

    }

})

server.get('/filme/:id', async (req, resp) => {

    try {

        const { id } = req.params;

        const resposta = await buscarPorId(id);

        if (!resposta)

            throw new Error('Filme não encontrado')

        resp.send(resposta);

    } catch (err) {

        resp.status(400).send({

            erro: err.message

        })

    }

})

server.delete('/filme/:id', async (req, resp) => {

    try {

        const { id } = req.params;

        const resposta = await removerFilme(id);

        if (resposta != 1)

            throw new Error('Filme não foi removido');

        resp.status(204).send();

    } catch (err) {

        resp.status(400).send({

            erro: err.message

        })
    }
    })
server.put('/filme/;id', async (req, resp) => {

    try {
        const { id } = req.params;

        const filme = req.body;

        const resposta = await alterarFilme(id, filme);

        if (resposta != 1)

            throw new Error('Filme não pode ser alterado');

        if (!filme.sinopse)

            throw new erro('Sinopse do filme necessário');

        if (!novoFilme.avaliacao == undefined || novoFilme.avaliacao < 0)

            throw new erro('Avaliação do filme necessário');

        if (!filme.lancamento)

            throw new erro('Campo lançamento do filme necessário');

        if (filme.disponivel == undefined)

            throw new erro('Disponibilidade necessária');

        if (!filme.usuario)

            throw new erro('Usuário não logado');

        else

            resp.status(204).send();

    } catch (err) {

        resp.status(400).send({

            erro: err.message

        })
    }
    })

    export default server