import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = styled.div`
  padding: 20px;
  color: white;
  background-color: skyblue;
  object-fit: cover;
`;

const Ul = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

const Main = styled.div`
  & #app {
    background-color: aliceblue;
  }
`;

const Section3 = styled.div`
  font-size: 15px;
`;

const Sidebar = styled.div``;

const Footer = styled.h2`
  background-color: skyblue;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export function BoardGame() {
  return (
    <>
      <Header>
        <figure>
          <RxHamburgerMenu
            className="icon"
            size="24"
            color="black"
            cursor="pointer"
          />
        </figure>
        <button className="register1">로그인</button>
        <button className="register2">비밀번호찾기</button>
        <h1>DW ↗ Story↘</h1>
        <nav>
          <Ul>
            {/* <!-- <li><a href="#"></a></li> --> */}
            <li>
              <a href="#">임시</a>
            </li>
            <li>
              <a href="#">임시</a>
            </li>
            <li>
              <a href="#">임시</a>
            </li>
            <li>
              <a href="#">임시</a>
            </li>
          </Ul>
          <div class="banner"></div>
        </nav>
      </Header>
      {/* <!-- 헤더 & 네비바 --> */}
      <figure>
        <img src="https://cdn.crowdpic.net/detail-thumb/thumb_d_5ECF420900C9CC21D81EBCA54C971960.jpg" />
      </figure>

      <Sidebar>
        <main id="app">
          <aside id="sidebar">
            <Section3>
              <h2>
                <a href="#">실시간 인기글</a>
              </h2>
            </Section3>
            <p>-----------------------------------</p>

            <section2>
              <h2>정보 공유 게시판</h2>
            </section2>
            <p>-----------------------------------</p>
            <section>
              <h2>
                <a href="#">직업 게시판</a>
              </h2>
            </section>

            <section>
              <h2>
                <a href="#">공략 게시판</a>
              </h2>
            </section>

            <section>
              <h2>
                <a href="#">그림 게시판</a>
              </h2>
            </section>

            <section>
              <h2>
                <a href="#">꿀팁 게시판</a>
              </h2>
            </section>
            <p>-----------------------------------</p>
            <section2>
              <h2>토크 게시판</h2>
            </section2>
            <p>-----------------------------------</p>
            <section>
              <h2>
                <a href="#">수다 게시판</a>
              </h2>
            </section>

            <section>
              <h2>
                <a href="#">유머 게시판</a>
              </h2>
            </section>

            <section>
              <h2>
                <a href="#">친목 게시판</a>
              </h2>
            </section>

            <section>
              <h2>
                <a href="#">짤 게시판</a>
              </h2>
            </section>

            <section>
              <h2>
                <a href="#">인원 구해요</a>
              </h2>
            </section>
            <p>-----------------------------------</p>
            <button id="trigger">열기</button>
          </aside>

          <div class="sliding-bar">
            <div class="toggle-button" id="toggle-button">
              버튼을눌러주세요
            </div>
            <div class="content" id="content">
              {/* <!-- 슬라이딩 바 내용 --> */}
            </div>
          </div>
          <form action="/search" method="get">
            {/* <!-- 폼 엘리먼트 시작 --> */}
            <input type="text" name="q" placeholder="검색어를 입력하세요" />
            {/* <!-- 검색 입력 필드 --> */}
            <button type="submit">검색</button>
            {/* <!-- 검색 버튼 --> */}
          </form>
          {/* <!-- 폼 엘리먼트 종료 --> */}
        </main>
      </Sidebar>
      <Footer>
        <h2>2023년 11월 프로젝트 &copy;DW아카데미 Community</h2>
      </Footer>
    </>
  );
}
