import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import Error from "../pages/Error";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="detail" element={<Detail />} />
        <Route path="detail/:id" element={<Detail />} />
        {/* 클라이언트 오류 방지를 위한 일종의 404 페이지 */}
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
