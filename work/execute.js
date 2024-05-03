import {
  sampleMap,
  testMap,
} from "/Users/tokitashota/Desktop/paiza/paizaStudy/paiza/work/sample.js";

function sample(tetsuduki, pKey) {
  sampleMap[tetsuduki].find((map) => map.key === pKey).function();
}

sample("aaa", "customCheck");

function test(key) {
  testMap[key].function();
}
test("aa");
