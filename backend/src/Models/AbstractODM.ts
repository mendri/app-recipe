import {
	Model,
	Schema,
	model,
	models,
} from "mongoose";

class AbstractODM<T> {
	protected model: Model<T>;

	constructor(modelName: string, schema: Schema) {
		this.model = models[modelName] || model(modelName, schema);
	}

	public async create(obj: T) {
		const objCreated = await this.model.create(obj);
		return objCreated;
	}

	public async readAll() {
		const allObj = await this.model.find();
		return allObj;
	}
}

export default AbstractODM;