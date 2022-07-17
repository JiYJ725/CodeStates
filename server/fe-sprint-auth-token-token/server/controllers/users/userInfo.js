const { USER_DATA } = require("../../db/data");
// JWT는 verifyToken으로 검증할 수 있습니다. 먼저 tokenFunctions에 작성된 여러 메서드들의 역할을 파악하세요.
const { verifyToken, generateToken } = require("../helper/tokenFunctions");

module.exports = async (req, res) => {
  const accessToken = req.cookies.access_jwt;
  const refreshToken = req.cookies.refresh_jwt;

  const verifyAccessToken = await verifyToken("access", accessToken);
  const verifyRefreshToken = await verifyToken("refresh", refreshToken);
  const createUserInfo = (id) => ({
    ...USER_DATA.filter((user) => user.id === id)[0],
  });

  const cookieConfig = {
    domain: "localhost",
    path: "/",
    httpOnly: true,
    secure: true,
    sameSite: "none",
  };

  if (verifyAccessToken) {
    const userInfo = createUserInfo(verifyAccessToken.id);
    delete userInfo.password;
    return res.send(userInfo);
  }

  if (verifyRefreshToken) {
    const userInfo = createUserInfo(verifyRefreshToken.id);

    cookieConfig.maxAge = 1000 * 60 * 30;
    const ReGenerateToken = generateToken(userInfo);
    res.cookie("access_jwt", (await ReGenerateToken).accessToken, cookieConfig);
    delete userInfo.password;
    return res.send(userInfo);
  }

  return res.status(401).send("Not Authorized");

  /*
   * TODO: 토큰 검증 여부에 따라 유저 정보를 전달하는 로직을 구현하세요.
   *
   * Access Token에 대한 검증이 성공하면 복호화된 payload를 이용하여 USER_DATA에서 해당하는 유저를 조회할 수 있습니다.
   * Access Token이 만료되었다면 Refresh Token을 검증해 Access Token을 재발급하여야 합니다.
   * Access Token과 Refresh Token 모두 만료되었다면 상태 코드 401을 보내야합니다.
   */
};
