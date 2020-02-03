module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("Deliverymans", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        timestamps: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        timestamps: false
      }
    }),

  down: queryInterface => queryInterface.dropTable("Deliverymans")
};
