describe("foo", () => {
  test("test 1 is good #pass", async () => {
    expect(true).toBe(true);
  });

  test("test 2 is bad #fail", async () => {
    expect(true).toBe(false);
  });

  test("test 3 isn't tagged, but should pass", async () => {
    expect(1).toBeTruthy();
  });
});
