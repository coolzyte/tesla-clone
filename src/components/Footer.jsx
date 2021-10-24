import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 54px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterItem = styled.p`
font-size: 12px;
margin-right: 15px;
color: #5c5d51;
cursor: pointer;
`;
const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <FooterItem>Tesla ©️ 2021</FooterItem>
        <FooterItem>Privacy & Legal</FooterItem>
        <FooterItem>Contact</FooterItem>
        <FooterItem>Careers</FooterItem>
        <FooterItem>News</FooterItem>
        <FooterItem>Engage</FooterItem>
        <FooterItem>Locations</FooterItem>
      </Wrapper>
    </Container>
  );
};

export default Footer;
