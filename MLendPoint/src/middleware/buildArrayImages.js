class BuildArrayImages {
    buildArrayImages(imagePaths, unzipOutput, filename) {
        let files = [];
        for (let index = 0; index < imagePaths.length; index++) {
            let element = {
                originalname: imagePaths[index],
                mimetype: "image/jpeg",
                filename: imagePaths[index],
                path: unzipOutput + "/" + filename + "/" + imagePaths[index],
            };
            files.push(element);
        }
        return files;
    }
}

module.exports = BuildArrayImages;
