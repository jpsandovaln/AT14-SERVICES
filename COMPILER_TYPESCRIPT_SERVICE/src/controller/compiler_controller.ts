import express from "express";
import * as dotenv from "dotenv";
import { Compiler } from "../core/compiler/compiler";
import { CompilerFactory } from "../core/compiler/compiler_factory";
import { CompilerException } from "../common/exception/compiler_exception";
import { ExecuteWin } from '../core/execute/execute_win';

dotenv.config({ path:  './.env' });

export default class CompilerController {

    public async compileCode(req: express.Request, res: express.Response) {
        const language : string = req.body.language || "";
        const filePath : string = req.file?.path || "";

        let binary : string = "";
        if (language === 'python') {
            binary = process.env.EXECUTE_PYTHON32 || "";
        } else {
            binary = process.env.EXECUTE_JAVA8 || "";
        }
        try {
            const langCompiler: Compiler = CompilerFactory.getInstance(
                new ExecuteWin(),
                language,
                filePath,
                binary
                );
                const result = await langCompiler.compiler();
                res.send(result);
        } catch (err: any) {
            if (err instanceof CompilerException) {
                res.status(err.status).send({
                    message: err.message,
                    type: err.name || "",
                    code: err.code || ""
                });
            } else {
                res.status(400).send({
                    message: err.message
                });
            }
        }
    }
}
