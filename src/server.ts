import createError, { HttpError } from 'http-errors';
import express, { json, urlencoded, Request, Response, NextFunction  } from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import Debug from "debug";
import { createServer } from 'http';
import helmet from 'helmet';
import passport from 'passport';
import { Strategy as GitHubStrategy } from 'passport-github';
// import path from 'path';
// import { fileURLToPath } from 'url';

// import routes
import indexRouter from './routes/index';
import loginRouter from './routes/login';
import authRouter from './routes/auth';

// config ??? what is best practice ???
import { passGitHubConfig, expSessionSecret } from './config/config.js';

// adding displayName for user for route index.ts
declare global {
  namespace Express {
    interface User {
      displayName?: string;
    }
  }
}

const app = express();
const debug = Debug('test1:server');

// Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
app.use(helmet());

// PASSPORT
app.use(session({
  secret: expSessionSecret,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new GitHubStrategy(passGitHubConfig, (accessToken, refreshToken, profile, cb) => {
  return cb(null, profile);
}
));
passport.serializeUser((user, cb)=>{
  cb(null, user);
});
passport.deserializeUser((user: Express.User, cb)=>{
  cb(null, user);
});

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

// change up how __dirname is used for ES6 purposes
// const __dirname = path.dirname(fileURLToPath(import.meta.url));
// app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/auth', authRouter);

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404));
});

// error handler
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  // res.render('error');
  res.json({"error":err.message})
});

// Get port and Create HTTP server.
const port = process.env.PORT || '3000';
app.set('port', port);
const server = createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

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
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

//  Event listener for HTTP server "listening" event.
 function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
