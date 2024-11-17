'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('RBA_User',{
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: true,
          unique: true,
        },
        username: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        role: {
          type: Sequelize.UUID,
          allowNull:true
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
      });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('RBA_User');
  }
};
