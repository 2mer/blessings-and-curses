type PointMutationOverloadSignatures = {
	(other: Point): Point;
	(num: number): Point;
	(x: number, y: number): Point;
}

type PointMutator = (original: number, arg: number) => number;

// creates a method with overload handling + overload signatures for the given mutator
const createOperator = (mutator: PointMutator) => (function (this: Point, ...args: any): Point {
	const [a1, a2] = args;

	if (a1 instanceof Point) {
		this.x = mutator(this.x, a1.x);
		this.y = mutator(this.y, a1.y);

		return this;
	}

	this.x = mutator(this.x, a1);
	this.y = mutator(this.y, a2 ?? a1);

	return this;
}) as PointMutationOverloadSignatures


export default class Point {
	x: number;
	y: number;

	constructor(x: number = 0, y: number = 0) {
		this.x = x;
		this.y = y;
	}

	add = createOperator((v, a) => v + a)
	sub = createOperator((v, a) => v - a)
	mod = createOperator((v, a) => v % a)
	div = createOperator((v, a) => v / a)

	round() {
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);

		return this;
	}

	clone() {
		return new Point(this.x, this.y);
	}
}