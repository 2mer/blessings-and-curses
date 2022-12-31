import Camera from '../logic/Camera';
import World from '../logic/World';
import useViewport from '../store/viewport';

function Entities({ world, camera }: { world: World; camera: Camera }) {
	const viewport = useViewport();
	const { width, height } = viewport;
	return (
		<element ref={(r) => r && r.setIndex(1)}>
			{width &&
				height &&
				world.entities.map((ent) => {
					const [char, style] = ent.render();
					const pos = camera.worldToCamera(ent.position, viewport);

					return (
						<text
							key={ent.id}
							left={pos.x}
							top={pos.y}
							width={1}
							style={style}
							content={char}
						/>
					);
				})}
		</element>
	);
}

export default Entities;
