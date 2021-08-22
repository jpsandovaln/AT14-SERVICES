"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpErrors_1 = require("../utils/httpErrors");
exports.checkProfileParams = (req, res, next) => {
    if (!req.query.name) {
        throw new httpErrors_1.HTTP400Error("Missing name parameter");
    }
    else {
        next();
    }
};
exports.checkPostRequestBody = (req, res, next) => {
    if (!req.body) {
        throw new httpErrors_1.HTTP400Error("Missing request body");
    }
    else {
        next();
    }
};
//# sourceMappingURL=checks.js.map