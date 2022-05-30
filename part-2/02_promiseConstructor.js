const fs = require("fs");

const getDataFromFilePromise = filePath => {
  // return new Promise()
  // TODO: Promise 및 fs.readFile을 이용해 작성합니다.
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, "utf-8", (err, data) => {
      err ? reject(err) : resolve(data);
    })
  })
};
Array.prototype.sort

getDataFromFilePromise('README.md').then(data => console.log(data));

module.exports = {
  getDataFromFilePromise
};
