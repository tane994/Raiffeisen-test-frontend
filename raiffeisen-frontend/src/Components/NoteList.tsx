import { useState } from "react";
import {
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  IconButton,
  TextField,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";

interface Note {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

interface NoteListProps {
  notesData: Note[];
  onDelete: (id: number) => void;
  onUpdate: (
    id: number,
    updatedNote: { title: string; content: string }
  ) => void;
}

const NoteList = ({ notesData, onDelete, onUpdate }: NoteListProps) => {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedTitle, setEditedTitle] = useState<string>("");
  const [editedContent, setEditedContent] = useState<string>("");

  const handleEdit = (note: Note) => {
    setEditingId(note.id);
    setEditedTitle(note.title);
    setEditedContent(note.content);
  };

  const handleSave = (id: number) => {
    onUpdate(id, { title: editedTitle, content: editedContent });
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  const handleDelete = (id: number) => {
    onDelete(id);
  };

  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <Typography variant="h4">List of Notes</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Title</TableCell>
                  <TableCell align="center">Content</TableCell>
                  <TableCell align="center">Created</TableCell>
                  <TableCell align="center">Updated</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {notesData.map((note) => (
                  <TableRow
                    key={note.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">
                      {editingId === note.id ? (
                        <TextField
                          value={editedTitle}
                          onChange={(e) => setEditedTitle(e.target.value)}
                        />
                      ) : (
                        note.title
                      )}
                    </TableCell>
                    <TableCell align="left">
                      {editingId === note.id ? (
                        <TextField
                          value={editedContent}
                          onChange={(e) => setEditedContent(e.target.value)}
                        />
                      ) : (
                        note.content
                      )}
                    </TableCell>
                    <TableCell align="left">{note.createdAt}</TableCell>
                    <TableCell align="left">{note.updatedAt}</TableCell>
                    <TableCell align="center">
                      {editingId === note.id ? (
                        <>
                          <IconButton onClick={() => handleSave(note.id)}>
                            <SaveIcon />
                          </IconButton>
                          <IconButton onClick={handleCancel}>
                            <CancelIcon />
                          </IconButton>
                        </>
                      ) : (
                        <>
                          <IconButton onClick={() => handleEdit(note)}>
                            <EditIcon />
                          </IconButton>
                          <IconButton onClick={() => handleDelete(note.id)}>
                            <DeleteIcon />
                          </IconButton>
                        </>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default NoteList;
