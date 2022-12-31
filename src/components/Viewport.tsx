import { useState } from 'react';
import useInput from '../hooks/useInput';
import Block from '../logic/Block';

const AirBlock: Block = {};
const StoneBlock: Block = { style: { bg: 'gray' } };
const LadderBlock: Block = { char: '#', style: { fg: '#a63800' } };

const map = [
	[AirBlock, AirBlock, AirBlock, AirBlock],
	[StoneBlock, LadderBlock, AirBlock, StoneBlock],
	[StoneBlock, LadderBlock, AirBlock, StoneBlock],
	[StoneBlock, LadderBlock, AirBlock, StoneBlock],
	[StoneBlock, StoneBlock, StoneBlock, StoneBlock],
	[StoneBlock, StoneBlock, StoneBlock, StoneBlock],
	[StoneBlock, StoneBlock, StoneBlock, StoneBlock],
];

function Viewport() {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	useInput('w', () => setY((prev) => prev - 1));
	useInput('s', () => setY((prev) => prev + 1));
	useInput('a', () => setX((prev) => prev - 1));
	useInput('d', () => setX((prev) => prev + 1));

	useInput('up', () => setY((prev) => prev - 1));
	useInput('down', () => setY((prev) => prev + 1));
	useInput('left', () => setX((prev) => prev - 1));
	useInput('right', () => setX((prev) => prev + 1));

	return (
		<element>
			{map.map((row, y) => {
				return row.map((block, x) => {
					const key = `${x}-${y}`;
					return (
						<box
							key={key}
							style={block.style}
							top={y}
							left={x}
							width={1}
							height={1}
							content={block.char ?? ' '}
						/>
					);
				});
			})}
			<text
				top={y}
				left={x}
				width={1}
				style={{ fg: 'yellow' }}
				content='@'
			/>
		</element>
	);
}

export default Viewport;
