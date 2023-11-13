import styled from "styled-components";
import { Board } from "./Board";

const Contariner = styled.div`
  background-color: skyblue;
  text-align: center;
`;
export function Banner() {
  return (
    <>
      <Contariner>
        <div>
          <h1>DW아카데미 11월 프로젝트 (예시입니다.)</h1>
        </div>
      </Contariner>
    </>
  );
}
