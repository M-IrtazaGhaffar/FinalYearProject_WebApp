import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

function AppBlogDetailCard({ title, description, details, organization }) {
  return (
    <Flex gap={4} flexDirection={"column"}>
      <Flex gap={2} flexDirection={"column"}>
        <Text fontSize={"xs"} fontWeight={"thin"}>
          Title
        </Text>
        <Text>{title}</Text>
      </Flex>
      <Flex gap={2} flexDirection={"column"}>
        <Text fontSize={"xs"} fontWeight={"thin"}>
          Description
        </Text>
        <Text>{description}</Text>
      </Flex>
      <Flex gap={2} flexDirection={"column"}>
        <Text fontSize={"xs"} fontWeight={"thin"}>
          Details
        </Text>
        <Text>{details}</Text>
      </Flex>
      <Flex gap={2} flexDirection={"column"}>
        <Text fontSize={"xs"} fontWeight={"thin"}>
          Organization
        </Text>
        <Text>{organization}</Text>
      </Flex>
    </Flex>
  );
}

export default AppBlogDetailCard;
