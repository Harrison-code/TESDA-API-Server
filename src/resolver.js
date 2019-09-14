import { findAllEmployees, findAllCompanys, findByCompanyId, findAllTrainee } from "./resolvers/queries/queries";
import { employeeRelationship } from "./resolvers/relationships/employee_relationship";
import { companyRelationship } from "./resolvers/relationships/company_relationship";
import { traineeRelationship } from "./resolvers/relationships/trainee_relationship";


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
        trainees: async () => {
            return await findAllTrainee();
        },
    },
    Employee: employeeRelationship(),
    Company: companyRelationship(),
   
};