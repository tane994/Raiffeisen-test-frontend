import { useState } from "react";
import { TextField, Button } from "@mui/material";

const NoteInputForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div>
      <TextField
        className="text-field"
        label="Title"
        variant="outlined"
        //value={movieName}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ width: "100%", mt: 1, mb: 1, fontFamily: "Roboto" }}
        required
      />
      <TextField
        className="text-field"
        label="Content"
        variant="outlined"
        multiline
        rows={4}
        //value={review}
        onChange={(e) => setContent(e.target.value)}
        sx={{ width: "100%", mt: 1, mb: 1, fontFamily: "Baskerville" }}
        required
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 2, width: "100%" }}
      >
        Save Note
      </Button>
    </div>
  );
};

export default NoteInputForm;
