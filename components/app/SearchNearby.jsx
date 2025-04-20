"use client";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SearchNearby() {
  const [Query, setQuery] = useState("");
  const router = useRouter();
  const handleClick = () => {
    if (!Query.trim()) return;

    // Push to /search?q=your_query
    router.push(`/search/nearby?q=${encodeURIComponent(Query)}`);
  };
  return (
    <Box
      className="p-5 my-3 rounded-3xl"
      bgColor={"#199A8E"}
      borderRadius={"md"}
      display="flex"
      alignItems={"center"}
      flexWrap={"wrap"}
      gap={3}
      color={"white"}
      justifyContent="space-between"
      boxShadow="lg"
    >
      <Text>Want Your Any Desired Products Nearby?</Text>
      <Box
        flex={1}
        px={3}
        display="flex"
        gap={3}
        alignItems="center"
        borderWidth="1px"
        borderColor="gray.300"
        borderRadius="md"
        maxW={'500px'}
      >
        <Input
          placeholder="Search here..."
          _focus={{ outline: "none" }}
          _placeholder={{ color: "white" }}
          onChange={(e) => setQuery(e.target.value)}
          value={Query}
        />

        <Button colorScheme="blue">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
            onClick={handleClick}
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </Button>
        {/* Add a color scheme for better styling */}
      </Box>
    </Box>
  );
}

export default SearchNearby;
