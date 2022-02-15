const express = require('express');
const app = express();
const port = 3000;
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

//middleware
app.use(express.json());

//routes
app.get('/', (req, res) => {
  res.send('task manager app');
});

app.use('/api/v1/tasks', tasks);

// app.get('/api/v1/task', (req, res) => {});
// app.post('/api/v1/task', (req, res) => {});
// app.patch('/api/v1/task/:id', (req, res) => {});
// app.delete('/api/v1/task/:id', (req, res) => {});
// app.get('/api/v1/task/:id', (req, res) => {});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(3000, console.log(`server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
