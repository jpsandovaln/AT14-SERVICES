import app from "./app";
import request from "supertest";

test("test about", async () => {
    const result = await request(app).get("/about");
    expect(result.text).toEqual("I'm about");
    expect(result.statusCode).toEqual(200);
});
