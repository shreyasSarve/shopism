import { connect } from "mongoose";
import { MONGO_DB_URL } from "./env_variables";
const mongoDbUrl = MONGO_DB_URL;

const connectToMongo = async () => {
  connect(mongoDbUrl, () => console.log("Connected to Local MongoDB"));
};
export default connectToMongo;
