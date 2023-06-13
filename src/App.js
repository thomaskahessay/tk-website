import React, { useState } from "react";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import "./fonts/Montserrat.ttf";
import "./App.css";
import Home from "./pages/Home";

export default function App() {
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState(preferredColorScheme);
  const toggleColorScheme = (value) => setColorScheme(value);
  localStorage.setItem("colorScheme", preferredColorScheme);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: colorScheme,
          globalStyles: (theme) => ({
            body: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors["light-brown"][7]
                  : theme.colors["light-beige"][3],
              color:
                theme.colorScheme === "dark"
                  ? theme.colors["light-beige"][2]
                  : theme.colors["dark-brown"][4],
              overflowX: "hidden",
            },
            "::-webkit-scrollbar": {
              width: "0.6em",
            },
            "::-webkit-scrollbar-track": {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors["light-brown"][7]
                  : theme.colors["light-beige"][3],
              outline: "none",
            },
            "::-webkit-scrollbar-thumb": {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors["light-beige"][3]
                  : theme.colors["light-brown"][7],
            },
            span: {
              "::selection": {
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors["light-beige"][7]
                    : theme.colors["light-brown"][6],
              },
            },
            ".mantine-Timeline-itemTitle": {
              color:
                theme.colorScheme === "dark"
                  ? theme.colors["light-beige"][2]
                  : theme.colors["dark-brown"][7],
              fontWeight: 700,
              fontSize: "1.5rem",
            },
          }),
          components: {
            Text: {
              styles: (theme) => ({
                root: {
                  "::selection": {
                    backgroundColor:
                      theme.colorScheme === "dark"
                        ? theme.colors["light-beige"][7]
                        : theme.colors["light-brown"][6],
                  },
                },
              }),
            },
          },
          fontFamily: "Montserrat",
          colors: {
            "dark-burgundy": [
              "#8E6867",
              "#855A59",
              "#7E4D4C",
              "#78413F",
              "#743533",
              "#712927",
              "#6F1D1B",
              "#5C2120",
              "#4E2322",
              "#422323",
              "#392322",
              "#312121",
              "#2B1F1F",
            ],
            "light-beige": [
              "#F4F3F1",
              "#E1DED8",
              "#D2CBBF",
              "#C6BAA7",
              "#BEAB8E",
              "#BA9E73",
              "#BB9457",
              "#A58452",
              "#8D7651",
              "#7A694E",
              "#695D4A",
              "#5C5346",
              "#514B41",
            ],
            "dark-brown": [
              "#5B4E47",
              "#55463E",
              "#503F36",
              "#4B392E",
              "#483326",
              "#452D1F",
              "#432818",
              "#382519",
              "#30221A",
              "#291F19",
              "#241C18",
              "#1F1A17",
              "#1B1715",
            ],
            "light-brown": [
              "#B9ABA0",
              "#AF9A8B",
              "#A98A75",
              "#A67C5D",
              "#A16F4B",
              "#9C633A",
              "#99582A",
              "#805130",
              "#6C4A32",
              "#5C4432",
              "#4F3D31",
              "#44382F",
              "#3C322C",
            ],
            tan: [
              "#F1ECE5",
              "#E6D9C5",
              "#E0C9A4",
              "#E1BB80",
              "#CEA96F",
              "#BB9963",
              "#A98959",
              "#917A56",
              "#7D6D53",
              "#6D614F",
            ],
          },
          primaryColor: "light-brown",
          primaryShade: 7,
        }}
      >
        <Home />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
