const fs = require("fs");

fs.writeFile("test.txt", "Hello", (err) => {
  if (err) return console.log(err);
  console.log("content written");
});
