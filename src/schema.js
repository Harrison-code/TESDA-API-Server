import {gql} from 'apollo-server-express';


export const schema = gql`
  type Query {
    employees: [Employee]
    companys: [Company]
    trainees: [Trainee]
    company(id: ID!): Company
    trainee(id: ID!): Trainee
  }
  
  type Mutation{
    signupTrainee(email: String!, password: String!, firstname: String!, lastname: String!): Token
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

  type Trainee{
    id: ID!
    firstname: String
    lastname: String
    email: String
    username: String
    password: String
    contact_no: Int
    address: String
    postal_code: Int
    city: String
    province: String
    createdAt: String
    updatedAt: String
    trainees: [Trainee]
  }
  
  type Token {
    token: String
  }
  
`;