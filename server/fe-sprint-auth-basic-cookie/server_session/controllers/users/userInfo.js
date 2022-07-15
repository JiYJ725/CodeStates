const { USER_DATA } = require("../../db/data");

module.exports = (req, res) => {
  const sessionId = req.session.sessionId;
  const userInfo = {
    ...USER_DATA.filter((user) => user.id === sessionId)[0],
  };

  if (!sessionId || !userInfo.id) {
    res.status(401).send("Not Authorized");
  } else {
    delete userInfo.password;
    res.send(userInfo);
  }
  /*
   * TODO: 세션 객체에 담긴 값의 존재 여부에 따라 유저 정보를 전달하는 로직을 구현하세요.
   *
   * 세션 객체에 담긴 정보가 궁금하다면, req.session을 콘솔로 출력해보세요.
   * 로그인 시 세션 객체에 저장한 userInfo.id를 이용해 해당하는 유저를 조회할 수 있습니다.
   */
};
