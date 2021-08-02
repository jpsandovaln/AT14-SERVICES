class analize {
    constructor(
        imagePaths,
        searchWord,
        percentage,
        secondsToString,
        algorithm
    ) {
        this._imagePaths = imagePaths;
        this._searchWord = searchWord;
        this._percentage = percentage;
        this._secondsToString = secondsToString;
        this._algorithm = algorithm;
    }

    get imagePaths()
    {
        return this._imagePaths;
    }
    set imagePaths(imagePaths)
    {
        this._imagePaths = imagePaths;
    }


    get searchWord()
    {
        return this._searchWord;
    }
    set searchWord(searchWord)
    {
        this._searchWord = searchWord;
    }
    get percentage()
    {
        return this._percentage;
    }
    set percentage(percentage)
    {
        this._percentage = percentage;
    }

    get secondsToString()
    {
        return this._secondsToString;
    }
    set secondsToString(secondsToString)
    {
        this._secondsToString = secondsToString;
    }

    get algorithm()
    {
        return this._algorithm;
    }
    set algorithm(algorithm)
    {
        this._algorithm = algorithm;
    }

}

module.exports = analize;
