import "dotenv/config";
import jwt from "jsonwebtoken";

export function generateToken(email: string, name: string) {
	const token = jwt.sign({ payload: email, name }, process.env.SECRET_KEY as string);
	return token;
}