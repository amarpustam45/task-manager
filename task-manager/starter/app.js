const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error');
require('dotenv').config();

//middleware
app.use(express.static('./public')); //serve static files
app.use(express.json());

//routes
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandler);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(3000, console.log(`server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
