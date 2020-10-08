import React from 'react';
import * as TodoActStyle from "./TodoActStyle";

const TodoAct = (props) => {
    const {item, deleteTodo, doneTodo} = props;
    const {id, title} = item;
    
    return (
        <TodoActStyle.ListRow>
            {title}
            <TodoActStyle.ReviseBox>
                <button className="reviseRow" onClick={() => {doneTodo(id)}}>Mark as done</button>
                <button className="reviseRow" onClick={() => {deleteTodo(id)}}>Delete</button>
            </TodoActStyle.ReviseBox>              
        </TodoActStyle.ListRow>
    )
}

export default TodoAct;