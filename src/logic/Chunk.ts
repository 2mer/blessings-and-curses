import settings from "../settings";
import Block from "./Block";
import Point from "./Point";

type ChunkOptions = { position: Point };

export default class Chunk {
	position: Point;
	blocks?: Block[][];

	constructor({ position }: ChunkOptions) {
		this.position = position;
	};

	getBlock(relativePosition: Point) {
		const { x, y } = relativePosition;

		const wy = y < 0 ? settings.chunkSize + y : y;
		const wx = x < 0 ? settings.chunkSize + x : x

		return this.blocks![wy][wx];
	}

	get key() {
		return `${this.position.x}_${this.position.y}`
	}
}