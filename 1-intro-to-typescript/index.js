"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typeicode.com/todos/1';
axios_1["default"].get(url).then(function (res) { return console.log(res.data); });
