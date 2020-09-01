import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
// import React, { useState } from 'react'
import TodoData from './TodoData';
import TodoList from './TodoList';
// import React, { useState, useEffect } from 'react'


const SayHi = () => {
    const date = new Date();
    const styles = {
        fontSize: 20,
    }
    let show = `Hi Now is ${date.toLocaleTimeString()}`;
    alert(show);
}


let LstNum = TodoData.length;

const Section = () => {
    const [todos, setTodos] = useState(TodoData);
    const [Finished, setFinish] = useState(false);
    const [Addtxt, setAddtxt] = useState('');

    const handleAdd = () => {
        if(Addtxt!=="")
        {
            const newData =
            {
                id: Math.random(),
                text: Addtxt,
                completed: false
            };
            setTodos(oldData=>[...oldData,newData]);
            LstNum = todos.length+1;
        }
    };



    const handleChange = (item, str) => { //Mark Ckick
        const date = new Date();
        if (str == "D") {
            console.log("Delete Ckick!", item.id);
            // delete TodoData[item.id]

            // const deleteData = todos.filter((e) => e.id !== item.id);
            // setTodos(deleteData);

            setTodos(oldData => oldData.filter((e) => e.id !== item.id));
            LstNum = todos.length-1;
            // setTodos({...todos},deleteData);
        }

    }

    const handleFinish = () => {
        setFinish(!Finished);
        // const compData = todos.map(e=>(e.finished && e.completed))
        // setTodos(todos.map(e=>(e.completed)));

    }


    const TodoComponents = todos.filter(item => !Finished || (Finished && item.completed)).map(item =>
        <TodoList
            key={item.id}
            item={item}
            handleChange={handleChange}
        />
    );

    return (
        <main>
            <div className="Center">
                {/* onChange={e=>e.target.addtxt} */}
                <input className="input" type="text" id="text" onChange={e => setAddtxt(e.target.value)} placeholder="Add your text here..."></input>
                <button className="Addbtn" onClick={handleAdd}>Add</button>
            </div>
            {/* <div style={{display:"flex",justifyContent:"space-around"}}> */}
            <div className="List Center">
                <p>{LstNum} item(s)</p>
                <div>
                    <input type="checkbox" id="ShowDone" value="Finished" onClick={handleFinish}></input>
                    <label for="ShowDone">Show done items</label>
                </div>
            </div>

            <div>
                {TodoComponents}
            </div>
            {/* <div>
               <p> {this.state.count}</p>
            </div> */}



        </main>

    );
};

export default Section
