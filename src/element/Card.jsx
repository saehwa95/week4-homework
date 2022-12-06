import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = ({ todo }) => {
  return (
    <BoxWrap>
      <CardBox>
        <StLink to={`detail/${todo.id}`}>
          <DetailLink>상세보기</DetailLink>
        </StLink>
        <Content>
          <TitleSpan>{todo.title}</TitleSpan>
          <ContentSpan>{todo.content}</ContentSpan>
        </Content>
        <BtnBox>
          <RedBtn>삭제하기</RedBtn>
          <GreenBtn>{todo.isDone ? "완료하기" : "취소하기"}</GreenBtn>
        </BtnBox>
      </CardBox>
    </BoxWrap>
  );
};

export default Card;

const BoxWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 70px;
`;
const CardBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 340px;
  height: 200px;
  border: 3px solid #008080;
  border-radius: 10px;
  margin: 10px 0 20px 0;
`;

const StLink = styled(Link)`
  text-decoration: none;
`;

const DetailLink = styled.div`
  font-size: 16px;
  margin: 0 0 10px 20px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const TitleSpan = styled.span`
  font-size: 24px;
  margin: 0 0 20px 20px;
`;

const ContentSpan = styled.span`
  font-size: 16px;
  font-weight: 400;
  margin: 0 0 20px 20px;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

const GreenBtn = styled.button`
  gap: 10px;
  border-radius: 10px;
  width: 120px;
  height: 35px;
  font-size: 15px;
  font-weight: 400;
  background-color: white;
  cursor: pointer;
  border: 2px solid green;
`;

const RedBtn = styled.button`
  gap: 10px;
  border-radius: 10px;
  width: 120px;
  height: 35px;
  font-size: 15px;
  font-weight: 400;
  background-color: white;
  cursor: pointer;
  border: 2px solid red;
`;
