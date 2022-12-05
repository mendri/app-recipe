import { connect } from "mongoose";

const connectToDatabase = (mongoDatabaseURI: string) => connect(mongoDatabaseURI);

export default connectToDatabase;