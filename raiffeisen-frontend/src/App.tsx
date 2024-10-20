import { useState, useEffect } from "react";
import NoteInputForm from "./Components/NoteInputForm";
import NoteList from "./Components/NoteList";
import axios from "axios";
import { Typography } from "@mui/material";
import raiffeisenLogo from "./assets/raiffeisen.png";

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
      <NoteInputForm />
      <br />
      <NoteList notesData={notesData} />
    </div>
  );
}

export default App;
