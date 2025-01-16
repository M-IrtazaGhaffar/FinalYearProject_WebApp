import AppShowHeadBox from "@/components/app/AppShowHeadBox";
import { Box, Card, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <Box px={4} pb={16}>
      <AppShowHeadBox
        heading={"Medicines"}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#199A8E"
            className="bi bi-capsule"
            viewBox="0 0 16 16"
          >
            <path d="M1.828 8.9 8.9 1.827a4 4 0 1 1 5.657 5.657l-7.07 7.071A4 4 0 1 1 1.827 8.9Zm9.128.771 2.893-2.893a3 3 0 1 0-4.243-4.242L6.713 5.429z" />
          </svg>
        }
        detail={"Here are the medicines available in our registered stores."}
      />
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
          className="shadow-customShadow"
        >
          <Link href={"/products/1"}>
            <Card.Header>
              <Heading fontSize="lg" color={"#199A8E"}>
                Product Name
              </Heading>
            </Card.Header>
            <Card.Body color="fg.muted" fontSize={"xs"}>
              <Text fontSize={"xs"}>Product Formula</Text>
              <Text fontSize={"sm"}>Organization Name</Text>
            </Card.Body>
          </Link>
        </Card.Root>
      </Flex>
    </Box>
  );
}

export default page;
