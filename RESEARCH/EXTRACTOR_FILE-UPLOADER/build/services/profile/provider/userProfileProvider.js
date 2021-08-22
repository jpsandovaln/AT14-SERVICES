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
const dotenv_1 = __importDefault(require("dotenv"));
const baseProvider_1 = require("../../../provider/baseProvider");
const DataBaseManager_1 = require("../../../databaseManager/DataBaseManager");
dotenv_1.default.config();
class UserProfileProvider extends baseProvider_1.BaseProvider {
    constructor() {
        super();
        this.searchUserProfileSQL = "SELECT name, role, website from tutorial where tutorial.name=";
        this.dbConnect = new DataBaseManager_1.DatabaseManager();
    }
    fetchUserProfile(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const searchTerm = query.replace(/\'/gi, '');
            const searchUserSQL = `${this.searchUserProfileSQL}'${searchTerm}'`;
            let response;
            try {
                response = yield this.runQuery(this.dbConnect, searchUserSQL);
            }
            catch (e) {
                response = 'Exception';
            }
            return {
                data: response
            };
        });
    }
}
exports.UserProfileProvider = UserProfileProvider;
//# sourceMappingURL=userProfileProvider.js.map