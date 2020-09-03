export interface Note {
  id: number;
  content: string;
}

export interface AddNoteInput {
  content: string;
}

class Notes {
  id: number = 1;
  notes: Note[] = [];

  getAllNotes() {
    return this.notes;
  }

  addNote(noteInput: AddNoteInput) {
    const newNote = { id: this.id++, ...noteInput };
    this.notes.push(newNote);
    return newNote;
  }
}

export default Notes;
