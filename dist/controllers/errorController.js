"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//handle email or usename duplicates
function handleDuplicateKeyError(err, res) {
    const field = Object.keys(err.keyValue);
    const code = 409;
    const error = `An account with that ${field} already exists.`;
    res.status(code).send({ messages: error, fields: field });
}
//handle field formatting, empty fields, and mismatched passwords 
function handleValidationError(err, res) {
    let errors = Object.values(err.errors); //.map(el => el.message);
    let fields = Object.values(err.keyValue); //.map(el => el.path);
    let code = 400;
    if (errors.length > 1) {
        const formattedErrors = errors.join(' ');
        res.status(code).send({ messages: formattedErrors, fields: fields });
    }
    else {
        res.status(code).send({ messages: errors, fields: fields });
    }
}
//error controller function
function errorHandler(err, req, res, next) {
    try {
        console.log('error middleware ', err);
        if (err.name === 'ValidationError')
            handleValidationError(err, res);
        if (err.code && err.code == 11000)
            handleDuplicateKeyError(err, res);
    }
    catch (err) {
        res.status(err.status || 500);
        res.json({ "error": err.message });
        // res.status(500).send('An unknown error occured.');
    }
}
exports.default = errorHandler;
//# sourceMappingURL=errorController.js.map