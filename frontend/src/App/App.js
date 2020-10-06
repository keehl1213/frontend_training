import React, { useState } from 'react';
import * as Style from "./Style";

const DATA = [
  {
    id: 1,
    title: 'eat',
    doneTime: '2020/10/06 02:02'
  },
  {
    id: 2,
    title: 'sleep',
    doneTime: ''
  },
];

const App = () => {
    const [list, setList] = useState(DATA);
    const [title, setTitle] = useState('');
    const addItems = () => {
      const id = Math.random();
      setList([...list, {id, title, doneTime: ''}]);
    }
    // const deleteItem = (props) => {
    //     console.log(props)
    //     const a = list
    //     .find(item => item.id === props)
    //     console.log(a)
    // }
    return (
      <Style.Container>
        <Style.Header>
          <Style.Logo>
            Todo<strong>List</strong>
          </Style.Logo>
          <Style.Desc>
            A Simple todolist built react hooks & context
          </Style.Desc>
        </Style.Header>
        <Style.ContentBox>
          <Style.AddList>
           <input type="text" className="inputBox" placeholder="Add your task here…" onChange={(e)=>{setTitle(e.target.value)}}/>
           <button className="addButton" onClick={addItems}>Add</button>
          </Style.AddList>
          <Style.ListBox>
            <Style.Item>
              <Style.ListText>{list.length} items</Style.ListText>
              <Style.ListText>
                <input type="checkbox" />
                Show done items
              </Style.ListText>
            </Style.Item>
            
              {list.map((item) =>
                  (
                  <Style.ListRow>
                    { item.title }
                    <Style.ReviseBox>
                      <Style.ReviseRow>Mark as done</Style.ReviseRow>
                      <Style.ReviseRow>Delete</Style.ReviseRow>
                    </Style.ReviseBox>
                  </Style.ListRow>
                  )
                  //<ListItems id={item.id} title={item.title} doneTime={item.doneTime} />
              )}
            
          </Style.ListBox>
        </Style.ContentBox>
      </Style.Container>
    );
};
export default App;
