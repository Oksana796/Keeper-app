import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "./notes";

function createNotes(note) {
  return <Note key={note.key} title={note.title} content={note.content} />;
}

export default function App() {
  return (
    <div>
      <Header />
      {notes.map(createNotes)}
      <Footer />
    </div>
  );
}