import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import CurrentLocation from "./CurrentLocation";
import SearchNearby from "./SearchNearby";
import AppHomeCards from "./AppHomeCards";
import WelcomeLine from "./AppWelcome";
import AppHomeFetch from "./AppHomeFetch";

function Home() {
  return (
    <Box px={4} pb={16}>
      <WelcomeLine />
      {/* <CurrentLocation /> */}
      <AppHomeCards />
      <SearchNearby />
      <AppHomeFetch />
    </Box>
  );
}

export default Home;
