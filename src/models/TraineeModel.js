
import Sequelize from 'sequelize';

import { db } from '../config/db';

db.define('trainee', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'id'
  },
  firstname: {
    type: Sequelize.STRING(255),
    allowNull: true,
    field: 'firstname'
  },
  lastname: {
    type: Sequelize.STRING(255),
    allowNull: true,
    field: 'lastname'
  },
  email: {
    type: Sequelize.STRING(255),
    allowNull: true,
    field: 'email'
  },
  username: {
    type: Sequelize.STRING(255),
    allowNull: true,
    field: 'username'
  },
  password: {
    type: Sequelize.STRING(255),
    allowNull: true,
    field: 'password'
  },
  contact_no: {
    type: Sequelize.INTEGER(11),
    allowNull: true,
    field: 'contact_no'
  },
  address: {
    type: Sequelize.STRING(255),
    allowNull: true,
    field: 'address'
  },
  postal_code: {
    type: Sequelize.INTEGER(4),
    allowNull: true,
    field: 'postal_code'
  },
  city: {
    type: Sequelize.STRING(255),
    allowNull: true,
    field: 'city'
  },
  province: {
    type: Sequelize.STRING(255),
    allowNull: true,
    field: 'province'
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
    field: 'createdAt'
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false,
    field: 'updatedAt'
  }
}, {
    tableName: 'trainee'
  });
const TraineeModel = db.models.trainee;
export { TraineeModel };