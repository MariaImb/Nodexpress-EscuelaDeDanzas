const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const hbs = require('express-handlebars');

const indexRouter = require('./routes/index');
const contactoRouter = require('./routes/contacto');
const staffRouter = require('./routes/staff');
const horariosRouter = require('./routes/horarios');
const disciplinasRouter = require('./routes/disciplinas');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//configuro el motor de vistas
app.engine('hbs', hbs({
  extname:'.hbs',
  layoutsDir:'views/layouts',
  partialsDir: 'views/partials',
  defaultLayout: 'layout',
}));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/contacto', contactoRouter);
app.use('/staff', staffRouter);
app.use('/horarios', horariosRouter);
app.use('/disciplinas', disciplinasRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});

module.exports = app;
