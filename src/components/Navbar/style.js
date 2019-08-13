import styled from "styled-components";
import { Nav } from "react-bootstrap";
import colors from "@coc/assets/styles/theme/colors";

export const NavbarStyled = styled.div`
  padding: 0 30px;
  background-color: #fff;
  box-shadow: 0 0 35px 0 rgba(154, 161, 171, 0.15);
  margin: -5px -20px 0;
  min-height: 70px;

  .dropdown-menu {
    padding: .5rem .09rem;
    .dropdown-item {
      font-size: 0.8rem;
      &.active,
      &:active {
        background-color: ${colors.primary};
      }

     
    }
  }
  .form-control {
    border-radius: 3px;

    border-color: rgba(200, 200, 200, 0.4);
    &:focus {
      outline: 0px;
    }
  }
`;

export const NavMLStyled = styled(Nav)`
  justify-content: flex-end;
  .nav-item > a {
    line-height: 70px;
  }
  .nav-link{
        font-size: 1.2rem;
        padding: .5rem .8rem;
         color: ${colors.gray};
      }
`;
