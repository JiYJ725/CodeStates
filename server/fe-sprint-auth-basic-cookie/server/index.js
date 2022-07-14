const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const fs = require("fs");
const https = require("https");
const controllers = require("./controllers");
const app = express();

//mkcert에서 발급한 인증서를 사용하기 위한 코드입니다. 삭제하지 마세요!
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const HTTPS_PORT = process.env.HTTPS_PORT || 4000;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const corsOptions = {
  /* TODO: CORS 설정이 필요합니다. 클라이언트가 어떤 origin인지에 따라 달리 설정할 수 있습니다.
   * 메서드는 GET, POST, OPTIONS를 허용합니다.
   */
  origin: "http://localhost:3000", // 접근 권한을 부여하는 도메인
  credentials: true, // 응답 헤더에 Access-Control-Allow-Credentials 추가 (false면 쿠키를 저장할 수 없다.)
  methods: ["GET", "POST", "OPTIONS"],
};
// 클라이언트에서는 withcredentials: true로 넣어야한다.
app.use(cors(corsOptions));

app.post("/login", controllers.login);
app.post("/logout", controllers.logout);
app.get("/userinfo", controllers.userInfo);

// 인증서 파일들이 존재하는 경우에만 https 프로토콜을 사용하는 서버를 실행합니다.
// 만약 인증서 파일이 존재하지 않는경우, http 프로토콜을 사용하는 서버를 실행합니다.
// 파일 존재여부를 확인하는 폴더는 package.json이 위치한 server 폴더입니다.
let server;
const keyPath = "/Users/jiyeongjun/Desktop/FEzerojun";
const certPath =
  "/Users/jiyeongjun/Desktop/FEzerojun/CodeStatesByJYJ/CodeStates/server";
if (
  fs.existsSync(keyPath + "/key.pem") &&
  fs.existsSync(certPath + "/cert.pem")
) {
  const privateKey = fs.readFileSync(keyPath + "/key.pem", "utf8");
  const certificate = fs.readFileSync(certPath + "/cert.pem", "utf8");
  const credentials = {
    key: privateKey,
    cert: certificate,
  };

  server = https.createServer(credentials, app);
  server.listen(HTTPS_PORT, () =>
    console.log(`🚀 HTTPS Server is starting on ${HTTPS_PORT}`)
  );
} else {
  server = app.listen(HTTPS_PORT, () =>
    console.log(`🚀 HTTP Server is starting on ${HTTPS_PORT}`)
  );
}
module.exports = server;
