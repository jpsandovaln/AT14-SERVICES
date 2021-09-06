import { EmptyValidation } from "../common/validation/emptyValidation";

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

  public validateParameter(): void {
    const validations = [
      new EmptyValidation("imagePath", this.image),
      new EmptyValidation("searchWord", this.searchWord),
      new EmptyValidation("percentage", this.percentage),
      new EmptyValidation("predictions", this.predictions),
    ];
    validations.forEach((validation) => {
      validation.validate();
    });
  }
}

export default MachineLearing;
