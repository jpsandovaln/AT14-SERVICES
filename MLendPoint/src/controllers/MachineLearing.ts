/**
 * @Class
 * Build an instance
 *
 */
interface MachineLearing {
    image: any;
    searchWord: string;
    percentage: number;
    predictions: any;
}

class MachineLearing {
    /**
     * @param {string} imagePath The path where image is.
     * @param {string} searchWord The word to search.
     * @param {number} percentage Percentage of probability to search.
     */

    constructor(imagePath: any, searchWord: string, percentage: number) {
        if (new.target === MachineLearing)
            throw new Error(
                "MachineLearing abstract class cannot be instantiated"
            );
        this.image = imagePath;
        this.searchWord = searchWord;
        this.percentage = percentage;
        this.predictions = undefined;
    }

    async getJSON(parameter) {
        throw new Error("getJSON() must be implementrd");
    }
}

export default MachineLearing;
