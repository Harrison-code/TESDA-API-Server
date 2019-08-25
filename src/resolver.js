import { findAllEmployees, findAllCompanys, findByCompanyId } from "./resolvers/queries/queries";
import { employeeRelationship } from "./resolvers/relationships/employee_relationship";
import { companyRelationship } from "./resolvers/relationships/company_relationship";


export const resolvers = {
    Query: {
        employees: async () => {
            return await findAllEmployees();
        },
        companys: async () => {
            return await findAllCompanys();
        },
        company: async (root, args) => {
            return await findByCompanyId(args.id);
        },
    },
    Employee: employeeRelationship(),
    Company: companyRelationship()
};