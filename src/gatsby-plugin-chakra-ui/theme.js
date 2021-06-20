import {
  extendTheme,
  theme as baseTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";

const customTheme = extendTheme(
  withDefaultColorScheme({colorScheme: "blue"}),
  baseTheme,
);

export default customTheme;
