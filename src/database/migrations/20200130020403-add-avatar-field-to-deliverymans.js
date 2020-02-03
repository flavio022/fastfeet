"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Deliverymans", "avatar_id", {
      type: Sequelize.INTEGER,
      references: {
        model: "Files",
        key: "id",
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        allowNull: true
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn("Deliverymans", "avatar_id");
  }
};
