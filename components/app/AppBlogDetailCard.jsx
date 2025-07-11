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
        <Text fontSize={"xs"} fontWeight={"thin"}>Title</Text>
        <Text whiteSpace="pre-wrap" wordBreak="break-word">{title}</Text>
      </Flex>
      <hr />
      <Flex gap={2} flexDirection={"column"}>
        <Text fontSize={"xs"} fontWeight={"thin"}>Description</Text>
        <Text whiteSpace="pre-wrap" wordBreak="break-word">{description}</Text>
      </Flex>
      <hr />
      <Flex gap={2} flexDirection={"column"}>
        <Text fontSize={"xs"} fontWeight={"thin"}>Details</Text>
        <Text whiteSpace="pre-wrap" wordBreak="break-word">{details}</Text>
      </Flex>
      <hr />
      <Flex gap={2} flexDirection={"column"}>
        <Text fontSize={"xs"} fontWeight={"thin"}>Organization Name</Text>
        <Text whiteSpace="pre-wrap" wordBreak="break-word">{organization}</Text>
      </Flex>
      <hr />
      <Flex gap={2} flexDirection={"column"}>
        <Text fontSize={"xs"} fontWeight={"thin"}>Organization Email</Text>
        <Text whiteSpace="pre-wrap" wordBreak="break-word">{email}</Text>
      </Flex>
      <hr />
      <Flex gap={2} flexDirection={"column"}>
        <Text fontSize={"xs"} fontWeight={"thin"}>Organization Phone</Text>
        <Text whiteSpace="pre-wrap" wordBreak="break-word">{phone}</Text>
      </Flex>
      <hr />
      <Flex gap={2} flexDirection={"column"}>
        <Text fontSize={"xs"} fontWeight={"thin"}>Organization Address</Text>
        <Text whiteSpace="pre-wrap" wordBreak="break-word">{address}</Text>
      </Flex>
      <hr />
      <Flex gap={2} flexDirection={"column"}>
        <Text fontSize={"xs"} fontWeight={"thin"}>Date Updated</Text>
        <Text>{date.split("T")[0]}</Text>
      </Flex>
    </Flex>
  );
}

export default AppBlogDetailCard;
