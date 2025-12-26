'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        primaryKey: true, //Unique identifier for each user
        allowNull: false, //ID cannot be null
        type: Sequelize.UUID, //Using UUID for unique user identification
        defaultValue: Sequelize.UUIDV4, //Automatically generate UUIDs
      },
      name: {
        type: Sequelize.STRING, //User's full name
        allowNull: false, //Name cannot be null
      },
      email: {
        type: Sequelize.STRING, //User's email
        allowNull: false, //Email cannot be null
        unique: true, //Email must be unique
      },
      passowrd_hash: {
        type: Sequelize.STRING, //Hashed password for security
        allowNull: false, //Every user must have a password
      },
      admin: {
        type: Sequelize.BOOLEAN, //User is an admin or not
        defaultValue: false, //All users are non-admin by default
      },
      created_at: {
        type: Sequelize.DATE, //Time of user creation
        allowNull: false, //Creation time cannot be null
      },
      updated_at: {
        type: Sequelize.DATE, //Time of last update
        allowNull: false, //Update time cannot be null
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('users');
  },
};
