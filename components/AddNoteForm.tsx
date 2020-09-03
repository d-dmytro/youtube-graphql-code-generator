import React, { useState } from 'react';
import styles from '../styles/AddNoteForm.module.css';

const AddNoteForm = () => {
  const [content, setContent] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        className={styles.contentTextarea}
        value={content}
        onChange={handleChange}
      />
      <button type="submit" className={styles.button}>
        Add Note
      </button>
    </form>
  );
};

export default AddNoteForm;
