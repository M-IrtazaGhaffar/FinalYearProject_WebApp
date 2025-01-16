import { Card, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function AppInfoCard({ name, owner, phone, email, address, link }) {
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
        <Text fontSize={"xs"} color={'gray.500'}>By {owner}</Text>
          <Heading fontSize="lg" color={"#199A8E"}>
            {name}
          </Heading>
        </Card.Header>
        <Card.Body color="fg.muted" fontSize={"xs"}>
          <Text fontSize={"xs"}>{phone}</Text>
          <Text fontSize={"xs"}>{email}</Text>
          <Text fontSize={"sm"}>{address}</Text>
        </Card.Body>
      </Link>
    </Card.Root>
  );
}

export default AppInfoCard;
