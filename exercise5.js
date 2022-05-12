import http from "http";
// create variable and asign a createServer method to it to be able
// to stream data
const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello World\n");
});
server.listen(80);
console.log("Server running at http://127.0.0.1:80/");
