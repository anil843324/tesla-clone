import React, { useState } from "react";

import { ImMenu } from "react-icons/im";
import { MdOutlineClose } from "react-icons/md";
import styled from "styled-components";

import { useSelector } from "react-redux";
const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);

  const cars = useSelector((state) => state.car.cars);

  console.log(cars);

  return (
    <Container>
      <a href="/">
        <img src="/images/logo.svg" alt="logo" />
      </a>

      <Menu>
        {cars &&
          cars.map((car, index) => {
            return (
              <a key={index} href="/">
                {" "}
                {car}
              </a>
            );
          })}
      </Menu>
      <RightMenu>
        <a href="/"> Shop</a>
        <a href="/">Account</a>
        <CustomMenu
          onClick={() => {
            setBurgerStatus(true);
          }}
        />
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose
            onClick={() => {
              setBurgerStatus(false);
            }}
          />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => {
            return (
              <li>
                {" "}
                <a key={index} href="/">
                  {" "}
                  {car}{" "}
                </a>
              </li>
            );
          })}

        <li>
          {" "}
          <a href="/"> Existing Inventory </a>
        </li>
        <li>
          <a href="/"> Used Inventory </a>{" "}
        </li>
        <li>
          <a href="/"> Trade-in </a>{" "}
        </li>
        <li>
          <a href="/"> Cyberruck </a>{" "}
        </li>
        <li>
          <a href="/"> Roadaster </a>{" "}
        </li>
      </BurgerNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;

  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  a {
    font-weight: 600;
    padding: 0px 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(ImMenu)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;

  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};

  transition: transform 0.3s;
  li {
    padding: 15px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(MdOutlineClose)`
  cursor: pointer;

  height: 25px;
  width: 25px;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
