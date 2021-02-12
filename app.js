const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./routes/indexRouter')

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/', indexRouter);





app.listen(3000, () => console.log('Server listening to port 3000'));