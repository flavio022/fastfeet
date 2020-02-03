import Sequelize from "sequelize";
import DatabaseConfig from "../config/database";
import User from "../app/models/User";
import Recipient from "../app/models/Recipient";
import Delivery from "../app/models/Deliveryman";
import File from "../app/models/File";
const models = [User, Recipient, File, Delivery];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(DatabaseConfig);
    models.map(model => model.init(this.connection));
  }
}
export default new Database();
