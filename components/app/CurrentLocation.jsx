"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Card, Heading, Text } from "@chakra-ui/react";
import AppMapBox from "./AppMapBox";
import useCurrentLocation from "./useCurrentLocation";

function CurrentLocation() {
  // const [location, setLocation] = useState({
  //   latitude: null,
  //   longitude: null,
  //   area: null,
  //   error: null,
  // });

  // // Fetch the user's current location
  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       async (position) => {
  //         const { latitude, longitude } = position.coords;
  //         setLocation((prev) => ({
  //           ...prev,
  //           latitude,
  //           longitude,
  //         }));

  //         // Fetch the area using reverse geocoding
  //         try {
  //           const response = await axios.get(
  //             `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=f4f1a9bdc0ee47a7a6da5124b3d5dcdb`
  //           );
  //           const area = response.data.results[0].formatted;
  //           setLocation((prev) => ({
  //             ...prev,
  //             area,
  //           }));
  //         } catch (error) {
  //           setLocation((prev) => ({
  //             ...prev,
  //             error: "Failed to fetch area information.",
  //           }));
  //         }
  //       },
  //       (error) => {
  //         setLocation((prev) => ({
  //           ...prev,
  //           error: error.message,
  //         }));
  //       }
  //     );
  //   } else {
  //     setLocation((prev) => ({
  //       ...prev,
  //       error: "Geolocation is not supported by this browser.",
  //     }));
  //   }
  // }, []);

  const { area, error, latitude, longitude } = useCurrentLocation();

  if (!area) {
    return null;
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
        <Heading fontSize="lg" color={"#199A8E"}>
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
      <AppMapBox latitude={latitude} longitude={longitude} />
    </Card.Root>
  );
}

export default CurrentLocation;
