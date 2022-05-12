// Include fs module
import fs from "fs";
// Use fs.readFile() method to read the file
fs.readFile("test.txt", "utf8", (err, data) => {
  // Display the file content
  console.log(data);
});

console.log("readFile called");
