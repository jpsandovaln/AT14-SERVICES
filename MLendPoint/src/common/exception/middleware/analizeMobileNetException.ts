import { MachineLearningException } from "../machineLearningException";

export class AnalizeCocoSSDException extends MachineLearningException {
	constructor(message: any, status: number, code: string) {
		super(message, status, code);
	}
}
