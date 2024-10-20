import { useState, useEffect } from "react";
import NoteInputForm from "./Components/NoteInputForm";
import NoteList from "./Components/NoteList";
import axios from "axios";
import { Typography } from "@mui/material";
import raiffeisenLogo from "./assets/raiffeisen.png";

function App() {
  interface Note {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
  }

  const [notesData, setNotesData] = useState<Note[]>([]);
  const [error, setError] = useState<string | null>(null);
  const API_URL: string = "http://localhost:8081/api/v1/notes";

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setNotesData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
      });
  }, []);

  const saveNote = ({ title, content }) => {
    axios
      .post(API_URL, { title, content })
      .then((response) => {
        setNotesData((prev) => [...prev, { title, content }]);
      })
      .catch((error) => {
        console.error("Error posting data:", error);
        setError(
          error.response?.data?.message ||
            "Failed to save note. Please try again."
        );
      });
  };

  const deleteNote = (id: number) => {
    axios
      .delete(`${API_URL}/${id}`)
      .then(() => {
        setNotesData((prev) => prev.filter((note) => note.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting note:", error);
        setError(
          error.response?.data?.message ||
            "Failed to delete note. Please try again."
        );
      });
  };

  const updateNote = (
    id: number,
    updatedNote: { title: string; content: string }
  ) => {
    axios
      .put(`${API_URL}/${id}`, updatedNote)
      .then((response) => {
        setNotesData((prev) =>
          prev.map((note) => (note.id === id ? response.data : note))
        );
      })
      .catch((error) => {
        console.error("Error updating note:", error);
        setError(
          error.response?.data?.message ||
            "Failed to update note. Please try again."
        );
      });
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <img
          src={raiffeisenLogo}
          alt="Raiffeisen Logo"
          style={{ width: 50, height: "auto", marginRight: "10px" }}
        />
        <Typography variant="h2">Raiffeisen Note App</Typography>
      </div>
      <NoteInputForm handleNoteSubmit={saveNote} />
      <br />
      <NoteList
        notesData={notesData}
        onDeleteNote={deleteNote}
        onUpdateNote={updateNote}
      />
    </div>
  );
}

export default App;
