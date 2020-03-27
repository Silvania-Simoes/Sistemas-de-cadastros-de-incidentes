const express = require("express");
const cors = require('cors');
const routes = require('./routes');
const app = express();
app.use(cors());
// app.use(cors({
//    origin: 'http://meuapp.com'
// })); //Quando estiver em produção colocar o url que deve ter acesso
// app.use(express.json());
app.use(routes);
/**
 * Rotas / Recurso "/users"
 */

 /**
  * Métodos HTTP:
  * GET: Buscar / listar uma informação do Back-end
  * POST: Criar uma informação no Back-end
  * PUT: Alterar uma informação no Back-end
  * DELETE: Deletar uma informação no Back-end
  */

  /**
   * Tipos de parâmetros
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação) ex.  http://localhost:3333/users?name=sergio
   * Route Params: Parâmetros utilizados para identificar recursos ex.  http://localhost:3333/users/1
   * Request Body: Corpo da requisição, utilizado para criar ou alterar
   * 
   */


app.listen(3333);
