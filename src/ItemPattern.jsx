import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./App.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const patterns = [
  "pattern-checks-sm",
  "pattern-checks-md",
  "pattern-checks-lg",
  "pattern-checks-xl",
  "pattern-grid-sm",
  "pattern-grid-md",
  "pattern-grid-lg",
  "pattern-grid-xl",
  "pattern-dots-sm",
  "pattern-dots-md",
  "pattern-dots-lg",
  "pattern-dots-xl",
  "pattern-cross-dots-sm",
  "pattern-cross-dots-md",
  "pattern-cross-dots-lg",
  "pattern-cross-dots-xl",
  "pattern-diagonal-lines-sm",
  "pattern-diagonal-lines-md",
  "pattern-diagonal-lines-lg",
  "pattern-diagonal-lines-xl",
  "pattern-horizontal-lines-sm",
  "pattern-horizontal-lines-md",
  "pattern-horizontal-lines-lg",
  "pattern-horizontal-lines-xl",
  "pattern-vertical-lines-sm",
  "pattern-vertical-lines-md",
  "pattern-vertical-lines-lg",
  "pattern-vertical-lines-xl",
  "pattern-diagonal-stripes-sm",
  "pattern-diagonal-stripes-md",
  "pattern-diagonal-stripes-lg",
  "pattern-diagonal-stripes-xl",
  "pattern-horizontal-stripes-sm",
  "pattern-horizontal-stripes-md",
  "pattern-horizontal-stripes-lg",
  "pattern-horizontal-stripes-xl",
  "pattern-vertical-stripes-sm",
  "pattern-vertical-stripes-md",
  "pattern-vertical-stripes-lg",
  "pattern-vertical-stripes-xl",
  "pattern-triangles-sm",
  "pattern-triangles-md",
  "pattern-triangles-lg",
  "pattern-triangles-xl",
  "pattern-zigzag-sm",
  "pattern-zigzag-md",
  "pattern-zigzag-lg",
  "pattern-zigzag-xl",
];

export default function ItemPattern() {
  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function getRandomPattern() {
    return patterns[Math.floor(Math.random() * patterns.length)];
  }
  return (
    <Item>
      <Card>
        <CardContent
          className={getRandomPattern()}
          style={{
            color: getRandomColor(),
            backgroundColor: getRandomColor(),
          }}
        >
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Sample
          </Typography>

          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Sample
          </Typography>

          <Button size="small" variant="contained">Learn More</Button>
        </CardContent>
      </Card>
    </Item>
  );
}
