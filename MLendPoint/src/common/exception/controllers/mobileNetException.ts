import { StatusCode } from "../../StatusCode";
import { MachineLearningException } from "../machineLearningException";

export class MobileNet extends MachineLearningException {
	constructor(message: any, status: StatusCode, code: string) {
		super(message, status, code);
	}
}
