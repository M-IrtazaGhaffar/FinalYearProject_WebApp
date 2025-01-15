import { Box, Card, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

function page() {
  return (
    <Box px={4} pb={12}>
      <Flex alignItems={"center"} gap={2}>
      <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#199A8E"
            className="bi bi-body-text"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M0 .5A.5.5 0 0 1 .5 0h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 0 .5m0 2A.5.5 0 0 1 .5 2h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m9 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-9 2A.5.5 0 0 1 .5 4h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m5 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m7 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-12 2A.5.5 0 0 1 .5 6h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m8 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-8 2A.5.5 0 0 1 .5 8h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m7 0a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-7 2a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"
            />
          </svg>
        <Heading fontWeight={"bold"} fontSize={"2xl"}>
          Blogs by Organizations
        </Heading>
      </Flex>
      <Text fontWeight={"thin"} fontSize={"xs"}>
        Here are the blogs posted by the registered organizations about medicines and their uses.
      </Text>
      <Flex
        py={4}
        wrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={4}
      >
        <Card.Root
          size="md"
          bg={"white"}
          color={"black"}
          border={"1px solid #eaeaea"}
          w={{ base: "100%", md: "30vw" }}
        >
          <Card.Header>
            <Heading fontSize="lg" color={'#199A8E'}>Title</Heading>
          </Card.Header>
          <Card.Body color="fg.muted" fontSize={"xs"}>
            <Text fontSize={"xs"}>Date</Text>
            <Text fontSize={"sm"}>Organization Name</Text>
          </Card.Body>
        </Card.Root>
      </Flex>
    </Box>
  );
}

export default page;
