const https = require("https");
const fs = require("fs");
const keyPath = "/Users/jiyeongjun/Desktop/FEzerojun";
const certPath =
  "/Users/jiyeongjun/Desktop/FEzerojun/CodeStatesByJYJ/CodeStates/server";

https
  .createServer(
    {
      key: fs.readFileSync(keyPath + "/key.pem", "utf-8"),
      cert: fs.readFileSync(certPath + "/cert.pem", "utf-8"),
    },
    function (req, res) {
      res.write("dfadfjklasfjdklasjfkl");
      res.end();
    }
  )
  .listen(3001);
