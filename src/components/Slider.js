import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import Photo1 from "../assets/slider1.jpeg";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
    font-size: 70px;
`;
const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;

const Image = styled.img`
  height: 80%;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImgContainer>
            <Image src={Photo1} />
          </ImgContainer>
          <InfoContainer>
            <Title>SEASON SALE</Title>
            <Desc>All you need is "SALE" not "LOVE".</Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide>
          <ImgContainer>
            <Image src={Photo1} />
          </ImgContainer>
          <InfoContainer>
            <Title>SEASON SALE</Title>
            <Desc>All you need is "SALE" not "LOVE".</Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide>
          <ImgContainer>
            <Image src={Photo1} />
          </ImgContainer>
          <InfoContainer>
            <Title>SEASON SALE</Title>
            <Desc>All you need is "SALE" not "LOVE".</Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
