import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Blogs from "@/assets/blogs.jpg";
import Retailer from "@/assets/retailer.jpg";
import Organization from "@/assets/organization.jpg";
import Products from "@/assets/medicine.jpg";
import Image from "next/image";
import Link from "next/link";

function AppHomeCards() {
  // Array of card data
  const cards = [
    {
      id: 1,
      title: "Products",
      image: Products,
      link: "/products",
      width: 400,
      height: 200,
    },
    {
      id: 2,
      title: "Retailers",
      image: Retailer,
      link: "/retailers",
      width: 400,
      height: 200,
    },
    {
      id: 3,
      title: "Organizations",
      image: Organization,
      link: "/organizations",
      width: 400,
      height: 200,
    },
    {
      id: 4,
      title: "Blogs",
      image: Blogs,
      link: "/blogs",
      width: 400,
      height: 200,
    },
  ];

  return (
    <Flex
      justifyContent="space-between"
      mt={4}
      gap={2}
      className="flex-wrap lg:flex-nowrap"
    >
      {cards.map((card) => (
        <Link key={card.id} href={card.link}>
          <Box position="relative" className="cursor-pointer">
            <Image
              src={card.image}
              alt={card.title}
              className="rounded-2xl shadow-lg border-[1px] border-gray-300"
              width={card.width}
              height={card.height}
            />
            <Text
              position="absolute"
              bottom={4}
              left={4}
              fontSize="lg"
              fontWeight="bold"
              color="white"
              textShadow="0px 2px 4px rgba(0, 0, 0, 0.5)"
            >
              {card.title}
            </Text>
          </Box>
        </Link>
      ))}
    </Flex>
  );
}

export default AppHomeCards;