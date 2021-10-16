import styled from "styled-components";
import { sectionItems } from "../data";

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
  height: 100%;
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 536px;
  margin-bottom: 80px;
`;
const Button = styled.button`
  background: #171a20;
  padding: 13px;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 300;
  color: white;
  width: 256px;
`;

const Section = () => {
  return (
    <>
      {sectionItems.map((item) => (
        <Container bgImage={item.bgImage} key={item.id}>
          <Wrapper>
            <Content>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
            </Content>

            <ButtonContainer>
              <Button>CUSTOM ORDER</Button>
              <Button>EXISTING INVENTORY</Button>
            </ButtonContainer>
          </Wrapper>
        </Container>
      ))}
    </>
  );
};

export default Section;
