import React from 'react';
import * as TodoActStyle from "./TodoActStyle";

const TodoAct = (props) => {
    const {item, deleteTodo, doneTodo} = props;
    const {id, title, doneTime} = item;
    return (
      <TodoActStyle.Item>
        {
            !doneTime
            ? (
              <TodoActStyle.ListRow>
                {title}
                <TodoActStyle.ReviseBox>
                  <button type="submit" className="reviseRow" onClick={() => { doneTodo(id); }}>Mark as done</button>
                  <button type="submit" className="reviseRow" onClick={() => { deleteTodo(id); }}>Delete</button>
                </TodoActStyle.ReviseBox>
              </TodoActStyle.ListRow>
            ) : (
              <TodoActStyle.ListRow>
                <TodoActStyle.TextDelete>
                  {title}
                </TodoActStyle.TextDelete>
                <TodoActStyle.DoneTimeBox>
                    完成時間: {doneTime}
                </TodoActStyle.DoneTimeBox>
              </TodoActStyle.ListRow>
            )
          }
      </TodoActStyle.Item>
    );
};

export default TodoAct;
