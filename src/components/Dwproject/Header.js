import styled from "styled-components";
import { Board } from "./Board";
import { Icon } from "@iconify/react";

const H3 = styled.div`
  border: 2px dotted black;
  border-radius: 1.5rem;
  background-color: white;
`;

const Div = styled.div`
  background-color: white;
  color: #fff;
  padding: 35px;
  text-align: center;
  font-size: 20px;
  border: 2px solid black;
  font-family: Arial, sans-serif;
  font-size: 25px;
  color: black;
`;

export function Header() {
  return (
    <>
      <Div>
        <H3>
          <Icon icon="emojione:flag-for-south-korea" />
          Dw Story 커 뮤 니 티 <Icon icon="twemoji:flag-south-korea" />
        </H3>
      </Div>
    </>
  );
}
