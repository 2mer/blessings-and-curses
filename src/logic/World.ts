import settings from "../settings";
import Chunk from "./Chunk";
import Entity from "./Entity";
import Point from "./Point";

export default class World {
	chunks: Map<string, Chunk>;
	entities: Entity[];

	constructor() {
		this.chunks = new Map();
		this.entities = [];
	}

	getChunk(chunkCoordinate: Point) {
		const key = `${chunkCoordinate.x}-${chunkCoordinate.y}`;

		return this.chunks.get(key);
	}

	getBlock(blockPosition: Point) {
		const { chunkSize } = settings;

		const chunkCoordinate = blockPosition.clone().div(chunkSize);
		const relativePosition = blockPosition.clone().mod(chunkSize);

		const chunk = this.getChunk(chunkCoordinate);

		if (!chunk) {
			return undefined;
		}

		return chunk.getBlock(relativePosition);
	}
}