export class ExtractCroppedImage {

	public async extract(): Promise<string> {
		return new Promise((resolve, reject) => {
			const text = "Text";
			process.nextTick(() =>
				text ? resolve(text) : reject({ error: "Error" })
			);
		});
	}
}
