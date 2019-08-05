import styled from "styled-components";
import { Nav } from "react-bootstrap";

export const NavbarStyled = styled.div`
  padding: 0 30px;
  background-color: #fff;
  box-shadow: 0 0 35px 0 rgba(154, 161, 171, 0.15);
  margin: -5px -20px 0;
  min-height: 70px;
`;


export const NavMLStyled = styled(Nav)`
  .nav-item > a {
      line-height: 70px;
  }
`