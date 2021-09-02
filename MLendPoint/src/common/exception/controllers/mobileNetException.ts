import { MachineLearningException } from "../machineLearningException";

export class MobileNet extends MachineLearningException {
	constructor(message: any, status: number, code: string) {
		super(message, status, code);
	}
}
