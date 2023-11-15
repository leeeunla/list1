import styled from "styled-components";
import { Board } from "./Board";

const Div = styled.div`
  padding: 3px;
  background-color: white;
  border: 1px solid black;
`;
const P = styled.div`
  border: 1px solid black;
  height: 40px;
  width: 90px;
  text-align: center;
  color: white;
  background-color: black;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  cursor: pointer;
  padding: 10px;
`;

const Box1 = styled.div`
  border: 1px solid black;
  position: absolute;
  top: 0;
  right: 50px;
  color: white;
  background-color: black;
  cursor: pointer;
`;

const Box2 = styled.div`
  border: 1px solid black;
  position: absolute;
  top: 0;
  right: 100px;
  background-color: black;
  color: white;
  cursor: pointer;
`;

const Input = styled.div`
  position: absolute;
  top: 0;
  right: 170px;
  display: flex;
  border: 1px solid black;
  cursor: pointer;
`;

const Button = styled.div``;
export function NaviText() {
  return (
    <>
      <Div>
        <P>새로고침</P>
        <Box1>로그인</Box1>
        <Box2>회원가입</Box2>

        <Input>
          <input type="text" name="q" placeholder="검색어를 작성하세요" />
          <Button type="submit">검색</Button>
        </Input>
      </Div>
    </>
  );
}
