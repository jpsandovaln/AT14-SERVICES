export abstract class ValidateStrategy {
	constructor() {
		// throw new Error('ValidateStrategy abstract class cannot be instantiated');
	}

	abstract validate(): any;
}