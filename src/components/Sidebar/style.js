import styled from "styled-components";
import {fonts}  from '@coc/assets/styles/theme/global'
import colors  from '@coc/assets/styles/theme/colors'

export const SidebarContainer = styled.nav`
  font-family: ${fonts.defaultFamily} !important;
  
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
    margin: 10px 10px 0;
    color: #66615b;
    display: block;
    font-weight: 600 !important;
    text-decoration: none;
    position: relative;
    
    cursor: pointer;
    font-size: 16px;
    padding: 5px 8px;
    line-height: 25px;
  }

  li > a > i {
    color: #66615b;
    opacity: 0.7;
    margin-right: 10px;
  }

  li > .active,
  li > .active i{
     color: #09AB7C;
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


export const SidebarHeader = styled.div`
padding: 20px 15px;
background: #fff;

.logo{
  height:30px;
}

.sidebar-header-title {
  font-weight: 800;
  font-size: 1.2rem;
  padding-left: 10px;
  color: ${colors.primary};
  &:hover{
    text-decoration: none;
    opacity:.9;
  }
}
`;