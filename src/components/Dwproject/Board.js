import { Header } from "./Header";
import { MainT } from "./MainT";
import styled from "styled-components";
import { NaviText } from "./NaviText";
import { OpenBox } from "./OpenBox";
import { Footer } from "./Footer";
export function Board() {
  return (
    <>
      <NaviText />
      <Header />
      <OpenBox />
      <MainT />
      <Footer />
    </>
  );
}
