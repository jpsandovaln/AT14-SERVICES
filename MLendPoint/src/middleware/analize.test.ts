import analize from "./analize";
import SecondsToString from "./secondToString";

const analizing = new analize(
    "image",
    "dog",
    0.5,
    new SecondsToString(),
    "cocoSSD",
    "path"
);
test("getter ImagePath", () => {
    const spyImagePaths = jest.spyOn(analizing, "imagePaths", "get");
    const isPlaying = analizing.imagePaths;
    expect(spyImagePaths).toHaveBeenCalled();
    expect(isPlaying).toBe("image");
});

test("getter searchWord", () => {
    const spySearchWord = jest.spyOn(analizing, "searchWord", "get");
    const isPlaying = analizing.searchWord;
    expect(spySearchWord).toHaveBeenCalled();
    expect(isPlaying).toBe("dog");
});

test("getter percentage", () => {
    const spyPercentage = jest.spyOn(analizing, "percentage", "get");
    const isPlaying = analizing.percentage;
    expect(spyPercentage).toHaveBeenCalled();
    expect(isPlaying).toBe(0.5);
});

test("getter SecondstoString", () => {
    const spySecondstoString = jest.spyOn(analizing, "secondsToString", "get");
    const isPlaying = analizing.secondsToString;
    expect(spySecondstoString).toHaveBeenCalled();
    expect(isPlaying).toEqual({});
});

test("getter algorithm", () => {
    const spyAlgorithm = jest.spyOn(analizing, "algorithm", "get");
    const isPlaying = analizing.algorithm;
    expect(spyAlgorithm).toHaveBeenCalled();
    expect(isPlaying).toBe("cocoSSD");
});

test("getter PathImage", () => {
    const spyPathImage = jest.spyOn(analizing, "pathImage", "get");
    const isPlaying = analizing.pathImage;
    expect(spyPathImage).toHaveBeenCalled();
    expect(isPlaying).toBe("path");
});

test("setter ImagePath", () => {
    const spyImagePaths = jest.spyOn(analizing, "imagePaths", "set");
    analizing.imagePaths = "image_2";
    expect(spyImagePaths).toHaveBeenCalled();
    expect(analizing.imagePaths).toBe("image_2");
});

test("setter searchWord", () => {
    const spySearchWord = jest.spyOn(analizing, "searchWord", "set");
    analizing.searchWord = "car";
    expect(spySearchWord).toHaveBeenCalled();
    expect(analizing.searchWord).toBe("car");
});

test("setter percentage", () => {
    const spyPercentage = jest.spyOn(analizing, "percentage", "set");
    analizing.percentage = 0.6;
    expect(spyPercentage).toHaveBeenCalled();
    expect(analizing.percentage).toBe(0.6);
});

test("setter algorithm", () => {
    const spyAlgorithm = jest.spyOn(analizing, "algorithm", "set");
    analizing.algorithm = "MobileNet";
    expect(spyAlgorithm).toHaveBeenCalled();
    expect(analizing.algorithm).toBe("MobileNet");
});

test("setter PathImage", () => {
    const spyPathImage = jest.spyOn(analizing, "pathImage", "set");
    analizing.pathImage = "pathImage";
    expect(spyPathImage).toHaveBeenCalled();
    expect(analizing.pathImage).toBe("pathImage");
});
