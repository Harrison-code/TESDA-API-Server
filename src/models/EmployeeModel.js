
import Sequelize from 'sequelize';

import { db } from '../config/db';

db.define('employee', {
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
  },
  companyId: {
    type: Sequelize.INTEGER(11),
    allowNull: true,
    references: {
      model: 'company',
      key: 'id'
    },
    field: 'companyId'
  }
}, {
    tableName: 'employee'
  });
const EmployeeModel = db.models.employee;
export { EmployeeModel };

