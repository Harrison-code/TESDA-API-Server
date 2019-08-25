import { findByCompanyId, findAllEmployees } from "../queries/queries";

export const companyRelationship = () => ({
    async employees(company) {
        console.log(company)
        const { id } = company
        const employees = await findAllEmployees()
        const filteredEmployees = employees.filter(employee => employee.companyId = id)
        return filteredEmployees;
    },
});