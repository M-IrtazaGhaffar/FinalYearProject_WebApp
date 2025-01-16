import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

function AppShowHeadBox({ heading, detail, icon }) {
  return (
    <Box py={2}>
      <Flex alignItems={"center"} gap={2}>
        {icon}
        <Heading fontWeight={"bold"} fontSize={"2xl"}>
          {heading}
        </Heading>
      </Flex>
      <Text fontWeight={"thin"} fontSize={"xs"}>
        {detail}
      </Text>
    </Box>
  );
}

export default AppShowHeadBox;
