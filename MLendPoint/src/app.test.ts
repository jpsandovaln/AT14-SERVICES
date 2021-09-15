import app from "./app";
import request from "supertest";

test("test about get", async () => {
    const result = await request(app).get("/about");
    expect(result.text).toEqual("I'm about");
    expect(result.statusCode).toEqual(200);
});

test("test home get ", async () => {
    const result = await request(app).get("/");
    expect(result.text).toEqual("I'm home");
    expect(result.statusCode).toEqual(200);
});
