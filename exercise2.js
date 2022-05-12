import fs from "fs";

// use writeFile() to write a new file (test.txt)
fs.writeFile("test.txt", "Hello from the test.txt file", (err) => {
  if (err) return console.log(err);
  console.log("content written");
});
