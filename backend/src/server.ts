import "dotenv/config";
import app from "./app";
import connectToDatabase from "./Models/connection";

const URI = process.env.MONGO_DB_URI;

connectToDatabase(URI || "mongodb://root:123456@dmongodb:27017/").then(
	() => {
		app.listen(3001, () => {
			console.log("Runing at port 3001");
		});
	}
).catch((error) => {
	console.log("Connection with database generated an error:\r\n");
	console.error(error);
	console.log("\r\nServer initialization cancelled");
	process.exit(0);
});