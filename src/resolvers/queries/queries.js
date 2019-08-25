import { EmployeeModel } from '../../models/EmployeeModel'
import { CompanyModel } from '../../models/CompanyModel'

export const findAllEmployees = async () => {
    // Find all employees
    const employees = await EmployeeModel.findAll({ raw: true });
    return employees
}

export const findAllCompanys = async () => {
    // Find all employees
    const company = await CompanyModel.findAll({ raw: true });
    return company
}

export const findByCompanyId = async (id) => {
    // Find all employees
    const company = await CompanyModel.findByPk(id,{ raw: true });
    return company
}


