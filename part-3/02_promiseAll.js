const newsURL = 'http://localhost:4999/data/latestNews';
const weatherURL = 'http://localhost:4999/data/weather';

function getNewsAndWeatherAll() {
  // TODO: Promise.all을 이용해 작성합니다
  fetch(newsURL)
    .then((response) => response.json())
    .then((data) => console.log(data));
}
getNewsAndWeatherAll();
if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAll
  }
}