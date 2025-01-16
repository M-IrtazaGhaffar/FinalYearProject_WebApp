import { Button } from "@/components/ui/button";
import { Box, Flex, Heading, Input, Text } from "@chakra-ui/react";
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
          className="bi bi-chat-square-dots"
          viewBox="0 0 16 16"
        >
          <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
          <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
        </svg>
        <Heading fontWeight={"bold"} fontSize={"2xl"}>
          MediChat Bot
        </Heading>
      </Flex>
      <Text fontWeight={"thin"} fontSize={"xs"}>
        Ask your queries about medicines and their uses with our well-trained
        chatbot.
      </Text>
      <Flex
        py={4}
        wrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={4}
      >
        <Flex
          flexDir={"column"}
          gap={2}
          w={"100%"}
          justifyContent={"space-between"}
          pb={16}
        >
          <Box
            p={4}
            bg={"gray.100"}
            color={"black"}
            border={"1px solid"}
            borderColor={"gray.200"}
            w={"90%"}
            borderTopLeftRadius={15}
            borderTopRightRadius={15}
            borderBottomLeftRadius={15}
            alignSelf={"flex-end"}
            className="shadow-customShadow"
          >
            <Text fontSize={"xs"} fontWeight={"thin"} textAlign={"right"}>
              User (You)
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              minima.
            </Text>
          </Box>
          <Box
            p={4}
            bg={"#137A6D"}
            color={"white"}
            border={"1px solid"}
            borderColor={"gray.200"}
            w={"90%"}
            borderTopLeftRadius={15}
            borderTopRightRadius={15}
            borderBottomRightRadius={15}
            className="shadow-customShadow"
          >
            <Text fontSize={"xs"} fontWeight={"thin"}>
              Chatbot
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              dolore ipsam maxime? Exercitationem quam molestiae nobis eligendi
              ullam aliquid, consequatur velit, iste eos iure quod quia
              voluptatibus aut vero qui debitis fugiat eveniet ratione
              cupiditate iusto delectus est harum fuga quasi? Magnam laborum
              architecto sunt saepe eaque itaque a repellendus.
            </Text>
          </Box>
          <Box
            p={4}
            bg={"gray.100"}
            color={"black"}
            border={"1px solid"}
            borderColor={"gray.200"}
            w={"90%"}
            borderTopLeftRadius={15}
            borderTopRightRadius={15}
            borderBottomLeftRadius={15}
            alignSelf={"flex-end"}
            className="shadow-customShadow"
          >
            <Text fontSize={"xs"} fontWeight={"thin"} textAlign={"right"}>
              User (You)
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              minima.
            </Text>
          </Box>
          <Box
            p={4}
            bg={"#137A6D"}
            color={"white"}
            border={"1px solid"}
            borderColor={"gray.200"}
            w={"90%"}
            borderTopLeftRadius={15}
            borderTopRightRadius={15}
            borderBottomRightRadius={15}
            className="shadow-customShadow"
          >
            <Text fontSize={"xs"} fontWeight={"thin"}>
              Chatbot
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              dolore ipsam maxime? Exercitationem quam molestiae nobis eligendi
              ullam aliquid, consequatur velit, iste eos iure quod quia
              voluptatibus aut vero qui debitis fugiat eveniet ratione
              cupiditate iusto delectus est harum fuga quasi? Magnam laborum
              architecto sunt saepe eaque itaque a repellendus.
            </Text>
          </Box>
        </Flex>
        <Flex
          gap={2}
          w={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          position={"fixed"}
          bottom={'70px'}
          mx={'2'}
        >
          <Input
            p={4}
            bg={"gray.50"}
            border={"1px solid"}
            borderColor={"gray.200"}
            placeholder={"Type your query here..."}
            w={"85vw"}
          />
          <Button variant="surface" p={4}>
            Send
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default page;
