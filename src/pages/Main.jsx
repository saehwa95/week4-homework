import React from "react";
import Header from "../components/Header";
import Create from "../components/Create";
import TodoList from "../components/TodoList";
import styled from "styled-components";

const Main = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <Create />
        <TodoList />
      </Wrapper>
    </>
  );
};

export default Main;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`