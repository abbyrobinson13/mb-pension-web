import React from "react";
import { Button } from "@mui/material";

function SimpleButton({ title, handleAction }) {
  return (
    <Button variant="contained" onClick={handleAction}>
      {title}
    </Button>
  );
}

export default SimpleButton;
