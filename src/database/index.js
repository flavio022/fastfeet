import Sequelize from "sequelize";
import DatabaseConfig from "../config/database";
import User from "../app/models/User";
import Recipient from "../app/models/Recipient";
import Deliveryman from "../app/models/Deliveryman";
import DeliverymanFile from "../app/models/DeliverymanFile";
import File from "../app/models/File";
import Orders from "../app/models/Orders";
import mongoose from "mongoose";
const models = [User, Recipient, File, Deliveryman, DeliverymanFile, Orders];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(DatabaseConfig);
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
  mongo() {
    this.mongoConnection = mongoose.connect(
      "mongodb://localhost:27017/fastfeet",
      { useNewUrlParser: true, useFindAndModify: true }
    );
  }
}
export default new Database();
