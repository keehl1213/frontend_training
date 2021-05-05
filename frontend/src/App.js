import React from 'react';
import { render } from "react-dom";
import * as Style from './Style.js';
import TaskTable from './components/TaskTable/TaskTable';

function App() {
  return (
    <Style.Body>
      <Style.Header>
        <Style.Title>TODO <Style.TitleSpan>LIST</Style.TitleSpan></Style.Title>
        <Style.TitleComment>A simple todolist built react hooks & context</Style.TitleComment>
      </Style.Header>
      <Style.Main>
        <TaskTable />
      </Style.Main>
    </Style.Body>
  );
}
export default App;
