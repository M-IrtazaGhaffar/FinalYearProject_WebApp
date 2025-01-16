import { Flex, Text } from "@chakra-ui/react";
import React from "react";

function AppShowBox({ name, value }) {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} p={2}>
      <Text fontWeight={"thin"} fontSize={"xs"}>
        {name}
      </Text>
      <Text fontSize={"md"}>{value}</Text>
    </Flex>
  );
}

export default AppShowBox;
