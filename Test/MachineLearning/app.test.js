const request = require("supertest");
const app = require("../../MLendPoint/src/app");
const fs = require("mz/fs");
const zipPath =
    "C:/Users/serqi/Desktop/Fundacion/proga_101/project/AT14-SERVICES/Test/MachineLearning/resources/zip/images.rar";

describe("app.js", () => {
    test("Verify End Point GET'/about' is correct and send to the body me message 'I'm about' ", async () => {
        await request(app).get("/about").expect(200, "I'm about");
    });

    test("Verify End Point GET'/' is correct and send to the body me message 'I'm home' ", async () => {
        await request(app).get("/").expect(200, "I'm home");
    });

    test("Verify End Point POST'/analizeZip' is correct and send to the body me message 'I'm home' ", async () => {
        await request(app)
            .post("/analizeZip")
            .attach("files", "zip.zip")
            .expect(200);
    });
});
