const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const ticketRoutes = require('./routes/api/ticket');
app.use('/api/ticket', ticketRoutes);

const webRoutes = require('./routes/web/home');
app.use('/', webRoutes); 

app.use(express.urlencoded({ extended: true }));



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));