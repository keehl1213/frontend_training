import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import * as Style from './style';
import TodoList from "./todoList";

const Main = () => (
  <Style.Wrapper>
    {/* <h1 className="title">TODOLIST</h1> */}
    <Style.Title>TODOLIST</Style.Title>
    <TodoList />
  </Style.Wrapper>
);

render(<Main />, document.getElementById("app"));
