// TODO : useState를 react로 부터 import 합니다.
import React, { useState } from "react";
import Footer from "../Footer";
import Tweet from "../Components/Tweet";
import "./Tweets.css";
import dummyTweets from "../static/dummyData";

const getRandomNumber = (min, max) => {
  return parseInt(Math.random() * (Number(max) - Number(min) + 2));
};

const Tweets = () => {
  // TODO : 새로 트윗을 작성하고 전송할 수 있게 useState를 적절히 활용하세요.
  const [userName, setUserName] = useState("parkhacker");
  const [content, setContent] = useState("");
  const [contents, setContents] = useState(dummyTweets);
  const [choice, setChoice] = useState("default");

  const 중복제거배열 = contents.reduce((acc, current) => {
    if (acc.findIndex(({ username }) => username === current.username) === -1) {
      acc.push(current);
    }
    return acc;
  }, []);

  // const 중복제거함수 = (contents) => {
  //   const res = [];
  //   for (const obj of contents) {
  //     if (res.findIndex(({ username }) => username === obj.username) === -1) {
  //       res.push(obj);
  //     }
  //   }
  //   return res;
  // };
  // const 중복제거배열 = 중복제거함수(contents);

  const options = 중복제거배열.map((content) => {
    return (
      <option value={content.username} key={content.id}>
        {content.username}
      </option>
    );
  });

  const handleContent = (event) => {
    //TODO : select tag 가 정상적으로 작동하도록 코드를 완성하세요.
    setChoice(event.target.value);
  };
  const handleButtonClick = () => {
    const tweet = {
      id: contents.length + 1,
      username: userName,
      picture: `https://randomuser.me/api/portraits/women/${getRandomNumber(
        1,
        98
      )}.jpg`,
      content: content,
      createdAt: new Date().toLocaleDateString("ko-kr"),
      updatedAt: new Date().toLocaleDateString("ko-kr"),
    };
    // TODO : Tweet button 엘리먼트 클릭시 작동하는 함수를 완성하세요.
    // 트윗 전송이 가능하게 작성해야 합니다.
    setContents([tweet, ...contents]);
  };

  const handleChangeUser = (event) => {
    // TODO : Tweet input 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
    setUserName(event.target.value);
  };

  const handleChangeMsg = (event) => {
    // TODO : Tweet textarea 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
    setContent(event.target.value);
  };

  // TODO : 트윗데이터삭제핸들러함수
  const deleteTweetDataHandler = (id) => {
    return setContents(contents.filter((el) => id !== el.id));
  };

  let selectItem = (
    <option value={choice} key={content.id} onChange={handleContent}>
      {choice}
    </option>
  );

  let tweetList = contents
    .filter((el) => el.username === choice)
    .map((tweet) => (
      <Tweet
        tweet={tweet}
        onDeleteTweet={deleteTweetDataHandler}
        key={tweet.id}
      />
    ));

  if (choice === "default") {
    selectItem = options;
    tweetList = contents.map((tweet) => (
      <Tweet
        tweet={tweet}
        onDeleteTweet={deleteTweetDataHandler}
        key={tweet.id}
      />
    ));
  }
  return (
    <React.Fragment>
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile">
            <img src="https://randomuser.me/api/portraits/men/98.jpg" />
          </div>
          <div className="tweetForm__inputContainer">
            <div className="tweetForm__inputWrapper">
              <div className="tweetForm__input">
                <input
                  type="text"
                  defaultValue="parkhacker"
                  placeholder="your username here.."
                  className="tweetForm__input--username"
                  onChange={handleChangeUser}
                ></input>
                {/* TODO : 트윗을 작성할 수 있는 textarea 엘리먼트를 작성하세요. */}
                <textarea
                  placeholder="your tweet here..."
                  className="tweetForm__input--message"
                  onChange={handleChangeMsg}
                  value={content}
                />
              </div>
              <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  {/* TODO : 트윗 총 개수를 보여줄 수 있는 Counter를 작성하세요. */}
                  {`total: ${dummyTweets.length}`}
                </span>
              </div>
            </div>
            <div className="tweetForm__submit">
              <div className="tweetForm__submitIcon"></div>
              {/* TODO : 작성한 트윗을 전송할 수 있는 button 엘리먼트를 작성하세요. */}
              <button
                className="tweetForm__submitButton"
                onClick={handleButtonClick}
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="tweet__selectUser">
        <select value={choice} onChange={handleContent}>
          <option value="default" key={0} onChange={handleContent}>
            --click to filter tweets by username
          </option>
          {selectItem}
        </select>
      </div>
      <ul className="tweets">
        {/* TODO : 하나의 트윗이 아니라, 주어진 트윗 목록(dummyTweets) 갯수에 맞게 보여줘야 합니다. */}
        {tweetList}
        {/* <Tweet tweet={dummyTweets[0]} /> */}
      </ul>
      <Footer />
    </React.Fragment>
  );
};

export default Tweets;
