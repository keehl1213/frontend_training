import React, {useState, useEffect, useRef} from 'react';
import * as Style from '../../Style';
import Task from './Task';

const taskList = [
  {
    id: 0,
    name: "Read a book",
    isFinish: false,
    date: ""
  },
  {
    id: 1,
    name: "Jog in a playground",
    isFinish: false,
    date: ""
  },
  {
    id: 2,
    name: "Write articles",
    isFinish: true,
    date: "完成時間:2021/05/05 11:42"
  }
];

const filterList = (list, isShowDone) => (
  list.reduce((acc, curr) => {
    if (curr.isFinish === isShowDone || curr.isFinish === false) {
      acc.push(curr);
    }
    return acc;
  }, [])
);

const transferDate = (today) => {
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  const hh = String(today.getHours()).padStart(2, '0');
  const MM = String(today.getMinutes()).padStart(2, '0');
  return (`完成時間:${yyyy}/${mm}/${dd} ${hh}:${MM}`);
};

const TaskTable = () => {
  const [newName, setNewName] = useState("");
  const [usedIndex, setUsedIndex] = useState(taskList.length);
  const [ShowDone, setShowDown] = useState(false);
  const [showList, setShowList] = useState(taskList);

  // setShowList(filterList(ShowDone));
  const onInputChange = (e) => {
    setNewName(e.target.value);
  };

  const addTask = () => {
    if (newName.trim() === "") return;
    const index = usedIndex + 1;
    setUsedIndex(index);
    const obj = {
      id: usedIndex,
      name: newName,
      isFinish: false,
      date: ""
    };
    const newList = [obj, ...showList];
    setShowList(newList);
    setNewName("");
  };

  const onShowDoneChange = (e) => {
    setShowDown(e.target.checked);
  };

  const onMarkDone = (task) => {
    const newList = showList.map((d) => {
      if (d.id === task.id) {
        d.isFinish = true;
        d.date = transferDate(new Date());
      }
      return d;
    });
    setShowList(newList);
  };

  const onDelete = (task) => {
    setShowList(showList.filter((ele) => ele.id !== task.id));
  };


  return (
    <Style.Container>
      <Style.InputBox>
        <Style.Input type="text" value={newName} placeholder="Add your task here…" onChange={onInputChange} />
        <button type="button" onClick={addTask}>Add</button>
      </Style.InputBox>
      <Style.TaskInfoBar>
        <p>{filterList(showList, ShowDone).length} Item(s)</p>
        <div>
          <input type="checkbox" id="showDone" value={ShowDone} onChange={onShowDoneChange} />
          <label htmlFor="showDone">Show done items</label>
        </div>
      </Style.TaskInfoBar>
      <Style.TaskInfoTable>
        {filterList(showList, ShowDone).map((task) => (
          <Task info={task} onMarkDone={onMarkDone} onDelete={onDelete} key={task.id} />
        ))}
      </Style.TaskInfoTable>
    </Style.Container>
  );

};

export default TaskTable;
