import React from "react";
// import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Answer = (props) => {
  return (
    <Button
      variant="contained"
      onClick={() => props.select(props.content, props.nextId)}
    >
      {props.content}
    </Button>
  );
};

export default Answer;
