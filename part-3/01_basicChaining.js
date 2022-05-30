const newsURL = 'http://localhost:4999/data/latestNews';
const weatherURL = 'http://localhost:4999/data/weather';

function getNewsAndWeather() {
  // TODO: fetch을 이용해 작성합니다
  // TODO: 여러개의 Promise를 then으로 연결하여 작성합니다

  fetch(newsURL)
    .then(response => response.json())
    .then(newsData => fetch(weatherURL)
      .then(response => response.json())
      .then(whatherURL => console.log(newsData, whatherURL)))

}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeather
  }
}