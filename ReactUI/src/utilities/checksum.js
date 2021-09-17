const createMD5 = require("hash-wasm");

class Md5File {

    constructor()
    {
        this.chunkSize = 64 * 1024 * 1024;
        this.fileReader = new FileReader();
        this.hasher = null;
    }


    hashChunk = (chunk) => {
		return new Promise((resolve, reject) => {
			this.fileReader.onload = async (e) => {
				const view = new Uint8Array(e.target.result);
				this.hasher.update(view);
				resolve();
			};

			this.fileReader.readAsArrayBuffer(chunk);
			console.log("asd")
		});
	}

	readFile = async (file) => {
		if (this.hasher) {
			this.hasher.init();
		} else {
			this.hasher = await createMD5.createMD5();
		}

		const chunkNumber = Math.floor(file.size / this.chunkSize);

		for (let i = 0; i <= chunkNumber; i++) {
			const chunk = file.slice(
				this.chunkSize * i,
				Math.min(this.chunkSize * (i + 1), file.size)
			);
			await this.hashChunk(chunk);
		}

		const hash = this.hasher.digest();
		return Promise.resolve(hash);
	};


}

module.exports = Md5File;


