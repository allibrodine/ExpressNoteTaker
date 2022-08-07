//set up Express.js
const express = require('express');
const app = express();

//server
const PORT = process.env.PORT || 3008;
//link to routes
const htmlRoutes = require('/Develop/Routes/htmlRoutes');
const apiRoutes = require('/Develop/Routes/apiRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//middleware functions
app.use(express.static('/develop/public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`Server now on port ${PORT}!`);
});