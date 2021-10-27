import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const urltogetData = "https://gorest.co.in/public/v1/posts";

function Posts() {
  const [state, setState] = useState({
    userData: [],
    loading: false,
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await axios.get(urltogetData);
    console.log(response);
    setState({ ...state, userData: response.data.data });
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>A basic table example with a caption</caption>
        <TableHead>
          <TableRow>
            <TableCell align="right">User_id</TableCell>
            <TableCell align="right">Id</TableCell>

            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Body</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.userData.map((row) => (
            <TableRow>
              <TableCell align="right">{row.user_id}</TableCell>
              <TableCell align="right">{row.id}</TableCell>

              <TableCell align="right">{row.title}</TableCell>
              
              <TableCell align="right">{row.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Posts;
