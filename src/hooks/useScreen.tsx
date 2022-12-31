import { Widgets } from 'blessed';
import { createContext, useContext } from 'react';

const ScreenContext = createContext({
	screen: undefined as undefined | Widgets.Screen,
});

export const ScreenProvider = ({
	children,
	screen,
}: {
	children?: any;
	screen: Widgets.Screen;
}) => {
	return (
		<ScreenContext.Provider value={screen}>
			{children}
		</ScreenContext.Provider>
	);
};

export default function useScreen() {
	return useContext(ScreenContext).screen!;
}
