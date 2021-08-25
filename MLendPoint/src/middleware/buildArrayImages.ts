class BuildArrayImages {
    buildArrayImages(
        imagePaths: string,
        unzipOutput: string,
        filename: string
    ) {
        let files: Array<object> = [];
        for (let index = 0; index < imagePaths.length; index++) {
            let element = {
                originalname: imagePaths[index],
                mimetype: "image/jpeg",
                filename: imagePaths[index],
                path: unzipOutput + "/" + filename + "/" + imagePaths[index]
            };
            files.push(element);
        }
        return files;
    }
}

export default BuildArrayImages;
