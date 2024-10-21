import { useState, useEffect } from "react";
import NoteInputForm from "./Components/NoteInputForm";
import NoteList from "./Components/NoteList";
import axios, { AxiosResponse } from "axios";
import { Typography } from "@mui/material";
import raiffeisenLogo from "./assets/raiffeisen.png";

interface Note {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

const API_URL: string = "http://localhost:8081/api/v1/notes";

function App() {
  const [notesData, setNotesData] = useState<Note[]>([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response: AxiosResponse<Note[]> = await axios.get<Note[]>(API_URL);
      setNotesData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const saveNote = async (title: string, content: string) => {
    try {
      const response: AxiosResponse<Note> = await axios.post<Note>(API_URL, {
        title,
        content,
      });
      setNotesData((prev) => [...prev, response.data]);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const deleteNote = async (id: number) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setNotesData((prev) => prev.filter((note) => note.id !== id));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const updateNote = async (
    id: number,
    updatedNote: { title: string; content: string }
  ) => {
    try {
      const response: AxiosResponse<Note> = await axios.put<Note>(
        `${API_URL}/${id}`,
        updatedNote
      );
      setNotesData((prev) =>
        prev.map((note) => (note.id === id ? response.data : note))
      );
    } catch (error) {
      console.error("Error updating note:", error);
    }
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
      <NoteInputForm onSubmit={saveNote} />
      <br />
      <NoteList
        notesData={notesData}
        onDelete={deleteNote}
        onUpdate={updateNote}
      />
    </div>
  );
}

export default App;
