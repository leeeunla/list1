import styled from "styled-components";
import { Board } from "./Board";

const Box = styled.div`
  background-color: black;
  height: 24px;
  width: 48px;
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  text-align: center;
  align-items: center;
  cursor: pointer;
`;
export function OpenBox() {
  return (
    <>
      <Box>
        <p>글쓰기</p>
      </Box>
    </>
  );
}
