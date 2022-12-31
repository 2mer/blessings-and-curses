import logger from '../logger';
import Camera from '../logic/Camera';
import Point from '../logic/Point';
import World from '../logic/World';
import useViewport from '../store/viewport';
import Entities from './Entities';

function MapRenderer({ world, camera }: { world: World; camera: Camera }) {
	const viewport = useViewport();
	const map = camera.project(viewport);
	const entityLookup = world.getEntityLookup();

	return (
		<>
			<element top={0} left={0} width='100%' height='100%'>
				{map.map((row, y) => {
					return row.map((block, x) => {
						const worldPos = camera.cameraToWorld(
							new Point(x, y),
							viewport
						);

						const entity = entityLookup.get(worldPos.toKey());

						if (entity) {
							const [char, style] = entity.render();

							return (
								<box
									key={entity.id}
									left={x}
									top={y}
									width={1}
									height={1}
									style={style}
									content={char}
								/>
							);
						}

						if (!block) return null;

						const key = `${x}_${y}`;

						return (
							<box
								key={key}
								style={{ bg: 'black', ...block.style }}
								top={y}
								left={x}
								width={1}
								height={1}
								content={block.char ?? ' '}
							/>
						);
					});
				})}

				{/* {Boolean(viewport.width && viewport.height) &&
					world.entities.map((ent) => {
						const [char, style] = ent.render();
						const pos = camera.worldToCamera(
							ent.position,
							viewport
						);

						return (
							<box
								key={ent.id}
								left={pos.x}
								top={pos.y}
								width={1}
								height={1}
								style={style}
								content={char}
							/>
						);
					})} */}
			</element>

			{/* render background / items */}
			{/* TODO */}

			{/* render entities */}
			{/* <Entities world={world} camera={camera} /> */}
		</>
	);
}

export default MapRenderer;
