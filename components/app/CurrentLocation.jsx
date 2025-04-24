"use client";
import React from "react";
import { Box, Card, Heading, Spinner, Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import {
  ProgressCircleRing,
  ProgressCircleRoot,
} from "@/components/ui/progress-circle";
import AppMapBox from "./AppMapBox";
import useCurrentLocation from "./useCurrentLocation";

function CurrentLocation() {
  const { area, error, latitude, longitude, loading } = useCurrentLocation();

  // if (!area) {
  //   return null;
  // }

  if (loading) {
    return (
      <Flex
        justifyContent="center"
        alignItems="center"
        minH="50vh"
        w={"100%"}
        color={"#199A8E"}
      >
        <ProgressCircleRoot value={null} size="sm" color={"#199A8E"}>
          <ProgressCircleRing cap="round" color={"#199A8E"} />
        </ProgressCircleRoot>
      </Flex>
    );
  }

  return (
    <Card.Root
      size="md"
      bg={"white"}
      color={"black"}
      border={"1px solid #eaeaea"}
      className="shadow-customShadow"
      my={3}
    >
      <Card.Header>
        <Text fontSize={"xs"} color={"gray.500"}>
          Your Current Location
        </Text>
        <Heading fontSize="lg" fontWeight={"semibold"} mt={1}>
          {area ? area.charAt(0).toUpperCase() + area.slice(1) : ""}
        </Heading>
      </Card.Header>
      <Card.Body color="fg.muted" fontSize={"xs"}>
        <Text fontSize={"xs"}>Longitude</Text>
        <Text fontSize={"sm"} fontWeight={"semibold"}>
          {longitude}
        </Text>
        <Text fontSize={"xs"}>Latitude</Text>
        <Text fontSize={"sm"} fontWeight={"semibold"}>
          {latitude}
        </Text>
      </Card.Body>
      <Box p={3}>
        {error && (
          <Text
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            fontSize={"sm"}
            color={"red.500"}
          >
            {error}
          </Text>
        )}
        <AppMapBox latitude={latitude} longitude={longitude} />
      </Box>
    </Card.Root>
  );
}

export default CurrentLocation;
