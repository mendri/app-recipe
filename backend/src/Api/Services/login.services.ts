import bcrypt from "bcryptjs";
import IUser from "../../Interfaces/IUser";
import UserODM from "../../Models/UserODM";
import { generateToken } from "../../Helpers/token";
import IError from "../../Interfaces/IError";

class LoginService {
	private model: UserODM;

	constructor() {
		this.model = new UserODM();
	}

	private async verifyIfUserExist(email: string) {
		const databaseUser = await this.model.readByEmail(email);
		if (!databaseUser) {
			const e = new Error("Noon Excsiste") as IError;
			e.status = 404;
			throw e;
		}
		return databaseUser;
	}

	private async verifyPassword(password: string, hashPassword: string) {
		const isValid = await bcrypt.compare(password, hashPassword);
		if (!isValid) {
			const e = new Error("Erado Senha ou Email Erados!!!") as IError;
			e.status = 401;
			throw e;
		}
		return isValid;
	}

	public async login(user: IUser) {
		const databaseUser = await this.verifyIfUserExist(user.email);
		await this.verifyPassword(user.password, databaseUser.password);
		const token = generateToken(databaseUser.email, databaseUser.name as string);
		return token;
	}
}

export default LoginService;