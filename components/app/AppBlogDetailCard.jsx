import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

function AppBlogDetailCard({
  title,
  description,
  details,
  organization,
  date,
  email,
  phone,
  address,
}) {
  return (
    <Flex gap={4} flexDirection={"column"}>
      <Flex gap={2} flexDirection={"column"}>
        <Text fontSize={"xs"} fontWeight={"thin"}>
          Title
        </Text>
        <Text>{title}</Text>
      </Flex>
      <hr />
      <Flex gap={2} flexDirection={"column"}>
        <Text fontSize={"xs"} fontWeight={"thin"}>
          Description
        </Text>
        <Text>{description}</Text>
      </Flex>
      <hr />
      <Flex gap={2} flexDirection={"column"}>
        <Text fontSize={"xs"} fontWeight={"thin"}>
          Details
        </Text>
        <Text>{details}</Text>
      </Flex>
      <hr />
      <Flex gap={2} flexDirection={"column"}>
        <Text fontSize={"xs"} fontWeight={"thin"}>
          Organization Name
        </Text>
        <Text>{organization}</Text>
      </Flex>
      <hr />
      <Flex gap={2} flexDirection={"column"}>
        <Text fontSize={"xs"} fontWeight={"thin"}>
          Organization Email
        </Text>
        <Text>{email}</Text>
      </Flex>
      <hr />
      <Flex gap={2} flexDirection={"column"}>
        <Text fontSize={"xs"} fontWeight={"thin"}>
          Organization Phone
        </Text>
        <Text>{phone}</Text>
      </Flex>
      <hr />
      <Flex gap={2} flexDirection={"column"}>
        <Text fontSize={"xs"} fontWeight={"thin"}>
          Organization Address
        </Text>
        <Text>{address}</Text>
      </Flex>
      <hr />
      <Flex gap={2} flexDirection={"column"}>
        <Text fontSize={"xs"} fontWeight={"thin"}>
          Date Updated
        </Text>
        <Text>{date.split("T")[0]}</Text>
      </Flex>
    </Flex>
  );
}

export default AppBlogDetailCard;
