import { Parameter } from './parameter';
import { NotNullOrEmptyValidation } from '../../common/validation/not_null_or_empty_validation';
import { FileValidation } from '../../common/validation/file_validation';
import { FolderValidation } from '../../common/validation/folder_validation';
import { Context } from '../../common/validation/context';

export class PythonParameter extends Parameter {
    private _pythonBinaryPath: string;

    constructor(filePath: string, pythonBinaryPath: string) {
        super(filePath);
        this._pythonBinaryPath = pythonBinaryPath;
    }

    public get pythonBinaryPath(): string {
        return this._pythonBinaryPath;
    }

    set pythonBinaryPath(value) {
        this._pythonBinaryPath = value;
    }

    validate(): void {
        const strategies = [];
        strategies.push(new NotNullOrEmptyValidation("filePath", this._filePath));
        strategies.push(new FileValidation(this._filePath, [".py"]));
        strategies.push(new FolderValidation(this._pythonBinaryPath));

        const context = new Context(strategies);
        context.validate();
    }
}
