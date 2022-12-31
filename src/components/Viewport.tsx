import { Widgets } from 'blessed';
import { useEffect, useRef, useState } from 'react';
import AirBlock from '../blocks/AirBlock';
import LadderBlock from '../blocks/LadderBlock';
import StoneBlock from '../blocks/StoneBlock';
import PlayerEntity from '../entities/PlayerEntity';
import useInput from '../hooks/useInput';
import logger from '../logger';
import Camera from '../logic/Camera';
import Chunk from '../logic/Chunk';
import Point from '../logic/Point';
import World from '../logic/World';
import { useForceUpdate } from '@mantine/hooks';
import ZombieEntity from '../entities/ZombieEntity';
import useViewport from '../store/viewport';
import MapRenderer from './MapRenderer';
import settings from '../settings';

const world = new World();

const map = [
	[AirBlock, AirBlock, AirBlock, AirBlock, StoneBlock, StoneBlock],
	[StoneBlock, LadderBlock, AirBlock, StoneBlock, StoneBlock, StoneBlock],
	[StoneBlock, LadderBlock, AirBlock, StoneBlock, StoneBlock, StoneBlock],
	[StoneBlock, LadderBlock, AirBlock, StoneBlock, StoneBlock, StoneBlock],
	[StoneBlock, StoneBlock, StoneBlock, StoneBlock, StoneBlock, StoneBlock],
	[StoneBlock, StoneBlock, StoneBlock, StoneBlock, StoneBlock, StoneBlock],
	[StoneBlock, StoneBlock, StoneBlock, StoneBlock, StoneBlock, StoneBlock],
];

const CHUNK_AMT = 4;

for (let j = 0; j < CHUNK_AMT; j++) {
	for (let i = 0; i < CHUNK_AMT; i++) {
		const chunk = new Chunk({ position: new Point(i, j) });
		chunk.blocks = map;

		world.loadChunk(chunk);
	}
}

const player = new PlayerEntity();

const camera = new Camera({ world });
camera.trackedEntity = player;

const z1 = new ZombieEntity();
z1.position.x = 0;
z1.position.y = 0;
const z2 = new ZombieEntity();
z2.position.x = settings.chunkSize;
z2.position.y = 0;
const z3 = new ZombieEntity();
z3.position.x = 0;
z3.position.y = settings.chunkSize;
const z4 = new ZombieEntity();
z4.position.x = settings.chunkSize;
z4.position.y = settings.chunkSize;

world.entities.push(player, z1, z2, z3, z4);

function Viewport() {
	const forceUpdate = useForceUpdate();
	const viewport = useViewport();

	useInput(['w', 'up', 'k'], () => {
		player.position.y -= 1;
		forceUpdate();
	});
	useInput(['s', 'down', 'j'], () => {
		player.position.y += 1;
		forceUpdate();
	});
	useInput(['a', 'left', 'h'], () => {
		player.position.x -= 1;
		forceUpdate();
	});
	useInput(['d', 'right', 'l'], () => {
		player.position.x += 1;
		forceUpdate();
	});

	return (
		<box
			width='100%'
			height='100%-1'
			ref={(b: any) => b && viewport.setSize(b.width, b.height)}
			style={{ bg: 'gray' }}
		>
			{/* render the world */}
			<MapRenderer world={world} camera={camera} />
		</box>
	);
}

export default Viewport;
