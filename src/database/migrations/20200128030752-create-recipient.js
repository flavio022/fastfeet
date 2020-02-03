module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("Recipients", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      street: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address_number: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      number_complement: {
        type: Sequelize.STRING,
        allowNull: true
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false
      },
      zip_code: {
        type: Sequelize.STRING,
        allowNull: false
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

  down: queryInterface => queryInterface.dropTable("Recipients")
};
