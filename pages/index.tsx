import Head from 'next/head';
import styles from '../styles/Home.module.css';
import AddNoteForm from '../components/AddNoteForm';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Notes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>My Notes</h1>
      <ul className={styles.notes}>
        <li>Shopping list: Milk, bread, and Honey</li>
        <li>Todo for today: Run 2 kilometers and record a YouTube video</li>
      </ul>
      <AddNoteForm />
    </div>
  );
}
