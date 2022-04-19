import app from "./app";
import http from "http";

//app.listen(5000);
console.log("Server on port: 5000");

//
const server = http.createServer(app);

server.listen(5000);
