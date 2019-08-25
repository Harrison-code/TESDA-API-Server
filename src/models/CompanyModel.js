
import Sequelize from 'sequelize';

import { db } from '../config/db';

db.define('company', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'id'
  },
  name: {
    type: Sequelize.STRING(255),
    allowNull: true,
    field: 'name'
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
    tableName: 'company'
  });
const CompanyModel = db.models.company;
export { CompanyModel };