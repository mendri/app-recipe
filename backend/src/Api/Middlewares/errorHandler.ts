import { NextFunction, Request, Response } from "express";
import IError from "../../Interfaces/IError";

const errorHandler = (error: IError, _req: Request, res: Response, next: NextFunction) => {
	const status = error.status || 500;
	const errorMessage = error.message || "Deu Erru, mas num sei o ki é n";

	res.status(status).json({ errorMessage });

	next();
};

export default errorHandler;