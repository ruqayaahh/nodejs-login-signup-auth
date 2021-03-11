const express = require('express');
const logger = require('morgan');

const { userArray } = require('./models');
const { todoArray } = require('./models');

const { userRouter } = require('./routes');
const { todoRouter } = require('./routes');

const app = express();

app.use(express.json());
app.use(logger('dev')); // not clear what dev does

app.get('/', (req, res) => {
  res.json({
    welcome: 'Hello',
  });
});
app.get('/users', (req, res) => {
  res.json({
    data: userArray,
  });
});
app.get('/todos', (req, res) => {
  res.json({
    data: todoArray,
  });
});

app.use(userRouter);
app.use(todoRouter);

app.listen(3000, () => {
  // console.log(`Example app listening at http://localhost:${3000}`);
});
