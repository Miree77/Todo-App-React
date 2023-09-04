import React, { useState } from "react";
import "./App.css";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import { Container, List, Paper } from "@mui/material";

function App() {
  const [items, setItems] = useState([]);

  const deleteItem = (item) => {
    const newItems = items.filter((e) => e.id !== item.id);
    setItems([...newItems]);
  };

  const addItem = (item) => {
    item.id = "ID-" + items.length;
    item.done = false;

    //setItems([...items, item]);
    console.log(items);
    setItems((prev) => [...prev, item]);

    console.log(items);
    //console.log(item);
  };

  const editItem = () => {
    setItems([...items]);
  };

  let todoItems = items.length > 0 && (
    <Paper style={{ margin: 16 }}>
      <List>
        {items.map((item) => (
          <Todo
            item={item}
            key={item.id}
            deleteItem={deleteItem}
            editItem={editItem}
          />
        ))}
      </List>
    </Paper>
  );

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
