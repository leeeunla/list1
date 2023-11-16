import styled from "styled-components";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
const Container = styled.div``;

const Card = styled.div`
  border-top: 1px solid gray;
  margin: 1.5rem;
  padding-top: 5px;
  display: flex;
  justify-content: space-between;
`;

export function Footer() {
  return (
    <>
      <Container>
        <Card>
          <p> &#169; DW 아카데미 </p>
          <div style={{ fontSize: "1.5rem" }}>
            <FaFacebook style={{ color: "navy" }} />
            <CiInstagram />
            <FaTwitter style={{ color: "lightblue" }} />
          </div>
        </Card>
      </Container>
    </>
  );
}
