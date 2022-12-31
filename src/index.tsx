import { render } from 'react-blessed';
import App from './components/App';
import { ScreenProvider } from './hooks/useScreen';
import screen from './screen';

// Adding a way to quit the program
screen.key(['escape', 'q', 'C-c'], function (ch, key) {
	return process.exit(0);
});

// Rendering the React app using our screen
render(
	<ScreenProvider screen={screen}>
		<App />
	</ScreenProvider>,
	screen
);
