"use client";
import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "../../assets/1.png";
import Link from "next/link";
import Search from "./Search";

function Navbar() {
  return (
    <Flex
      color={"blackAlpha.600"}
      bg={"white"}
      p={4}
      justifyContent={"space-between"}
      alignItems={"center"}
      position={"-webkit-sticky"}
      top={0}
      w={"100%"}
      gap={5}
      border={"1px solid #eaeaea"}
    >
      <Link href={"/"}>
        <Image src={Logo} alt="logo" width={50} height={50} />
      </Link>
      <Search />
    </Flex>
  );
}

export default Navbar;
