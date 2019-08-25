
import { gql } from 'apollo-server-express';


export const schema = gql`
  type Query {
    employees: [Employee]
    
    companys: [Company]
    company(id: ID!): Company
  }

  type Employee {
    id: ID!
    name: String
    companyId: Int
    createdAt: String
    updatedAt: String
    company: Company
  }

  type Company{
    id: ID!
    name: String
    createdAt: String
    updatedAt: String
    employees: [Employee]
  },
`;