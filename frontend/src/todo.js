import React, { useState } from "react";
import * as Style from './style';

const Todo = ({ todo, completeItem, deleteItem }) => {
  const [showButton, setShowButton] = useState(false);
  return (
    <Style.TodoItem
      onMouseOver={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
      onFocus={() => 0}>

      <Style.ItemText todo={todo}>{todo.text}</Style.ItemText>
      <Style.ItemCompleteTime todo={todo}>{todo.completeTime}</Style.ItemCompleteTime>

      {showButton && (
        <Style.ButtonArea todo={todo}>
          <Style.ItemButton
            todo={todo}
            type="submit"
            onClick={() => completeItem(todo.id)}
          >Mark as done
          </Style.ItemButton>
          <Style.ItemButton
            todo={todo}
            type="submit"
            onClick={() => deleteItem(todo.id)}
          >Delete
          </Style.ItemButton>
        </Style.ButtonArea>
      )}
    </Style.TodoItem>
  );
};

export default Todo;
