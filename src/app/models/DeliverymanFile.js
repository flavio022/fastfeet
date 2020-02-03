import Sequelize, { Model } from "sequelize";

class DeliverymanFile extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://localhost:3332/deliverymanFile/${this.path}`;
          }
        }
      },
      {
        sequelize
      }
    );

    return this;
  }
}
export default DeliverymanFile;
