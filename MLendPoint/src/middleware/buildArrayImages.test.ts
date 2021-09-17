import BuildArrayImages from "./buildArrayImages";

const buildArrayImages = new BuildArrayImages();

test("receive time", () => {
    const buildArray = buildArrayImages.buildArrayImages(
        ["1", "2", "3"],
        "output"
    );

    expect(buildArray).toEqual([
        {
            filename: "1",
            mimetype: "image/jpeg",
            originalname: "1",
            path: "output/1"
        },
        {
            filename: "2",
            mimetype: "image/jpeg",
            originalname: "2",
            path: "output/2"
        },
        {
            filename: "3",
            mimetype: "image/jpeg",
            originalname: "3",
            path: "output/3"
        }
    ]);
});
