import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import styles from '../styles/AddNoteForm.module.css';

const AddNoteDocument = gql`
  mutation AddNote($input: AddNoteInput!) {
    addNote(input: $input) {
      id
      content
    }
  }
`;

const AddNoteForm: React.FC<{ onSuccess: () => void }> = ({ onSuccess }) => {
  const [content, setContent] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const [addNote, { loading }] = useMutation(AddNoteDocument);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addNote({ variables: { input: { content } } });
      setContent('');
      onSuccess();
    } catch (e) {
      // Maybe, log the error.
      alert('An error occurred, please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        className={styles.contentTextarea}
        value={content}
        onChange={handleChange}
      />
      <button type="submit" className={styles.button} disabled={loading}>
        Add Note
      </button>
    </form>
  );
};

export default AddNoteForm;
