import { Parameter } from './parameter';
import { NotNullOrEmptyValidation } from '../../common/validation/not_null_or_empty_validation';
import { FileValidation } from '../../common/validation/file_validation';
import { FolderValidation } from '../../common/validation/folder_validation';
import { Context } from '../../common/validation/context';

export class JavaParameter extends Parameter {
    private _javaBinaryPath: string;

    constructor(filePath: string, javaBinaryPath: string) {
        super(filePath);
        this._javaBinaryPath = javaBinaryPath;
    }

    public get javaBinaryPath(): string {
        return this._javaBinaryPath;
    }

    public set javaBinaryPath(value: string) {
        this._javaBinaryPath = value;
    }

    validate(): void {
        const strategies = [];
        strategies.push(new NotNullOrEmptyValidation("filePath", this._filePath));
        strategies.push(new NotNullOrEmptyValidation("javaBinaryPath", this._javaBinaryPath));
        strategies.push(new FileValidation(this._filePath, [".java"]));
        strategies.push(new FolderValidation(this._javaBinaryPath));

        const context = new Context(strategies);
        context.validate();
    }
}
