import styled from "styled-components";
import { sectionItems } from "../data";
import DownArrow from "../image/down-arrow.svg";
import Fade from "react-reveal/Fade";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.bgImage});
`;

const Wrapper = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;
const Content = styled.div`
  text-align: center;
  padding-top: 15vh;
`;
const Title = styled.h1`
  color: #393c41;
  font-size: 40px;
`;

const Desc = styled.p`
  color: #5c5d51;
`;

const GroupWrap = styled.div`
  display: flex;

  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const LeftButton = styled.button`
  border: none;
  background: #171a20;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 300;
  color: white;
  opacity: 0.85;
  margin: 8px;
  height: 40px;
  width: 256px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;
const Image = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;
const Section = () => {
  return (
    <>
      {sectionItems.map((item) => (
        <Container bgImage={item.bgImage} key={item.id}>
          <Wrapper>
            <Fade bottom>
              <Content>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
              </Content>
            </Fade>
            <GroupWrap>
              <Fade bottom>
                <ButtonContainer>
                  <LeftButton>CUSTOM ORDER</LeftButton>
                  <RightButton>EXISTING INVENTORY</RightButton>
                </ButtonContainer>
              </Fade>
              <Image src={DownArrow} />
            </GroupWrap>
          </Wrapper>
        </Container>
      ))}
    </>
  );
};

export default Section;
