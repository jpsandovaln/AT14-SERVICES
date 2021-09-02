/**
 * @Class
 * Build an instance
 *
 */
abstract class MachineLearing {
    /**
     * @param {string} imagePath The path where image is.
     * @param {string} searchWord The word to search.
     * @param {number} percentage Percentage of probability to search.
     */
    image: any;
    searchWord: string;
    percentage: number;
    predictions: any;

    constructor(imagePath: any, searchWord: string, percentage: number) {
        this.image = imagePath;
        this.searchWord = searchWord;
        this.percentage = percentage;
        this.predictions = [];
    }

    // public validateParameter(): void {
        
    // }
}

export default MachineLearing;
