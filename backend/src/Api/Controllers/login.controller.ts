import { NextFunction, Request, Response } from "express";
import LoginService from "../Services/login.services";

class LoginController {
	private req: Request;
	private res: Response;
	private next: NextFunction;
	private service: LoginService;

	constructor(req: Request, res: Response, next: NextFunction) {
		this.req = req;
		this.res = res;
		this.next = next; 
		this.service = new LoginService();
	}

	public async login() {
		try {
			const { user } = this.req.body;
			const token = await this.service.login(user);
			return this.res.status(200).json({ token });
		} catch(e) {
			this.next(e);
		}
	}
}

export default LoginController;