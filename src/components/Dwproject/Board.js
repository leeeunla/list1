import { Header } from "./Header";
import { MainT } from "./MainT";
import styled from "styled-components";
import { NaviText } from "./NaviText";
import { OpenBox } from "./OpenBox";
import { Banner } from "./Banner";
import { MainU } from "./MainU";
import { Swiper } from "./Swiper";

export function Board() {
  return (
    <>
      <NaviText />
      <Header />
      <OpenBox />
      <MainT />
      {/* <Swiper /> */}
      <MainU />
      <Banner />
    </>
  );
}
