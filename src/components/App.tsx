import Viewport from './Viewport';
import packageJson from '../../package.json';
import Modes from '../logic/Modes';
import ErrorBoundary from './ErrorBoundary';

function App() {
	return (
		<ErrorBoundary>
			<element>
				<box width='70%' height='100%'>
					<Viewport />
				</box>
				<box
					left='70%'
					width='30%'
					height='100%-1'
					border={{ type: 'line' }}
					style={{ border: { fg: 'white' } }}
				>
					Left Side
				</box>

				{/* status bar */}
				<box
					bottom={0}
					style={{ bg: 'bright-black' }}
					width='100%'
					height={1}
				>
					<text
						content={` ${Modes.MOVEMENT.name} `}
						style={{ bg: 'bright-gray' }}
					/>
					<text
						right={0}
						content={` ${packageJson.name} v${packageJson.version} `}
						style={{ bg: 'bright-gray' }}
					/>
				</box>
			</element>
		</ErrorBoundary>
	);
}

export default App;
