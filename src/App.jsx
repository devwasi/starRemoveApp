import { useState } from "react";
import "./App.css";
import { Button, Stack, TextField, Typography } from "@mui/material";

function App() {
  const [text, setText] = useState("");
  const [editedText, setEditedText] = useState("");
  console.log(text);

  const removeStar = () => {
    const a = text.replaceAll("°", "");
    setEditedText(a);
  };

  const clearHandler = () => {
    setEditedText("");
  };

  return (
    <>
      <Stack
        sx={{
          boxShadow: "0 0 5px ",
          width: 450,
          padding: 5,
          borderRadius: 2,
          gap: 2,
          bgcolor: "whitesmoke",
        }}
      >
        <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Stack>
            <TextField
              label="Remove * from message"
              multiline
              rows={8}
              variant="standard"
              placeholder="enter your text / message"
              onChange={(e) => setText(e.target.value)}
            />
          </Stack>
          <Stack>
            <Typography sx={{ color: "black" }} variant="h6">
              Result
            </Typography>
            <TextField
              label=""
              multiline
              rows={8}
              defaultValue={editedText}
              variant="standard"
            />
          </Stack>
        </Stack>
        <Stack>
          <Button variant="contained" onClick={() => removeStar()}>
            Remove *
          </Button>
          <Button sx={{ mt: 2 }} variant="contained" onClick={clearHandler}>
            Clear
          </Button>
        </Stack>
      </Stack>
    </>
  );
}

export default App;
