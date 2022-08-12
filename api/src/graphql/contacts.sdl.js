export const schema = gql`
  type Contact {
    id: Int!
    firstName: String!
    secondName: String!
    email: String!
    subject: String!
    message: String!
    createdAt: DateTime!
  }

  type Query {
    contacts: [Contact!]! @requireAuth
    contact(id: Int!): Contact @requireAuth
  }

  input CreateContactInput {
    firstName: String!
    secondName: String!
    email: String!
    subject: String!
    message: String!
  }

  input UpdateContactInput {
    firstName: String
    secondName: String
    email: String
    subject: String
    message: String
  }

  type Mutation {
    createContact(input: CreateContactInput!): Contact! @requireAuth
    updateContact(id: Int!, input: UpdateContactInput!): Contact! @requireAuth
    deleteContact(id: Int!): Contact! @requireAuth
  }
`
