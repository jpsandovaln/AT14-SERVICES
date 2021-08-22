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
const imageProvider_1 = require("./provider/imageProvider");
exports.default = [
    {
        path: "/uploadImages",
        method: "post",
        handler: [
            checks_1.checkPostRequestBody,
            (req, res) => __awaiter(void 0, void 0, void 0, function* () {
                imageProvider_1.upload(req, res, (err) => __awaiter(void 0, void 0, void 0, function* () {
                    try {
                        if (err) {
                            return res.status(422).send({
                                errors: [
                                    {
                                        title: "Image Upload Error",
                                        detail: err.message,
                                    },
                                ],
                            });
                        }
                        const file = req.file;
                        if (!file) {
                            return res.status(400).json({
                                status: "failed",
                                code: "400",
                                message: "Please upload file",
                            });
                        }
                        return res
                            .status(200)
                            .send("File uploaded Successfully");
                    }
                    catch (err) {
                        return res.status(200).json({
                            status: "failed",
                            code: "500",
                        });
                    }
                }));
            }),
        ],
    },
];
//# sourceMappingURL=routes.js.map