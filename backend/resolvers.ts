import { IResolvers } from 'apollo-server-micro';
import Notes, { Note } from './notes';

interface ApolloServerContext {
  notes: Notes;
}

interface AddNoteInput {
  content: string;
}

export const resolvers: IResolvers<any, ApolloServerContext> = {
  Query: {
    notes: (parent, args, context): Note[] => {
      return context.notes.getAllNotes();
    },
  },
  Mutation: {
    addNote: (parent, args: { input: AddNoteInput }, context): Note | null => {
      const newNote = context.notes.addNote(args.input);
      return newNote;
    },
  },
};
