import React from "react";
import { ListItemType } from "../../types/ListItemType";
import * as C from "./style";

type ListItemPrpos = {
  item: ListItemType;
  onChange: (id: number, done:boolean) => void;
  onRemove: (id:number) => void
};



const ListItem = ({ item, onChange, onRemove }: ListItemPrpos) => {

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked
    const id = item.id
    onChange(id, value)
  }

  const handleRemove = () => {
    onRemove(item.id)
  }

  return (
    <C.Container done={item.done}>
      <input type="checkbox" checked={item.done} onChange={handleCheck}/>
      <label htmlFor="">{item.name}</label>
      <button onClick={handleRemove}>Remover</button>
    </C.Container>
  );
};

export default ListItem;
