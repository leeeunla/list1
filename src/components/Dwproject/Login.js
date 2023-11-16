import styled from "styled-components";
const Container = styled.div`
  width: 300px;
  background-color: #eee;
  box-shadow: 2px 2px 5px grey;
  padding: 20px;
  border-radius: 20px;
  margin: 50px;
`;
const Header = styled.div`
  font-size: 1.5rem;
  text-align: center;
`;
const Button = styled.button`
  width: 100%;
  height: 25px;
  margin-top: 20px;
  background-color: lightblue;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  color: white;
  border: 1px solid blue;
`;

export function Login() {
  return (
    <>
      <Container>
        <form onSubmit={onSubmit}>
          <Header>Login</Header>
          <div>
            <label>아이디</label>
            <br />
            <input
              id="loginId"
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
            />
          </div>
          <div>
            <label>비밀번호</label>
            <br />
            <input
              id="password"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit">로그인</Button>
        </form>
      </Container>
    </>
  );
}
