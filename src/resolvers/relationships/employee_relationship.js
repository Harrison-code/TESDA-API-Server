import { findByCompanyId } from "../queries/queries";


export const employeeRelationship = () => ({
    async company(employee) {
        console.log(employee)
        const { companyId } = employee
        const company = await findByCompanyId(companyId)
        return company;
    },
});