import logger from "../logger";
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
		const key = `${chunkCoordinate.x}_${chunkCoordinate.y}`;

		return this.chunks.get(key);
	}

	getBlock(blockPosition: Point) {
		const { chunkSize } = settings;

		const chunkCoordinate = blockPosition.clone().div(chunkSize).floor();
		const relativePosition = blockPosition.clone().mod(chunkSize);

		logger.info(chunkSize + " " + blockPosition.clone() + " " + chunkCoordinate.toString() + " " + relativePosition.toString());

		const chunk = this.getChunk(chunkCoordinate);

		if (!chunk) {
			return undefined;
		}

		return chunk.getBlock(relativePosition);
	}

	loadChunk(chunk: Chunk) {
		this.chunks.set(chunk.key, chunk);
	}


	unloadChunk(chunk: Chunk): void;
	unloadChunk(chunk: string): void;
	unloadChunk(chunk: Chunk | string) {
		if (typeof chunk === 'string') {
			this.chunks.delete(chunk);
			return
		}

		this.chunks.delete(chunk.key);
	}

	getEntityLookup() {
		return new Map<string, Entity>(this.entities.map(ent => [ent.position.toKey(), ent]))
	}
}