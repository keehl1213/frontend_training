import React, { useState } from 'react';
import TodoData from './TodoData';
import TodoList from './TodoList';

// let LstNum = TodoData.length;

const INIT_ITEM = {
    id: undefined,
    text: undefined,
    completed: false,
    updateTime: undefined,
}

const Section = () => {
    const [todos, setTodos] = useState(TodoData);
    const [Finished, setFinish] = useState(false);
    const [Addtxt, setAddtxt] = useState('');

    const handleAdd = () => {
        if (Addtxt !== "") {
            const newData = {
                ...INIT_ITEM,
                id: Math.random(),
                text: Addtxt,
            };
            setTodos(oldData => [...oldData, newData]);
            setAddtxt('');
            // LstNum = todos.length + 1;
        }
    };

    const handleDelete = (item) => {
        // if (str === "D") {
            setTodos(oldData => oldData.filter((e) => e.id !== item.id));
            // LstNum = todos.length - 1;
        // }
    }

    const handleFinish = () => {
        setFinish(!Finished);
    }

    const handleDone = (item) => {
        const nextTodos = [].concat(todos);
        const idx = nextTodos.findIndex(t => t.id === item.id);
        if (idx !== -1) {
            nextTodos[idx].completed = true;
            nextTodos[idx].updateTime = new Date();
            setTodos(nextTodos);
        }
    }
    
    const showList = todos.filter(item => !Finished || (Finished && item.completed));

    return (
        <main>
            <div className="Center">
                <input className="input" type="text" value={Addtxt} onChange={e => setAddtxt(e.target.value)} placeholder="Add your text here..."></input>
                <button className="Addbtn" onClick={handleAdd}>Add</button>
            </div>
            <div className="List Center">
                <p>{showList.length} item(s)</p>
                <div>
                    <input type="checkbox" value="Finished" onClick={handleFinish}></input>
                    <label>Show done items</label>
                </div>
            </div>
            <div>
                <TodoList
                    todos={showList}
                    onDelete={handleDelete}
                    onDone={handleDone}
                />
            </div>
        </main>

    );
};

export default Section
