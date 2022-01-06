import createError, { HttpError } from 'http-errors';
import express, { json, urlencoded, Request, Response, NextFunction } from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { createServer } from 'http';
import helmet from 'helmet';
import passport from 'passport';
import path from 'path';
import dotenv from 'dotenv'

// import routes
import indexRouter from './routes/index';
import loginRouter from './routes/login';
import userRouter from './routes/user'
import logoutRouter from './routes/logout';
import myaccountRouter from './routes/myaccount'
import eventRouter from './routes/event'

// config ??? what is best practice ???
// import { expSessionSecret } from './config/config';
import usePassportLocal from './config/usePassportLocal';
import errorHandler from './controllers/errorController';

// invoke dotenv
dotenv.config();
// console.log(process.env)

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('views', path.join(process.env.PWD, 'src/views'));
app.set('view engine', 'ejs');

// Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
app.use(helmet());

// Set timezone Vilnius -> moved to .env
// process.env.TZ = 'europe/vilnius'

// PASSPORT
app.use(session({
  secret: process.env.EXPRESS_SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// PASSPORT config
usePassportLocal();

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

// Public directory setup
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/event', eventRouter);
app.use('/logout', logoutRouter);
app.use('/myaccount', myaccountRouter);

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404));
});

// error handler
app.use(errorHandler); 

// Get port and Create HTTP server.
const port = process.env.PORT || '3000';
app.set('port', port);
const server = createServer(app);
server.listen(port);
server.on('error', onError);

// Event listener for HTTP server "error" event.
function onError(err: HttpError) {
  if (err.syscall !== 'listen') {
    throw err;
  }
  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
  // handle specific listen errors with friendly messages
  switch (err.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
    default:
      throw err;
  }
}
