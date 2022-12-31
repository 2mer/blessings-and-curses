import blessed from 'blessed';

// Creating our screen
const screen = blessed.screen({
	autoPadding: true,
	smartCSR: true,
	title: 'react-blessed hello world',
	forceUnicode: true,
	fullUnicode: true,
});

export default screen;