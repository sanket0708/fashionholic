import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin-left: 9%;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  font-family: "Indie Flower", cursive;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.h1`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 31px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 29px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 25%;
  height: 15%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>FASHIONHOLIC</Logo>
        <Desc>
          {" "}
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="3B5999">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="3B5999">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="3B5999">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Women Wardrobe</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Contact</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          {" "}
          <Room style={{ marginRight: "8px" }} />
          123B, Docker Street, London
        </ContactItem>
        <ContactItem>
          {" "}
          <Phone style={{ marginRight: "8px" }} />
          +12 6678376163
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "8px" }} />
          fashionholic@local.io
        </ContactItem>
        <Payment src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbHjm2nDyqOj-uFhfN_Ghs-ckbWCN7dwrSeV4WKUxW-QQ1zIhlbp1DiWLF2dGUHdUmwsg&usqp=CAU" />
      </Right>
    </Container>
  );
};

export default Footer;
