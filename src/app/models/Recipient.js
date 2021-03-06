import Sequelize, { Model } from "sequelize";

class Recipient extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        cpf: Sequelize.STRING,
        street: Sequelize.STRING,
        address_number: Sequelize.INTEGER,
        number_complement: Sequelize.STRING,
        state: Sequelize.STRING,
        city: Sequelize.STRING,
        zip_code: Sequelize.STRING
      },
      {
        sequelize
      }
    );

    return this;
  }
}
export default Recipient;
