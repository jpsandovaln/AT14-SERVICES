/**
 * @Class
 * Build an instance
 *
 */

class MachineLearing {
    image: string;
    searchWord: string;
    percentage: number;
    // TODO: remove any
    predictions: any;

    /**
     * @param {string} imagePath The path where image is.
     * @param {string} searchWord The word to search.
     * @param {number} percentage Percentage of probability to search.
     */
    constructor(imagePath: string, searchWord: string, percentage: number) {
        if (new.target === MachineLearing)
            throw new Error(
                "MachineLearing abstract class cannot be instantiated"
            );
        this.image = imagePath;
        this.searchWord = searchWord;
        this.percentage = percentage;
        this.predictions = undefined;
    }
}

export default MachineLearing;
