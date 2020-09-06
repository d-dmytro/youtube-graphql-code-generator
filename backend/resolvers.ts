import Notes from './notes';
import { Resolvers } from '../generated/graphql-backend';

interface ApolloServerContext {
  notes: Notes;
}

export const resolvers: Resolvers<ApolloServerContext> = {
  Query: {
    notes: (parent, args, context) => {
      return context.notes.getAllNotes();
    },
  },
  Mutation: {
    addNote: (parent, args, context) => {
      const newNote = context.notes.addNote(args.input);
      return newNote;
    },
  },
};
