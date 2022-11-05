import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useState } from "react";

import Button from "@mui/material/Button";
import "./App.css";
import ItemPattern from "./ItemPattern";

export default function BasicGrid() {
  const [list, setList] = useState([1, 2, 3, 4, 5, 6, 7]);
  //const [count, setCount] = useState(7);

  function updateGrid() {
    setList([1, 2, 3, 4, 5, 6, 7]);
    /* setCount(count + 1);
     let newList = [];
     for (let i = 0; i < count; i++) {
       newList.push(i);
     }
     setList(newList);*/
  }

  return (
    <React.Fragment>
      <Paper style={{ margin: "16px", padding :"16px" }} maxWidth="md">
          <Box align="center" sx={{ flexGrow: 1 }}>
            <Grid
              alignItems="center"
              justifyContent="center"
              container
              spacing={3}
            >
              {list.map((listItem,index) => {
                return (
                  <Grid key={index} item md={3}>
                    <ItemPattern />
                  </Grid>
                );
              })}
            </Grid>

            <Button
            style={{ margin: "20px" }}
            variant="outlined"
            onClick={updateGrid}
          >
            Reload
          </Button>
          </Box>

         
      </Paper>
    </React.Fragment>
  );
}
