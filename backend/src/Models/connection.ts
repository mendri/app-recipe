import { connect } from "mongoose";

const MONGO_DB_URL = "mongodb://mongodb:27017/AppRecipe";

const connectToDatabase = (
	mongoDatabaseURI = MONGO_DB_URL
) => connect(mongoDatabaseURI);

export default connectToDatabase;