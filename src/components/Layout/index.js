import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { Container } from "styled-container-component";
import { theme as themeBootstrap } from "styled-config";

import { Layout as SLayout } from "./LayoutComponent";
import theme from '@coc/styles/theme'

function Layout({ children, fluid, theme }) {
  return (
    <ThemeProvider theme={theme}>
      <SLayout className="wrapper">
        <Container fluid>{children}</Container>
      </SLayout>
    </ThemeProvider>
  );
}

Layout.propTypes = {
  title: PropTypes.string,
  fluid: PropTypes.any,
  children: PropTypes.any,
  theme: PropTypes.object
};

Layout.defaultProps = {
  theme: {...themeBootstrap, ...theme},
  fluid: true
};

export default Layout;
