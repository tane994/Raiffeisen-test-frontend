import { useState } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";

const NoteInputForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const saveNote = () => {
    axios.post("http://localhost:8081/api/v1/notes", {
      title: title,
      content: content,
    })
      .then((response: AxiosResponse) => {
        setNotesData((prev) => [
          ...prev,
          {
            title: title,
            content: content,
          },
        ]);
      })
      .catch((error) => console.error("Error posting data:", error)); 
  };
  

  return (
    <div>
      <TextField
        className="text-field"
        label="Title"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ width: "100%", mt: 1, mb: 1 }}
        required
      />
      <TextField
        className="text-field"
        label="Content"
        variant="outlined"
        multiline
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        sx={{ width: "100%", mt: 1, mb: 1 }}
        required
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 2, width: "100%" }}
        onSubmit={saveNote}
      >
        Save Note
      </Button>
    </div>
  );
};

export default NoteInputForm;
