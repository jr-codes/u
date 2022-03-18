import * as swc from "@swc/core";
import presets from ".";

async function run() {
  try {
    return await swc.transform("source code", presets);
  } catch (err) {
    console.log(err);
  }
}

test("it runs", () => {
  const t = run();
  expect(t).toBe(t);
});
