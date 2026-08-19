
const http = require("http");
let raw = {};
for (i = 0; i < localStorage.length; i++) {
        raw.localStorage.key(i) = localStorage.getItem(localStorage.key(i));
      }

const server = http.createServer((req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(raw));
      });

server.listen(() => {
        console.log("Server started");
      });