import styled from "styled-components";
import NavBar from "../../../components/NavBar/NavBar";

const NavBarStyled = styled(NavBar)`
  position: relative;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  font-weight: bold;
  padding: 20px 40px;
  z-index: 100;

  > * {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav-links {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .nav-links > * {
    color: ${(props) => props.theme.colors.textColor};
    transition: all 0.3s ease-in-out;
    margin-right: 20px;
  }

  .nav-links > *:hover {
    color: ${(props) => props.theme.colors.highlitedText};
  }

  .nav-links > .active {
    border-bottom: 2px solid ${(props) => props.theme.colors.highlitedText};
    color: ${(props) => props.theme.colors.highlitedText};
  }

  .cart {
    display: flex;
    justify-content: end;
    align-items: center;
    cursor: pointer;
  }

  .drop-down {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 5px 10px;
    white-space: nowrap;
    margin-right: 5px;
  }

  .drop-down .currency {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .drop-down .currency > img {
    margin-left: 5px;
  }

  .drop-down-content {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 62%;
    z-index: 105;
  }

  .drop-down-content > * {
    background-color: ${(props) => props.theme.colors.backgroundColor};
    padding: 5px 10px;
  }

  .drop-down-content > *:hover {
    background-color: ${(props) => props.theme.colors.highlitedBackgroundColor};
  }

  .cart-drop-icon {
    display: flex;
    position: relative;
  }

  .cart-total-count {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.textColor};
    color: white;
    width: 20px;
    height: 20px;
    padding: 2.5px 5px;
    border-radius: 50%;
    font-size: smaller;
    font-weight: bold;
    top: -10px;
    right: -10px;
    z-index: 105;
  }
`;

export default NavBarStyled;
