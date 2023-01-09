import { NextFunction, Request, Response } from "express";
import RegisterService from "../Services/register.services";

class RegisterController {
	private req: Request;
	private res: Response;
	private next: NextFunction;
	private service: RegisterService;
  
	constructor(req: Request, res: Response, next: NextFunction) {
		this.req = req;
		this.res = res;
		this.next = next;
		this.service = new RegisterService();
	}

	public async register() {
		try {
			const { user } = this.req.body;
			const response = await this.service.register(user);
			return this.res.status(201).json(response);
		} catch(e) {
			this.next(e);
		}
	}
}

export default RegisterController;