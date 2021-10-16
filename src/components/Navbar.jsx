import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 54px;
  position: fixed;
`;
const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
`;
const Center = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuItem = styled.div`
  font-size: 14px;
  margin-right: 35px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>Logo</Left>
        <Center>
          <MenuItem>Model S</MenuItem>
          <MenuItem>Model 3</MenuItem>
          <MenuItem>Model X</MenuItem>
          <MenuItem>Model Y</MenuItem>
          <MenuItem>Solar Roof</MenuItem>
          <MenuItem>Solar Panels</MenuItem>
        </Center>
        <Right>
          <MenuItem>Shop</MenuItem>
          <MenuItem>Account</MenuItem>
          <MenuItem>Menu</MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
