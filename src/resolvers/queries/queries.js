import { EmployeeModel } from '../../models/EmployeeModel'
import { CompanyModel } from '../../models/CompanyModel'
import { TraineeModel } from '../../models/TraineeModel'

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

export const findAllTrainee = async () => {
    // Find all employees
    const trainee = await TraineeModel.findAll({ raw: true });
    return trainee
}

export const findByTraineeId = async (id) => {
    // Find all trainee
    const trainee = await TraineeModel.findByPk(id,{ raw: true });
    return trainee
}


export const findByCompanyId = async (id) => {
    // Find all employees
    const company = await CompanyModel.findByPk(id,{ raw: true });
    return company
}


