import React, { useState } from "react";
import "./App.css";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import { Container, List, Paper } from "@mui/material";

function App() {
  const [items, setItems] = useState([
    {
      id: "0",
      title: "Hello World 1",
      done: true,
    },
    {
      id: "1",
      title: "Hello World 2",
      done: false,
    },
  ]);

  let todoItems = items.length > 0 && (
    <Paper style={{ margin: 16 }}>
      <List>
        {items.map((item) => (
          <Todo item={item} key={item.id} />
        ))}
      </List>
    </Paper>
  );

  const addItem = (item) => {
    item.id = "ID-" + items.length;
    item.done = false;

    setItems([...items, item]);
    console.log("items:" + items);
  };

  return (
    <div className="App">
      <Container maxWidth="md">
        <AddTodo addItem={addItem} />
        <div className="TodoList">{todoItems}</div>
      </Container>
    </div>
  );
}

export default App;
