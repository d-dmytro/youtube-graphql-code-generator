import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Note = {
  __typename?: 'Note';
  id: Scalars['Int'];
  content: Scalars['String'];
};

export type AddNoteInput = {
  content: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  notes: Array<Note>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addNote?: Maybe<Note>;
};


export type MutationAddNoteArgs = {
  input: AddNoteInput;
};

export type AddNoteMutationVariables = Exact<{
  input: AddNoteInput;
}>;


export type AddNoteMutation = (
  { __typename?: 'Mutation' }
  & { addNote?: Maybe<(
    { __typename?: 'Note' }
    & Pick<Note, 'id' | 'content'>
  )> }
);

export type NotesQueryVariables = Exact<{ [key: string]: never; }>;


export type NotesQuery = (
  { __typename?: 'Query' }
  & { notes: Array<(
    { __typename?: 'Note' }
    & Pick<Note, 'id' | 'content'>
  )> }
);


export const AddNoteDocument = gql`
    mutation AddNote($input: AddNoteInput!) {
  addNote(input: $input) {
    id
    content
  }
}
    `;
export type AddNoteMutationFn = Apollo.MutationFunction<AddNoteMutation, AddNoteMutationVariables>;

/**
 * __useAddNoteMutation__
 *
 * To run a mutation, you first call `useAddNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addNoteMutation, { data, loading, error }] = useAddNoteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddNoteMutation(baseOptions?: Apollo.MutationHookOptions<AddNoteMutation, AddNoteMutationVariables>) {
        return Apollo.useMutation<AddNoteMutation, AddNoteMutationVariables>(AddNoteDocument, baseOptions);
      }
export type AddNoteMutationHookResult = ReturnType<typeof useAddNoteMutation>;
export type AddNoteMutationResult = Apollo.MutationResult<AddNoteMutation>;
export type AddNoteMutationOptions = Apollo.BaseMutationOptions<AddNoteMutation, AddNoteMutationVariables>;
export const NotesDocument = gql`
    query Notes {
  notes {
    id
    content
  }
}
    `;

/**
 * __useNotesQuery__
 *
 * To run a query within a React component, call `useNotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useNotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotesQuery({
 *   variables: {
 *   },
 * });
 */
export function useNotesQuery(baseOptions?: Apollo.QueryHookOptions<NotesQuery, NotesQueryVariables>) {
        return Apollo.useQuery<NotesQuery, NotesQueryVariables>(NotesDocument, baseOptions);
      }
export function useNotesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NotesQuery, NotesQueryVariables>) {
          return Apollo.useLazyQuery<NotesQuery, NotesQueryVariables>(NotesDocument, baseOptions);
        }
export type NotesQueryHookResult = ReturnType<typeof useNotesQuery>;
export type NotesLazyQueryHookResult = ReturnType<typeof useNotesLazyQuery>;
export type NotesQueryResult = Apollo.QueryResult<NotesQuery, NotesQueryVariables>;