import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import Logo from "../image/logo.svg";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [customMenuOpen, setCustomMenuOpen] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Image src={Logo} alt="" />
        </Left>
        <Center>
          {cars &&
            cars.map((car, index) => (
              <MenuItem key={index} href="#">
                {car}
              </MenuItem>
            ))}
        </Center>
        <Right>
          <MenuItem href="#">Shop</MenuItem>
          <MenuItem href="#">Account</MenuItem>
          <CustomMenu onClick={() => setCustomMenuOpen(true)}>Menu</CustomMenu>
        </Right>
        <BurgerNav show={customMenuOpen}>
          <CustomMenuCloseWrap>
            <CustomMenuClose onClick={() => setCustomMenuOpen(false)} />
          </CustomMenuCloseWrap>

          <MenuList>
            <ListItem href="#">Model S</ListItem>
          </MenuList>
          <MenuList>
            <ListItem href="#">Model 3</ListItem>
          </MenuList>
          <MenuList>
            <ListItem href="#">Model X</ListItem>
          </MenuList>
          <MenuList>
            <ListItem href="#">Model Y</ListItem>
          </MenuList>
          <MenuList>
            <ListItem href="#">Solar Roof</ListItem>
          </MenuList>
          <MenuList>
            <ListItem href="#">Solar Panels</ListItem>
          </MenuList>
          <MenuList>
            <ListItem href="#">Existing Inventory</ListItem>
          </MenuList>
          <MenuList>
            <ListItem href="#">Used Inventory</ListItem>
          </MenuList>
          <MenuList>
            <ListItem href="#">Trade-In</ListItem>
          </MenuList>
          <MenuList>
            <ListItem href="#">Test Drive</ListItem>
          </MenuList>
          <MenuList>
            <ListItem href="#">Powerwall</ListItem>
          </MenuList>
          <MenuList>
            <ListItem href="#">Commercial Energy</ListItem>
          </MenuList>
        </BurgerNav>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  width: 100%;
  min-height: 54px;
  position: fixed;
  z-index: 1;
`;
const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  padding-left: 25px;
`;

const Image = styled.img``;

const Center = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const MenuItem = styled.a`
  font-size: 14px;
  margin-right: 35px;
  cursor: pointer;
  text-decoration: none;
  color: black;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const CustomMenu = styled.div`
  cursor: pointer;
`;

const CustomMenuCloseWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const CustomMenuClose = styled(CloseIcon)`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

const BurgerNav = styled.ul`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.4s ease-in-out;
`;
const MenuList = styled.li`
  padding: 10px 14px;
  &:hover {
    border: 1px solid #e5e8ea;
    border-radius: 20px;
    background: #e5e8ea;
    padding: 4px 8px;
  }
`;
const ListItem = styled.a`
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  color: black;
`;
