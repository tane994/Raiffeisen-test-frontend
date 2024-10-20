import { useState } from "react";
import { TextField, Button } from "@mui/material";

const NoteInputForm = ({ handleNoteSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    handleNoteSubmit({ title, content });
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
        onClick={handleSubmit}
      >
        Save Note
      </Button>
    </div>
  );
};

export default NoteInputForm;
