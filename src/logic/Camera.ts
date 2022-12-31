import UnloadedBlock from "../blocks/UnloadedBlock";
import Block from "./Block";
import Entity from "./Entity";
import Point from "./Point";
import World from "./World";

export default class Camera {

	world: World;

	constructor({ world }: { world: World }) {
		this.world = world;
	}

	trackedEntity?: Entity = undefined;

	private _position = new Point();

	get position() {
		if (this.trackedEntity) return this.trackedEntity.position;

		return this._position;
	}

	project(options: { width: number, height: number, fallbackBlock?: Block }) {
		const { width, height, fallbackBlock = undefined } = options;
		const dimensions = new Point(width, height)

		const cameraPos = this.position;

		const blockProjection: (Block | undefined)[][] = Array.from({ length: height }).map(() => Array.from({ length: width }))

		const halfDim = dimensions.clone().div(2).round()

		for (let i = 0; i < height; i++) {
			for (let j = 0; j < width; j++) {
				blockProjection[i][j] = this.world.getBlock(cameraPos.clone().sub(halfDim).add(j, i)) ?? fallbackBlock
			}
		}

		return blockProjection;
	}

	worldToCamera(point: Point, options: { width: number, height: number }) {
		const { width, height } = options;

		const halfDim = new Point(width, height).clone().div(2).round()

		return point.clone().add(halfDim).sub(this.position);
	}

	cameraToWorld(point: Point, options: { width: number, height: number }) {
		const { width, height } = options;

		const halfDim = new Point(width, height).clone().div(2).round()

		return point.clone().sub(halfDim).add(this.position);
	}

}