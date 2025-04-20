"use client";

import { Button } from "@/components/ui/button";
import { Box, Flex, Heading, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";

function page() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const res = await fetch("https://13.203.196.191/api/chatbot/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: input }),
      });

      const data = await res.json();
      console.log(data?.data?.solution);
      
      const botMsg = {
        sender: "bot",
        text: data?.data?.solution || "No response from chatbot.",
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.log(error);
      
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Something went wrong. Please try again." },
      ]);
    }

    setInput("");
    setLoading(false);
  };

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
          {messages.map((msg, index) => (
            <Box
              key={index}
              p={4}
              bg={msg.sender === "user" ? "gray.100" : "#137A6D"}
              color={msg.sender === "user" ? "black" : "white"}
              border={"1px solid"}
              borderColor={"gray.200"}
              w={"90%"}
              borderTopLeftRadius={15}
              borderTopRightRadius={15}
              borderBottomLeftRadius={msg.sender === "user" ? 15 : 0}
              borderBottomRightRadius={msg.sender === "user" ? 0 : 15}
              alignSelf={msg.sender === "user" ? "flex-end" : "flex-start"}
              className="shadow-customShadow"
            >
              <Text
                fontSize={"xs"}
                fontWeight={"thin"}
                textAlign={msg.sender === "user" ? "right" : "left"}
              >
                {msg.sender === "user" ? "User (You)" : "Chatbot"}
              </Text>
              <Text>{msg.text}</Text>
            </Box>
          ))}
        </Flex>
        <Flex
          gap={2}
          className="shadow-customShadow"
          w={"90%"}
          justifyContent={"center"}
          alignItems={"center"}
          position={"fixed"}
          bottom={"60px"}
          bg={"white"}
          p={2}
          borderRadius={"xl"}
        >
          <Input
            p={4}
            bg={"gray.50"}
            border={"1px solid"}
            borderColor={"gray.200"}
            placeholder={"Type your query here..."}
            w={"85vw"}
            value={input}
            disabled={loading}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <Button
            variant="surface"
            p={4}
            onClick={sendMessage}
          >
            {loading ? "Sending..." : "Send"}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default page;
