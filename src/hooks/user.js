import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const urltogetData = "https://gorest.co.in/public/v1/users";

function User() {
  const [state,setState] = useState({
      userData:[],
      loading:false
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await axios.get(urltogetData);
    console.log(response);
    setState(
        {...state,userData:response.data.data}
    )
  };



//   return <div className="form-component">{
//       state.userData.map(item=>(<div>
//           {item.name}
//           </div>))
//   }</div>;
return (
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>A basic table example with a caption</caption>
        <TableHead>
          <TableRow>
           
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Id</TableCell>
            
            <TableCell align="right">Email</TableCell>
            <TableCell align ="right">Gender</TableCell>
            <TableCell align="right">status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.userData.map((row) => (
            <TableRow >
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.id}</TableCell>
              
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export default User;