"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../config/db"));
const userModel_1 = __importDefault(require("../models/userModel"));
function upserUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        // connect to mongo
        db_1.default;
        const query = { id: user.id };
        const update = {
            id: user.id,
            displayName: user.displayName,
            username: user.username,
            emails: user.emails,
            photos: user.photos,
        };
        let options = { upsert: true, new: true, setDefaultsOnInsert: true };
        let doc = yield userModel_1.default.findOneAndUpdate(query, update, options
        //     , (err, doc) => {
        //     if (err) throw err;
        //     console.log(`User doc: `, doc);
        // }
        );
        console.log(`User doc: `, doc);
        return doc;
    });
}
exports.default = upserUser;
//# sourceMappingURL=upserUser.js.map