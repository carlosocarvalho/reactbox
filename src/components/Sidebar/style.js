import styled from "styled-components";

export const SidebarContainer = styled.nav`
  font-family: "Montserrat", sans-serif !important;
  background: #fff;
  a[data-toggle="collapse"] {
    position: relative;
  }

  .dropdown-toggle::after {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  top: 0;
  height: 100vh;
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  z-index: 4;
  padding-bottom: 100px;

  ul > li > a {
    margin: 15px 10px 0;
    color: #66615b;
    display: block;
    font-weight: 400;
    text-decoration: none;
    position: relative;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 14px;
    padding: 5px 8px;
    line-height: 25px;
  }

  li > a > i {
    color: #66615b;
    opacity: 0.7;
    margin-right: 10px;
  }
`;

export const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  bottom: 0;
  width: 260px;
  left: 0;
  z-index: 1030;
  border-right: 1px solid #dce8e6;
`;
