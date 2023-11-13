import styled from "styled-components";
import React from "react";
import Swiper from "./Swiper";

const Container = styled.div``;
const SideTest = styled.p`
  height: auto;
  width: 90px;
  cursor: pointer;
  margin: 10px;
  text-align: center;
`;
const MainTest = styled.div`
  border: 1px solid black;
  height: auto;
  width: 90px;
  cursor: pointer;
  margin: 10px;
  text-align: center;
`;
const Box1 = styled.p`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 20px;
  border: 1px solid black;
`;

export function MainU() {
  return (
    <>
      <Container>
        <Box1>
          <div>
            <MainTest>게시판 목록</MainTest>
            <SideTest>공지사항</SideTest>
            <SideTest>공지사항</SideTest>
            <SideTest>공지사항</SideTest>
          </div>
          <div>
            <MainTest>회원 목록</MainTest>
            <SideTest>스텝글</SideTest>
            <SideTest>일반글</SideTest>
            <SideTest>노가리</SideTest>
          </div>
          <div>
            <MainTest>게시판 목록</MainTest>
            <SideTest>공지사항</SideTest>
            <SideTest>인기글</SideTest>
            <SideTest>추천글</SideTest>
          </div>
        </Box1>
      </Container>
    </>
  );
}
