import Entity from "../logic/Entity";

export default class PlayerEntity extends Entity {
	render(): [string, any] {
		return ['@', { fg: 'yellow' }];
	}
}