import styled from "styled-components";

const Container = styled.div`
  height: 45px;
  letter-spacing: 4px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>FASHIONHOLIC IS LIVE NOW, Mega Sale up to 75% OFF </Container>;
};

export default Announcement;
