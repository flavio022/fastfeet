import Sequelize, { Model } from "sequelize";

class Orders extends Model {
  static init(sequelize) {
    super.init(
      {
        product: Sequelize.STRING,
        start_date: Sequelize.DATE,
        canceledAt: Sequelize.DATE
      },
      {
        sequelize
      }
    );

    return this;
  }
  static associate(models) {
    this.belongsTo(models.Recipient, {
      foreignKey: "recipient_id",
      as: "recipient"
    });
    this.belongsTo(models.Deliverymans, {
      foreignKey: "deliveryman_id",
      as: "deliveryman"
    });
    this.belongsTo(models.File, {
      foreignKey: "signature_id",
      as: "signature"
    });
  }
}
export default Orders;
