import { useState } from "react";
import "./App.css";
import { Button, Stack, TextField, Typography } from "@mui/material";

function App() {
  const [text, setText] = useState("");
  const [editedText, setEditedText] = useState("");

  const removeStar = () => {
    const a = text.replaceAll("*", "");
    setEditedText(a);

  };

  const clearHandler = () => {
    setEditedText("");
    setText("")
  };
  const copyHandler = () => {
    navigator.clipboard.writeText(editedText)
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
          <Stack >
            <TextField
              label=""
              multiline
              rows={8}
              value={text}
              variant="standard"
              placeholder="enter your text / message"
              onChange={(e) => setText(e.target.value)}
              />
          </Stack>
          <Stack sx={{borderRadius:2,}}>
            <TextField
              label=""
              multiline
              contentEditable={false}
              rows={8}
              value={editedText}
              variant="standard"
            />
          </Stack>
            <Button sx={{position: "static", bottom: 2}} onClick={copyHandler}>copy</Button>
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
