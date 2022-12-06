import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../redux/modules/todos";

const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { todos } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo({ id: todos.length + 1, title, content, isDone: true }));
    setTitle("");
    setContent("");
  };

  return (
    <CreateBox>
      <FormBox onSubmit={addSubmit}>
        <TitleBox>
          <label>
            <StSpan>제목</StSpan>
            <StInput
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
        </TitleBox>
        <ContentBox>
          <label>
            <StSpan>내용</StSpan>
            <StInput
              type="text"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </label>
        </ContentBox>
        <AddBtn type="submit">추가하기</AddBtn>
      </FormBox>
    </CreateBox>
  );
};

export default Create;

const CreateBox = styled.div`
  width: 1220px;
  height: 100px;
  margin-top: 30px;
  border: 2px solid #008080;
  display: flex;
  justify-content: space-around;
  font-size: 20px;
`;

const FormBox = styled.form`
  display: flex;
  align-items: center;
`;

const TitleBox = styled.div`
  margin-right: 30px;
`;

const ContentBox = styled.div`
  margin-right: 30px;
`;

const StSpan = styled.span`
  font-weight: 600;
  margin-right: 15px;
`;

const StInput = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #808080;
`;

const AddBtn = styled.button`
  width: 150px;
  height: 35px;
  font-size: 18px;
  font-weight: 600;
  border: 2px solid #008080;
  background-color: #008080;
  color: white;
  margin-left: 50px;
  cursor: pointer;
`;
