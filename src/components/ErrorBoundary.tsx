import React from 'react';
import logger from '../logger';

class ErrorBoundary extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = { hasError: false, error: undefined };
	}

	static getDerivedStateFromError(error: any) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true, error };
	}

	componentDidCatch(error: any, errorInfo: any) {
		// You can also log the error to an error reporting service
		logger.error(`${error?.message}\n\n${error?.stack}`);
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return (
				<box
					border={{ type: 'line' }}
					style={{ border: { fg: 'red' } }}
				>
					<text
						style={{ fg: 'red', bold: true }}
						content='An error has occured:'
					/>
					<box top={1}>{this.state.error?.message}</box>
					<box
						top={3}
						scrollable
						mouse
						height='100%-5'
						vi
						keys
						alwaysScroll
						scrollbar={{
							style: { bg: 'bright-gray' },
							track: { bg: 'gray' },
							ch: ' ',
						}}
						content={this.state.error?.stack}
					/>
					{/* {}
					</box> */}
				</box>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
