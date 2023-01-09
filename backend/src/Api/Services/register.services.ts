import bcrypt from "bcryptjs";
import IError from "../../Interfaces/IError";
import IUser from "../../Interfaces/IUser";
import UserODM from "../../Models/UserODM";

class RegisterService {
	private model: UserODM;

	constructor() {
		this.model = new UserODM(); 
	}

	private async verifyIfUserExist(email: string) {
		const databaseUser = await this.model.readByEmail(email);
		if (databaseUser) {
			const e = new Error("Já Excsiste") as IError;
			e.status = 409;
			throw e;
		}
		return databaseUser;
	}

	private async generateHashPass(password: string) {
		const salt = await bcrypt.genSalt();
		const hashPassword = await bcrypt.hash(password, salt);
		return hashPassword;
	}

	public async register(user: IUser) {
		await this.verifyIfUserExist(user.email);
		const hashPassword = await this.generateHashPass(user.password);
		user.password = hashPassword;
		const createdUser = await this.model.create(user);
		return createdUser;
	}
}

export default RegisterService;