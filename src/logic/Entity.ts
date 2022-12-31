import Point from "./Point";
import { v4 } from "uuid";

export default abstract class Entity {
	id = v4();
	position = new Point();
	abstract render(): [string, any];
}