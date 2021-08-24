/**
 * @Class
 * Build an instance
 *
 */
interface Persona {
    cabeza: string;
    dedos: number;
    altoChato: boolean;
    rubio?: boolean;
}
const pepe: Persona = { cabeza: "grande", dedos: 5, altoChato: true };
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

    //TODO: verify that this parameter must be removed
    async getJSON(parameter) {
        throw new Error("getJSON() must be implementrd");
    }
}

export default MachineLearing;
