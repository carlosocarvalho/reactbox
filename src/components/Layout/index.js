import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { Container } from "styled-container-component";
import { theme as themeBootstrap } from "styled-config";

import { Layout as SLayout } from "./LayoutComponent";

const themeDefault = {
  colors: {
    primary: "#36BA9B"
  }
};
function Layout({ children, fluid, theme }) {
  return (
    <ThemeProvider theme={theme}>
      <SLayout>
        <Container>{children}</Container>
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
  theme: themeBootstrap,
  fluid: true
};

export default Layout;
