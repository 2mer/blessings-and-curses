import { Widgets } from 'blessed';
import { useEffect } from 'react';
import useScreen from './useScreen';

export default function useInput(
	key: string,
	handler: (ch: any, key: Widgets.Events.IKeyEventArg) => void,
	deps = []
) {
	const screen = useScreen();

	useEffect(() => {
		screen.key(key, handler);

		return () => {
			screen.unkey(key, handler);
		};
	}, deps);
}
