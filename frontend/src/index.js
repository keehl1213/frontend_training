import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import * as Style from './style';
import TodoList from "./todoList";

const Main = () => (
  <Style.Wrapper>
    <Style.Title>
      <Style.TitleLeft>TODO</Style.TitleLeft>
      <Style.TitleRight>LIST</Style.TitleRight>
    </Style.Title>
    <Style.Subtitle>A Simple todolist built react hooks & context</Style.Subtitle>
    <TodoList />
  </Style.Wrapper>
);

render(<Main />, document.getElementById("app"));
