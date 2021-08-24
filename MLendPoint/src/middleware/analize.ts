class analize {
    _imagePaths: string;
    _searchWord: string;
    _percentage: number;
    _secondsToString: number;
    _algorithm: string;
    _pathImage: string;
    constructor(
        imagePaths: string,
        searchWord: string,
        percentage: number,
        secondsToString: number,
        algorithm: string,
        pathImage: string
    ) {
        this._imagePaths = imagePaths;
        this._searchWord = searchWord;
        this._percentage = percentage;
        this._secondsToString = secondsToString;
        this._algorithm = algorithm;
        this._pathImage = pathImage;
    }

    get imagePaths() {
        return this._imagePaths;
    }
    set imagePaths(imagePaths) {
        this._imagePaths = imagePaths;
    }

    get searchWord() {
        return this._searchWord;
    }
    set searchWord(searchWord) {
        this._searchWord = searchWord;
    }
    get percentage() {
        return this._percentage;
    }
    set percentage(percentage) {
        this._percentage = percentage;
    }

    get secondsToString() {
        return this._secondsToString;
    }
    set secondsToString(secondsToString) {
        this._secondsToString = secondsToString;
    }

    get algorithm() {
        return this._algorithm;
    }
    set algorithm(algorithm) {
        this._algorithm = algorithm;
    }

    get pathImage() {
        return this._pathImage;
    }
    set pathImage(pathImage) {
        this._pathImage = pathImage;
    }
}

module.exports = analize;
