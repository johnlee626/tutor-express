const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const app = express()

//require('dotenv').config()

app.set('views', path.join(__dirname, 'views'))
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views', partialsDir: __dirname + '/views/partials'}))
app.set('view engine', 'hbs')

app.use(bodyParser.json({ limit: '20mb' }))
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
  res.render('index', {title: 'main page'})
})

app.get('/about', function (req, res) {
  res.render('about', {title: 'about page'})
})

app.get('/signup', function (req, res) {
  res.render('signup', {title: 'signup page'})
})

app.get('/login', function (req, res) {
  res.render('login', {title: 'login page'})
})

app.get('/forgot_password', function (req, res) {
  res.render('forgot_password', {title: 'Resend password page'})
})

app.get('/dashboard', function (req, res) {
  res.render('dashboard', {layout: 'dashboard-layout', title: 'Dashboard page'})
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app