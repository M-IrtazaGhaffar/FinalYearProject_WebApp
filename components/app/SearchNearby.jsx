import { Box, Button, Input, Text } from "@chakra-ui/react";
import React from "react";

function Search() {
  return (
    <Box className="px-5 py-3 lg:p-10">
      <Text fontSize={"xs"}>
        Search Any Product Nearby
      </Text>
      <Box
        flex={1}
        px={3}
        display="flex"
        gap={3}
        alignItems="center"
        borderWidth="1px" // Use Chakra's borderWidth instead of Tailwind's border-[1px]
        borderColor="gray.300" // Use Chakra's borderColor
        borderRadius="md" // Use Chakra's borderRadius
      >
        <Input
          placeholder="Search Nearby Products" // Add a placeholder for better UX
          _focus={{ outline: "none" }} // Use Chakra's _focus instead of Tailwind's onfocus
        />
        <Button colorScheme="blue">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </Button>
        {/* Add a color scheme for better styling */}
      </Box>
    </Box>
  );
}

export default Search;
