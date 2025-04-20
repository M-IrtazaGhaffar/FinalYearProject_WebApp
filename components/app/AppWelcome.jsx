"use client";

import { Heading, Text } from "@chakra-ui/react";
import React from "react";

function WelcomeLine() {
  // Get the current hour to determine the time of day
  const currentHour = new Date().getHours();
  let greeting;

  if (currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return <Heading fontWeight={'semibold'} fontSize={'2xl'} mt={5} mx={2} color={'#199A8E'}>{greeting} there!</Heading>;
}

export default WelcomeLine;
