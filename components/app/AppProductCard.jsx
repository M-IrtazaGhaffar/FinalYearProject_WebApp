import { Card, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function AppProductCard({ name, organization, formula, link }) {
  return (
    <Card.Root
      size="md"
      bg={"white"}
      color={"black"}
      border={"1px solid #eaeaea"}
      w={{ base: "100%", md: "30vw" }}
      className="shadow-customShadow"
    >
      <Link href={link}>
        <Card.Header>
          <Heading fontSize="lg" color={"#199A8E"}>
            {name}
          </Heading>
        </Card.Header>
        <Card.Body color="fg.muted" fontSize={"xs"}>
          <Text fontSize={"xs"}>{formula}</Text>
          <Text fontSize={"sm"}>{organization}</Text>
        </Card.Body>
      </Link>
    </Card.Root>
  );
}

export default AppProductCard;
