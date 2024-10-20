import React from "react";
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
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const NoteList = ({ notesData }) => {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
          <Typography variant="h4">List of Notes</Typography>
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
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default NoteList;
