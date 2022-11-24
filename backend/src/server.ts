import app from "./app";
import connectToDatabase from "./Models/connection";

connectToDatabase().then(
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