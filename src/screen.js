"use strict";
exports.__esModule = true;
var blessed_1 = require("blessed");
// Creating our screen
var screen = blessed_1["default"].screen({
    autoPadding: true,
    smartCSR: true,
    title: 'react-blessed hello world',
    forceUnicode: true,
    fullUnicode: true,
    log: './logs/screen.log'
});
exports["default"] = screen;
