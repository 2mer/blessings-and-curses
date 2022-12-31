"use strict";
exports.__esModule = true;
var react_blessed_1 = require("react-blessed");
var App_1 = require("./components/App");
var useScreen_1 = require("./hooks/useScreen");
var screen_1 = require("./screen");
// Adding a way to quit the program
screen_1["default"].key(['escape', 'q', 'C-c'], function (ch, key) {
    return process.exit(0);
});
// Rendering the React app using our screen
(0, react_blessed_1.render)(<useScreen_1.ScreenProvider screen={screen_1["default"]}>
		<App_1["default"] />
	</useScreen_1.ScreenProvider>, screen_1["default"]);
