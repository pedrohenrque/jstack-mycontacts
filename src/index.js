const express = require('express');
require('express-async-errors');
// A extensão serve para tratar erros assíncronos

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);
app.use((error, request, response, next) => {
  console.log('##### ERROR HANDLER #####');
  console.log(error);
  response.sendStatus(500);
});
// Error Handler (Middleware express) -> Manipulador de erros

app.listen(3000, () =>
  console.log('🔥 Server started at http://localhost:3000')
);
