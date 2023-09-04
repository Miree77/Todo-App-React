import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

const AddTodo = (props) => {
  // 사용자의 입력을 저장할 오브젝트
  const [item, setItem] = useState({ title: "" });
  const addItem = props.addItem;

  const onInputChange = (e) => {
    //setItem({ title: e.target.value });

    //console.log(item);
    setItem((prevState) => ({
      ...prevState,
      title: e.target.value,
    }));
    //console.log(item);
  };

  const onButtonClick = () => {
    addItem(item);
    //console.log(item);
  };

  const enterKeyEventHandler = (e) => {
    if (e.key === "Enter") {
      onButtonClick();
    }
  };

  return (
    <Grid container style={{ marginTop: 20 }}>
      <Grid cs={11} item style={{ paddingRight: 16 }}>
        <TextField
          placeholder="Add Todo here"
          fullWidth
          onChange={onInputChange}
          value={item.title}
          onKeyDown={enterKeyEventHandler}
        ></TextField>
      </Grid>
      <Grid xs={1} md={1} item>
        <Button
          fullwidth
          style={{ height: "100%" }}
          color="secondary"
          variant="outlined"
          onClick={onButtonClick}
        >
          +
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddTodo;
