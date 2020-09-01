import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete, onDone, onChange }) => {
    return (
        <>
        {
            todos.map(item =>
                <TodoItem
                    key={item.id}
                    item={item}
                    onDelete={onDelete}
                    onDone={onDone}
                />
            )
        }
        </>
    )
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({})),
    onDelete: PropTypes.func,
    onDone: PropTypes.func,
}

TodoList.defultProps = {
    todos: [],
    onDelete: () => null,
    onDone: () => null,
}

export default TodoList
