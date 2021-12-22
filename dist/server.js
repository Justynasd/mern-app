"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = __importDefault(require("http-errors"));
const express_1 = __importStar(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const http_1 = require("http");
const helmet_1 = __importDefault(require("helmet"));
const passport_1 = __importDefault(require("passport"));
// import routes
const index_1 = __importDefault(require("./routes/index"));
const login_1 = __importDefault(require("./routes/login"));
const auth_1 = __importDefault(require("./routes/auth"));
const user_1 = __importDefault(require("./routes/user"));
const logout_1 = __importDefault(require("./routes/logout"));
// config ??? what is best practice ???
const config_1 = require("./config/config");
const usePassportLocal_1 = __importDefault(require("./config/usePassportLocal"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
// view engine setup
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
app.use((0, helmet_1.default)());
// Set timezone Vilnius
process.env.TZ = 'europe/vilnius';
// PASSPORT
app.use((0, express_session_1.default)({
    secret: config_1.expSessionSecret,
    resave: false,
    saveUninitialized: true
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
// PASSPORT config
(0, usePassportLocal_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use((0, express_1.json)());
app.use((0, express_1.urlencoded)({ extended: false }));
app.use((0, cookie_parser_1.default)());
// Public directory setup
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// routes
app.use('/', index_1.default);
app.use('/login', login_1.default);
app.use('/auth', auth_1.default);
app.use('/user', user_1.default);
app.use('/logout', logout_1.default);
// catch 404 and forward to error handler
app.use((req, res, next) => {
    next((0, http_errors_1.default)(404));
});
// error handler
app.use((err, req, res) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    // res.render('error');
    res.json({ "error": err.message });
});
// Get port and Create HTTP server.
const port = process.env.PORT || '3000';
app.set('port', port);
const server = (0, http_1.createServer)(app);
server.listen(port);
server.on('error', onError);
// Event listener for HTTP server "error" event.
function onError(error) {
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
//# sourceMappingURL=server.js.map