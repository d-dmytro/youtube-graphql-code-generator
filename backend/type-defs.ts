import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Note {
    id: Int!
    content: String!
  }

  input AddNoteInput {
    content: String!
  }

  type Query {
    notes: [Note!]!
  }

  type Mutation {
    addNote(input: AddNoteInput!): Note
  }
`;
