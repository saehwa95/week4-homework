import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Card from "../element/Card";

const TodoList = () => {
  const { todos } = useSelector((state) => state);
  
  return (
    <ListWrap>
      <div>
        <h1>해내자!</h1>
      </div>
      {todos?.map((todo) => {
        return todo.isDone ? <Card key={`card${todo.id}`} todo={todo}/> : null;
      })}
      <div>
        <h1>해냈다!</h1>
      </div>
      {todos?.map((todo) => {
        return !todo.isDone ? <Card key={`card${todo.id}`} todo={todo}/> : null;
      })}
    </ListWrap>
  );
};

export default TodoList;

const ListWrap = styled.div`
  margin-top: 20px;
  width: 1200px;
  margin-left: 20px;
`;
