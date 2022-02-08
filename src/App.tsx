import * as C from "./App.styles";
import * as React from "react";
import { useState } from "react";

// Types
import { ListItemType } from "./types/ListItemType";

// Components
import AddArea from "./components/AddArea";
import ListItem from "./components/ListItem";

const App = () => {
  const [list, setList] = useState<ListItemType[]>([
    {
      id: 1,
      name: "Comprar pão",
      done: false,
    },
    {
      id: 2,
      name: "Comprar mel",
      done: true,
    },
  ]);

  const handleAddTask = (taskName: string) => {
    setList((prevArr) => [
      ...prevArr,
      {
        id: Math.random(),
        name: taskName,
        done: false,
      },
    ]);
  };

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    
    newList.forEach(item => item.id === id ? item.done = done : item.done)

    setList(newList);
  }

  const handleTaskRemove = (id:number) => {
    let newList = [...list]
    const index = newList.findIndex(item => item.id === id)
    newList.splice(index,1)

    setList(newList)
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>To-do List</C.Header>

        {/* Adicionar nova tarefa */}
        <AddArea onAdd={handleAddTask} />

        {/* Lista de tarefas */}
        {list.map((item, index) => (
          <ListItem onRemove={handleTaskRemove} onChange={handleTaskChange} key={index} item={item} />
        ))}
      </C.Area>
    </C.Container>
  );
};

export default App;
