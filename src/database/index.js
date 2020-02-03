import Sequelize from "sequelize";
import DatabaseConfig from "../config/database";
import User from "../app/models/User";
import Recipient from "../app/models/Recipient";
import Delivery from "../app/models/Deliveryman";
import DeliverymanFile from "../app/models/DeliverymanFile";
import File from "../app/models/File";
const models = [User, Recipient, File, Delivery, DeliverymanFile];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(DatabaseConfig);
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}
export default new Database();
