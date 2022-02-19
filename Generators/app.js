import https from "https";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
import { readFile, stat } from "fs/promises";
function* items() {
  yield 1;
  yield 3;
  yield "String";
  yield function () {
    console.log("fn");
  };

  return 33;
  yield 2;
}

const generator = items();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

let itemsSpread = [...items()];
console.log("=======");
console.log(itemsSpread);
for (const iterator of items()) {
  if (typeof iterator === "function") iterator();
}

function* generatorItems(count) {
  let array = [];
  for (let index = 0; index < count; index++) {
    array.push(index);
    yield array;
  }
}

const totalItems = generatorItems(10);
let u;
while (!(u = totalItems.next()).done) {
  console.log(u);
}
function* gen1() {
  yield 1;
  yield 44;
}
function* genNumbers() {
  const value = 0;

  yield value + 3;

  yield* gen1();
  return 3;
}

const gn = genNumbers();

console.log(gn.next());
console.log(gn.next());
console.log(gn.next());
console.log(gn.return(4));

//gn.throw(new Error(""));

const getItemsPokeApi = async (offset) => {
  return new Promise((resolve, reject) => {
    https.get(
      `https://pokeapi.co/api/v2/ability/?limit=20&offset=${offset}`,
      (res) => {
        let json = "";
        res.on("data", (chunk) => (json += chunk));

        res.on("end", () => {
          resolve(JSON.parse(json));
        });
        res.on("error", (error) => reject(error));
      }
    );
  });
};
async function* readFileSize() {
  const content = await readFile(__filename);
  yield { file: content.toString() };
  const { size } = await stat(__filename);
  yield size;
}
async function* itemsAsync() {
  yield getItemsPokeApi(1);
  yield getItemsPokeApi(2);
  yield Promise.resolve("Resolved");
  yield* await readFileSize();
}

(async () => {
  //console.log(await Promise.all([...itemsAsync()]));
  for await (const iterator of itemsAsync()) {
    console.log(iterator.toString());
  }
})();
