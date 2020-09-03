import { ApolloServer } from 'apollo-server-micro';
import { schema } from '../../backend/schema';
import Notes from '../../backend/notes';

const notes = new Notes();

// Add a few notes to have something to render.
notes.addNote({
  content: `
  Shopping list:
  Milk
  Bread
  Honey
`,
});
notes.addNote({
  content: `
  Todo for today:
  Run 2 miles
  Record a YouTube video
`,
});

const apolloServer = new ApolloServer({ schema, context: { notes } });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
