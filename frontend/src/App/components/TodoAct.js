import React from 'react';
import * as TodoActStyle from "./TodoActStyle";

const TodoAct = (props) => {
  const { item, deleteTodo, doneTodo, doneChecked} = props;
  const { id, title, doneTime } = item;

  return (
    <TodoActStyle.Item>
      <TodoActStyle.ListRow style={{...(!doneChecked && doneTime ? { display: 'none' } : {}) }}>
        <div style={{ ...(doneTime ? { textDecoration: 'line-through' } : {}) }}>
          {title}
        </div>
        {
          !doneTime
            ? (
              <TodoActStyle.ReviseBox>
                <button button type="submit" className="reviseRow" onClick={() => { doneTodo(id); }}>Mark as done</button>
                <button type="submit" className="reviseRow" onClick={() => { deleteTodo(id); }}>Delete</button>
              </TodoActStyle.ReviseBox>
            ) : (
              <TodoActStyle.DoneTimeBox>
                完成時間: {doneTime}
              </TodoActStyle.DoneTimeBox>
            )
        }
      </TodoActStyle.ListRow>
    </TodoActStyle.Item>
  );
};

export default TodoAct;
