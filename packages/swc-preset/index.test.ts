import * as swc from "@swc/core";
import swcrc from ".";

test("returns a config object", () => {
  expect(swcrc).toEqual(expect.any(Object));
});

test.each([
  "javascript.js",
  "react.js",
  "react.jsx",
  "react.tsx",
  "typescript.ts",
])("transforms %s", async (name) => {
  const filename = "__fixtures__/" + name;
  const { code } = await swc.transform(filename, swcrc);
  expect(code).toBeDefined();
});
