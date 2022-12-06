import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Card from "../element/Card";

const TodoList = () => {
  const { todos } = useSelector((state) => state);

  return (
    <ListWrap>
      <div>
        <h1>공부 해보자✍️</h1>
      </div>
      <BoxWrap>
        {todos?.map((todo) => {
          return todo.isDone ? (
            <Card key={`card${todo.id}`} todo={todo} />
          ) : null;
        })}
      </BoxWrap>

      <div>
        <h1>공부 해냈다🧑‍🎓</h1>
      </div>
      <BoxWrap>
        {todos?.map((todo) => {
          return !todo.isDone ? (
            <Card key={`card${todo.id}`} todo={todo} />
          ) : null;
        })}
      </BoxWrap>
    </ListWrap>
  );
};

export default TodoList;

const ListWrap = styled.div`
  margin-top: 20px;
  width: 1200px;
  margin-left: 20px;
`;

const BoxWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`