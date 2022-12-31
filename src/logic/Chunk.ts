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
		return this.blocks![y][x];
	}
}