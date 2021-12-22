import createError, { HttpError } from 'http-errors';
import express, { json, urlencoded, Request, Response, NextFunction } from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { createServer } from 'http';
import helmet from 'helmet';
import passport from 'passport';

// import routes
import indexRouter from './routes/index';
import loginRouter from './routes/login';
import authRouter from './routes/auth';
import userRouter from './routes/user'
import logoutRouter from './routes/logout';

// config ??? what is best practice ???
import { expSessionSecret } from './config/config';
import usePassportLocal from './config/usePassportLocal';
import path from 'path';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
app.use(helmet());

// Set timezone Vilnius
process.env.TZ = 'europe/vilnius'

// PASSPORT
app.use(session({
  secret: expSessionSecret,
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
app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/logout', logoutRouter);

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404));
});

// error handler
app.use((err: HttpError, req: Request, res: Response) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  // res.render('error');
  res.json({ "error": err.message })
});

// Get port and Create HTTP server.
const port = process.env.PORT || '3000';
app.set('port', port);
const server = createServer(app);
server.listen(port);
server.on('error', onError);

// Event listener for HTTP server "error" event.
function onError(error: HttpError) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
    default:
      throw error;
  }
}
