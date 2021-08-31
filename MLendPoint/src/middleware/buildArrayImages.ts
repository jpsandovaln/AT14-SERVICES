class BuildArrayImages {
    buildArrayImages(imagePaths: string[], unzipOutput: string): any {
        const files = [];
        for (let index = 0; index < imagePaths.length; index++) {
            const element = {
                originalname: imagePaths[index],
                mimetype: "image/jpeg",
                filename: imagePaths[index],
                path: unzipOutput + "/" + imagePaths[index]
            };
            files.push(element);
        }
        return files;
    }
}

export default BuildArrayImages;
