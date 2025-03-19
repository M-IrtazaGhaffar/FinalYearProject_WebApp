import { Card, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function AppBlogCard({ title, date, organization, link }) {
  console.log(date);
  
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
            {title}
          </Heading>
        </Card.Header>
        <Card.Body color="fg.muted" fontSize={"xs"}>
          <Text fontSize={"xs"}>
            {date.split("T")[0]} 
          </Text>
          <Text fontSize={"sm"}>By {organization}</Text>
        </Card.Body>
      </Link>
    </Card.Root>
  );
}

export default AppBlogCard;
