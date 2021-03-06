const userRoutes = require('./routes/usersRoutes');
const express = require('express');
const app = express();

const port = process.env.PORT || 3001;

app.use('/users/',userRoutes);

app.listen(port, ()=> console.log(`Server has started on port ${3001}`));