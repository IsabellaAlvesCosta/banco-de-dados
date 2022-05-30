import 'dotenv/config'

import express from 'express'

import cors from 'cors'

import filmeController from './controller/filmeController.js'

import usuarioController from './controller/usuarioController.js'
import { con } from'./repository/connection.js'



const server = express();

server.use(cors());

server.use(express.json());

server.use('/storage/capasFilmes', express.static('storage/capasFilmes'));

server.use(usuarioController);

server.use(filmeController);

server.listen(process.env.PORT, ()  => console.log('Api conectada na porta ${process.env.PORT}'));

console.log('BD conectado!');