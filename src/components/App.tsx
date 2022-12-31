import Viewport from './Viewport';

function App() {
	return (
		<element>
			<box width='70%' height='100%'>
				<Viewport />
			</box>
			<box
				left='70%'
				width='30%'
				height='100%'
				border={{ type: 'line' }}
				style={{ border: { fg: 'white' } }}
			>
				Left Side
			</box>
		</element>
	);
}

export default App;
