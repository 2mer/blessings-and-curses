import { Widgets } from 'blessed';
import { useEffect } from 'react';
import useScreen from './useScreen';

export default function useInput(
	keys: string[],
	handler: (ch: any, key: Widgets.Events.IKeyEventArg) => void,
	deps = []
) {
	const screen = useScreen();

	useEffect(() => {
		keys.forEach((key) => {
			screen.key(key, handler);
		});

		return () => {
			keys.forEach((key) => {
				screen.unkey(key, handler);
			});
		};
	}, [...keys, deps]);
}
