import { ParameterInvalidException } from '../exception/parameter_exception';
import { throwable } from 'ts-throwable';

export interface ValidateStrategy {
    validate(): void | throwable<ParameterInvalidException>;
}
