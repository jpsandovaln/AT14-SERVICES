class BuildArrayImages {
    buildArrayImages(imagePaths, unzipOutput) {
        let files = [];
        for (let index = 0; index < imagePaths.length; index++) {
            let element = {
                originalname: imagePaths[index],
                mimetype: "image/jpeg",
                filename: imagePaths[index],
                path: unzipOutput + "/" + imagePaths[index],
            };
            files.push(element);
        }
        return files;
    }
}

module.exports = BuildArrayImages;
