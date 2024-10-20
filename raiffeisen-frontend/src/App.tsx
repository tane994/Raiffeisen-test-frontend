import { useState, useEffect } from "react";
import NoteInputForm from "./Components/NoteInputForm";
import NoteList from "./Components/NoteList";
import axios from "axios";
import { Typography } from "@mui/material";

function App() {
  const [notesData, setNotesData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8081/api/v1/notes")
      .then((response) => {
        setNotesData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
      });
  }, []);

  return (
    <div>
      <Typography variant="h2">Raiffeisen Note App</Typography>
      <NoteInputForm />
      <br />
      <NoteList notesData={notesData} />
    </div>
  );
}

export default App;
