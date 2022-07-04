// const http = require("http");

// const PORT = 4999;

// const ip = "localhost";

// const server = http.createServer((request, response) => {
//   if (request.method === "OPTIONS") {
//     response.writeHead(200, defaultCorsHeader);
//   }
//   if (request.method === "POST" && request.url === "/upper") {
//     response.writeHead(200, defaultCorsHeader);
//     let body = [];
//     request
//       .on("data", (chunk) => {
//         body.push(chunk);
//       })
//       .on("end", () => {
//         body = Buffer.concat(body).toString();
//         response.end(body.toUpperCase());
//       });
//   } else if (request.method === "POST" && request.url === "/lower") {
//     response.writeHead(200, defaultCorsHeader);
//     let body = [];
//     request
//       .on("data", (chunk) => {
//         body.push(chunk);
//       })
//       .on("end", () => {
//         body = Buffer.concat(body).toString();
//         console.log(body);
//         response.end(body.toLowerCase());
//       });
//   } else {
//     response.statusCode = 404;
//     response.end();
//   }
// });

// server.listen(PORT, ip, () => {
//   console.log(`http server listen on ${ip}:${PORT}`);
// });

// const defaultCorsHeader = {
//   "Access-Control-Allow-Origin": "*",
//   "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
//   "Access-Control-Allow-Headers": "Content-Type, Accept",
//   "Access-Control-Max-Age": 10,
// };

const express = require("express");
const app = express();
const port = 4999;
const jsonParser = express.json({ strict: false });
const cors = require("cors");
const errorHandler = (req, res, next) =>
  res.status(404).send("경로를 다시 확인해주세요.");

app.use(cors());

app.post("/upper", jsonParser, function (req, res) {
  console.log(`${req.body}=>${req.body.toUpperCase()}`);
  res.json(JSON.stringify(req.body.toUpperCase()));
});

app.options("/lower", cors());
app.post("/lower", cors(), jsonParser, function (req, res) {
  console.log(`${req.body}=>${req.body.toLowerCase()}`);
  res.json(req.body.toLowerCase());
});

app.listen(port, () => {
  console.log(`Server Start Port:${port}`);
});

app.use(errorHandler);
