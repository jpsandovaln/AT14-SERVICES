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
Object.defineProperty(exports, "__esModule", { value: true });
const checks_1 = require("../../middleware/checks");
const profileController_1 = require("./profileController");
exports.default = [
    {
        path: "/api/v1/profile",
        method: "get",
        handler: [
            checks_1.checkProfileParams,
            (req, res) => __awaiter(void 0, void 0, void 0, function* () {
                const userProfile = new profileController_1.ProfileController(req);
                const result = yield userProfile.getUserProfile();
                res.status(200).send(result);
            })
        ]
    }
];
//# sourceMappingURL=routes.js.map