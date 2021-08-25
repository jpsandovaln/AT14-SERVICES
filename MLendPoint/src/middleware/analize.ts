class analize {
    _imagePaths: string;
    _searchWord: string;
    _percentage: number;
    _secondsToString: JSON;
    _algorithm: string;
    _pathImage: string;
    constructor(
        imagePaths: string,
        searchWord: string,
        percentage: number,
        secondsToString: JSON,
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

    get imagePaths(): string {
        return this._imagePaths;
    }
    set imagePaths(imagePaths: string) {
        this._imagePaths = imagePaths;
    }

    get searchWord(): string {
        return this._searchWord;
    }
    set searchWord(searchWord: string) {
        this._searchWord = searchWord;
    }
    get percentage(): number {
        return this._percentage;
    }
    set percentage(percentage: number) {
        this._percentage = percentage;
    }

    get secondsToString(): JSON {
        return this._secondsToString;
    }
    set secondsToString(secondsToString: JSON) {
        this._secondsToString = secondsToString;
    }

    get algorithm(): string {
        return this._algorithm;
    }
    set algorithm(algorithm: string) {
        this._algorithm = algorithm;
    }

    get pathImage(): string {
        return this._pathImage;
    }
    set pathImage(pathImage: string) {
        this._pathImage = pathImage;
    }
}

export default analize;
