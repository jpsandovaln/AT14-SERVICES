import SecondsToString from "./secondToString";

const secondToString = new SecondsToString();
test("receive time", () => {
    const time = secondToString.parse("20000");

    expect(time).toBe("05:33:20");
});
