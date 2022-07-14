// node part-2/01_callback.js
const fs = require("fs");

// fs.readFile(path,[,options], callback)
const getDataFromFile = function (filePath, callback) {
  // TODO: fs.readFile을 이용해 작성합니다
  fs.readFile(filePath, 'utf-8', (err, data) => {
    err ? callback(err, null) : callback(null, data);
  })
};


getDataFromFile('README.md', (err, data) => console.log(data));

module.exports = {
  getDataFromFile
};
