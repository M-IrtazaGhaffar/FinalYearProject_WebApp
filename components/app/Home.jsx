import { Box } from "@chakra-ui/react";
import React from "react";
import CurrentLocation from "./CurrentLocation";
import AppHomeCards from "./AppHomeCards";
import WelcomeLine from "./AppWelcome";
import AppHomeFetch from "./AppHomeFetch";
import AppDate from "./AppDate";

function Home() {
  return (
    <Box px={4} pb={16}>
      <WelcomeLine />
      <AppDate />
      <CurrentLocation />
      <AppHomeCards />
      <AppHomeFetch />
    </Box>
  );
}

export default Home;
