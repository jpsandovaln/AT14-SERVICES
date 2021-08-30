export class ExtractToPDF {
	public async extract(): Promise<object> {
		return new Promise((resolve, reject) => {
			const data = { Text };
			process.nextTick(() =>
				data ? resolve(data) : reject({ error: "Error" })
			);
		});
	}
}
