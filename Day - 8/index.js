const crypto = require("crypto");
const os = require("os");
console.log("Number of CPU cores:", os.cpus().length);
process.env.UV_THREADPOOL_SIZE = 8;
let count = 0;
const start = Date.now();
crypto.pbkdf2("password", "salt", 100000, 512, "sha512", (err, derivedKey) => {
  if (err) throw err;
  console.log(`${++count}`, Date.now() - start);
});
crypto.pbkdf2("password", "salt", 100000, 512, "sha512", (err, derivedKey) => {
  if (err) throw err;
  console.log(`${++count}`, Date.now() - start);
});
crypto.pbkdf2("password", "salt", 100000, 512, "sha512", (err, derivedKey) => {
  if (err) throw err;
  console.log(`${++count}`, Date.now() - start);
});
crypto.pbkdf2("password", "salt", 100000, 512, "sha512", (err, derivedKey) => {
  if (err) throw err;
  console.log(`${++count}`, Date.now() - start);
});
crypto.pbkdf2("password", "salt", 100000, 512, "sha512", (err, derivedKey) => {
  if (err) throw err;
  console.log(`${++count}`, Date.now() - start);
});
crypto.pbkdf2("password", "salt", 100000, 512, "sha512", (err, derivedKey) => {
  if (err) throw err;
  console.log(`${++count}`, Date.now() - start);
});
crypto.pbkdf2("password", "salt", 100000, 512, "sha512", (err, derivedKey) => {
  if (err) throw err;
  console.log(`${++count}`, Date.now() - start);
});
crypto.pbkdf2("password", "salt", 100000, 512, "sha512", (err, derivedKey) => {
  if (err) throw err;
  console.log(`${++count}`, Date.now() - start);
});
crypto.pbkdf2("password", "salt", 100000, 512, "sha512", (err, derivedKey) => {
  if (err) throw err;
  console.log(`${++count}`, Date.now() - start);
});
