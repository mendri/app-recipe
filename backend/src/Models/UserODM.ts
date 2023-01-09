import { Schema } from "mongoose";
import AbstractODM from "./AbstractODM";
import IUser from "../Interfaces/IUser";

class UserODM extends AbstractODM<IUser> {
	constructor() {
		super("Users", new Schema<IUser>({
			name: { type: String, required: true },
			email: { type: String, required: true },
			password: { type: String, required: true },
		}));
	}

	public async readByEmail(email: string) {
		const findedUser = await this.model.findOne({ email });
		return findedUser;
	}
}

export default UserODM;