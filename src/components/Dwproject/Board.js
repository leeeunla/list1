import { Header } from "./Header";
import { MainT } from "./MainT";
import styled from "styled-components";
import { NaviText } from "./NaviText";
import { OpenBox } from "./OpenBox";
import { MainU } from "./MainU";
export function Board() {
  return (
    <>
      <NaviText />
      <Header />
      <OpenBox />
      <MainT />
      {/* <Swiper /> */}
      <MainU />
    </>
  );
}
