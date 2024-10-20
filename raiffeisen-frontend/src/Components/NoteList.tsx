import React from "react";
import {
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const NoteList = ({ notesData }) => {
  return (
    <div>
      <Typography variant="h3">List of notes:</Typography>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Content</TableCell>
              <TableCell align="center">Created</TableCell>
              <TableCell align="center">Updated</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {notesData.map((note) => (
              <TableRow
                key={note.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{note.title}</TableCell>
                <TableCell align="left">{note.content}</TableCell>
                <TableCell align="left">{note.createdAt}</TableCell>
                <TableCell align="left">{note.updateAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default NoteList;
