import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const todoList = useSelector((state) => state.todos);
  const detailTodo = todoList.filter((todo) => todo.id === +id)[0];

  return (
    <DetailWrapper>
      <DetailBox>
        <DetailHeader>
          <div>ID : {detailTodo.id}</div>
          <DetailBtn
            onClick={() => {
              navigate("/");
            }}
          >
            이전으로
          </DetailBtn>
        </DetailHeader>
        <TitleSpan>{detailTodo.title}</TitleSpan>
        <ContentSpan>{detailTodo.content}</ContentSpan>
      </DetailBox>
    </DetailWrapper>
  );
};

export default Detail;

const DetailWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  border-radius: 10px;
`;

const DetailBox = styled.div`
  width: 600px;
  height: 400px;
  display: flex;
  border: 1px solid #808080;
  flex-direction: column;
`;

const DetailHeader = styled.div`
  padding: 0 24px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleSpan = styled.span`
  font-size: 24px;
  padding: 20px;
`;

const ContentSpan = styled.span`
  font-size: 16px;
  font-weight: 400;
  padding: 20px;
`;

const DetailBtn = styled.button`
  border: 1px solid #808080;
  height: 40px;
  width: 120px;
  border-radius: 12px;
  cursor: pointer;
  background-color: white;
`;
