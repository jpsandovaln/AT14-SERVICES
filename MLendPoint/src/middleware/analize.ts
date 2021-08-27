import SecondsToString from "./secondToString";
interface analize {
    _imagePaths: any;
    _searchWord: string;
    _percentage: number;
    _secondsToString: SecondsToString;
    _algorithm: string;
    _pathImage: string;
}
class analize {
    constructor(
        imagePaths: any,
        searchWord: string,
        percentage: number,
        secondsToString: SecondsToString,
        algorithm: string,
        pathImage: any
    ) {
        this._imagePaths = imagePaths;
        this._searchWord = searchWord;
        this._percentage = percentage;
        this._secondsToString = secondsToString;
        this._algorithm = algorithm;
        this._pathImage = pathImage;
    }

    get imagePaths(): any {
        return this._imagePaths;
    }
    set imagePaths(imagePaths: any) {
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

    get secondsToString(): SecondsToString {
        return this._secondsToString;
    }
    set secondsToString(secondsToString: SecondsToString) {
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
