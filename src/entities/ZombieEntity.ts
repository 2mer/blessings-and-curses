import Entity from "../logic/Entity";

export default class ZombieEntity extends Entity {
	render(): [string, any] {
		return ['z', { fg: 'green', bg: 'black' }];
	}

}