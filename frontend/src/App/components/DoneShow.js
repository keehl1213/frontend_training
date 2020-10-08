import React from 'react';
import * as TodoActStyle from "./TodoActStyle";

const DoneShow = (props) => {
    const {item} = props;
    const {id, title, doneTime} = item;
    return (
        <TodoActStyle.ListRow>
            <TodoActStyle.TextDelete>{title}</TodoActStyle.TextDelete>
            <TodoActStyle.DoneTimeBox>
                完成時間: {doneTime}
            </TodoActStyle.DoneTimeBox>
        </TodoActStyle.ListRow>
    )
}

export default DoneShow;