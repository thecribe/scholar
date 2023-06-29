import React, { useState } from "react";
import { Outlet } from "react-router";
import { ThemeProvider } from "styled-components";
import Header from "./Header/Header";
import GlobalStyle from "./GlobalStyle";
import Footer from "./Footer/Footer";

const themeSettings = {
  colors: {
    light: {
      bg: "255,255,255",
      primary: "34, 40, 49",
      secondary: "57, 62, 70",
      accent: "0, 173, 181",
      text: "57, 62, 70",
      header_text: "255,255,255",
    },
  },

  others: {
    screen: {
      mobile: "500px",
      tablet: "960px",
    },

    centerWidth: "1400px",
  },
};

const Root = () => {
  const [themeDefault, setThemeDefault] = useState({
    color: { ...themeSettings.colors.light },
    ...themeSettings.others,
  });
  return (
    <div>
      <ThemeProvider theme={themeDefault}>
        <GlobalStyle />
        <Header />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default Root;
