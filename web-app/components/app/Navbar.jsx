"use client";
import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "../../assets/1.png";

function Navbar() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();

    const suffixDay = (day) => {
      if (day === 1 || day === 21 || day === 31) {
        return `${day}st`;
      } else if (day === 2 || day === 22) {
        return `${day}nd`;
      } else if (day === 3 || day === 23) {
        return `${day}rd`;
      } else {
        return `${day}th`;
      }
    };

    const suffixMonth = (month) => {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return months[month];
    };

    suffixDay(date.getDate());

    setCurrentDate(
      suffixDay(suffixMonth(date.getMonth()) + " " + date.getDate()) +
        ", " +
        date.getFullYear()
    );
  }, []);
  return (
    <Flex
      color={"blackAlpha.600"}
      bg={"white"}
      py={4}
      px={8}
      justifyContent={"space-between"}
      alignItems={"center"}
      position={"-webkit-sticky"}
      top={0}
      w={"100%"}
      border={"1px solid #eaeaea"}
    >
      <Image src={Logo} alt="logo" width={50} height={50} />
      <Box textAlign={"end"}>
        {currentDate ? `${currentDate}` : "Loading..."}
        <br />
        Wednesday
      </Box>
    </Flex>
  );
}

export default Navbar;
