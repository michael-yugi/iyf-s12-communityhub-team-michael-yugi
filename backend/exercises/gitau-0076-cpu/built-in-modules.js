const fs = require("node:fs");
const path = require("node:path");

const helloPath = path.join(__dirname, "hello.js");

// Read a file synchronously.
const content = fs.readFileSync(helloPath, "utf-8");
console.log("Synchronous read:\n", content);

// Read a file asynchronously (preferred for most application code).
fs.readFile(helloPath, "utf-8", (err, data) => {
  if (err) {
    console.error("Could not read hello.js:", err);
    return;
  }

  console.log("Asynchronous read:\n", data);
});

// Write a sample output file alongside this script.
const outputPath = path.join(__dirname, "output.txt");
fs.writeFileSync(outputPath, "Hello, World!\n", "utf-8");
console.log("Wrote:", outputPath);

// path provides cross-platform path utilities.
console.log("Example path:", path.join(__dirname, "files", "data.json"));
console.log("Photo extension:", path.extname("photo.jpg"));
