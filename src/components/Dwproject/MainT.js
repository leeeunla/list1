import styled from "styled-components";
const SideTest = styled.div`
  height: auto;
  width: 100px;
  cursor: pointer;
  margin: 20px;
  text-align: center;
  font-size: 20px;
`;
const MainTest = styled.div`
  border: 1px solid black;
  height: auto;
  width: 130px;
  cursor: pointer;
  margin: 10px;
  text-align: center;
  padding: 1px;
  font-size: 20px;
`;
const Container = styled.div``;

const Box1 = styled.div`
  display: flex;
  margin: 10px;
  padding: 20px;
  justify-content: space-between;
`;
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export function MainT() {
  return (
    <>
      <Container>
        <Box1>
          <div>
            <MainTest>공지사항</MainTest>
            <SideTest>게임관련</SideTest>
            <SideTest>커뮤니티 이벤트</SideTest>
            <SideTest>버그/수정</SideTest>
          </div>
          <ImageContainer>
            <img
              style={{ width: "100px", height: "auto" }}
              src="https://health.chosun.com/site/data/img_dir/2014/09/22/2014092203793_0.jpg"
              alt="이미지"
            />
          </ImageContainer>
        </Box1>
        <Box1>
          <div>
            <MainTest>커뮤니티</MainTest>
            <SideTest>자유게시판</SideTest>
            <SideTest>질문과답변</SideTest>
            <SideTest>가입인사</SideTest>
          </div>
          <ImageContainer>
            <img
              style={{ width: "100px", height: "auto" }}
              src="https://i.namu.wiki/i/k9NaF5UjbVPXBSMv5OUXqvK6Zlk4QurrdvtUBOfvqv14rqqB0bIXdbBpLg_SgrrFcyCBry4hk_lp6X28V3wAEQ.webp"
              alt="이미지"
            />
          </ImageContainer>
        </Box1>
        <Box1>
          <div>
            <MainTest>그림게시판</MainTest>
            <SideTest>팬아트</SideTest>
            <SideTest>손그림</SideTest>
            <SideTest>커미션</SideTest>
          </div>
          <ImageContainer>
            <img
              style={{ width: "100px", height: "auto" }}
              src="https://images.unsplash.com/photo-1595126739121-68ab4225f9cf?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
              alt="이미지"
            />
          </ImageContainer>
        </Box1>
      </Container>
    </>
  );
}
