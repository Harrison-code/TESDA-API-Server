
import {findAllCompanys, findAllEmployees, findAllTrainee, findByCompanyId, findByTraineeId} from "./resolvers/queries/queries";
import {employeeRelationship} from "./resolvers/relationships/employee_relationship";
import {companyRelationship} from "./resolvers/relationships/company_relationship";
import {traineeRelationship} from "./resolvers/relationships/trainee_relationship";
import {createTrainee} from "./resolvers/mutations";

const jwt = require('jsonwebtoken')

const createToken = async (user, secret, expiresIn) => {
	const {email} = user;
	return jwt.sign({email}, secret, {expiresIn})
}


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
        trainee: async (root, args) => {
            return await findByTraineeId(args.id);
        },
	},
	Mutation: {
		signupTrainee: async (root, args) => {
			const trainee = await createTrainee(args);
			const token = await createToken(trainee, "TESDASECRET", '1hr');
			return {token}
		}
	},
	Employee: employeeRelationship(),
	Company: companyRelationship(),


};