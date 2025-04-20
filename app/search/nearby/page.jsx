"use client";

import {
  Text,
  Flex,
  Box,
  Heading,
  Card,
  CardHeader,
  CardBody,
} from "@chakra-ui/react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  ProgressCircleRing,
  ProgressCircleRoot,
} from "@/components/ui/progress-circle";
import Link from "next/link";
import SearchNearby from "@/components/app/SearchNearby";
import AppMapBox from "@/components/app/AppMapBox";

export default function page() {
  const query = useSearchParams().get("q") || "";
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [locationError, setLocationError] = useState("");

  // Get user location on mount
  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        setLocationError("Unable to retrieve your location.");
        console.error(error);
      }
    );
  }, []);

  // Fetch nearby results when query or location is available
  useEffect(() => {
    const fetchNearby = async () => {
      if (!query || !location.latitude || !location.longitude) return;

      setLoading(true);
      try {
        const res = await axios.post(
          "https://advancedpos.duckdns.org/api/searchnearby",
          {
            productName: query,
            latitude: location.latitude,
            longitude: location.longitude,
          }
        );
        console.log("Nearby search results:", res.data?.data);

        setSearchResults(res.data?.data);
      } catch (err) {
        console.error("Nearby search failed:", err);
        setSearchResults(null);
      } finally {
        setLoading(false);
      }
    };

    fetchNearby();
  }, [query, location]);

  return (
    <Box px={5} minH={"100vh"} pb={16}>
      <SearchNearby />
      <Text fontSize="md" fontWeight="thin" mb={4}>
        Searching Nearby for:{" "}
        <Text as="span" fontSize="xl" fontWeight="semibold">
          "{query}"
        </Text>
      </Text>

      {loading && (
        <Flex justifyContent="center" alignItems="center" py={6}>
          <ProgressCircleRoot value={null} size="sm" color="#199A8E">
            <ProgressCircleRing cap="round" color="#199A8E" />
          </ProgressCircleRoot>
        </Flex>
      )}

      {!loading && searchResults && searchResults.length > 0 ? (
        <Flex flexWrap="wrap" gap={6}>
          {searchResults.map((item) => (
            <Card.Root
              key={item.productId}
              size="md"
              bg="white"
              color="black"
              border="1px solid #eaeaea"
              w={{ base: "100%", md: "30vw" }}
              className="shadow-customShadow"
            >
              <Link href={`/products/${item.productId}`}>
                <CardHeader>
                  <Heading fontSize="lg" color="#199A8E">
                    {item.productName}
                  </Heading>
                </CardHeader>
                <CardBody color="fg.muted" fontSize="xs">
                  <Text fontSize="xs">
                    Formula: {item.productFormula || "N/A"}
                  </Text>

                  <Text fontSize="sm" fontWeight="medium">
                    {item.retailerName || "Unknown"}
                  </Text>

                  <br />

                  <Box color="gray.600" fontSize="md">
                    <Text fontSize="xs" fontWeight="light">
                      Address
                    </Text>
                    {item.retailerAddress}
                  </Box>

                  <br />

                  <Box color="gray.600" fontSize="md">
                    <Text fontSize="xs" fontWeight="light">
                      Price
                    </Text>
                    Rs. {item.price}
                  </Box>

                  <br />

                  <Box color="gray.600" fontSize="md">
                    <Text fontSize="xs" fontWeight="light">
                      Stock
                    </Text>
                    {item.stock}
                  </Box>

                  <br />

                  <Box color="gray.600" fontSize="md">
                    <Text fontSize="xs" fontWeight="light">
                      Distance
                    </Text>
                    {item.distance.toFixed(2)} km
                  </Box>
                </CardBody>
              </Link>
              <Box p={3}>
                <AppMapBox
                  latitude={item.retailerLatitude}
                  longitude={item.retailerLongitude}
                />
              </Box>
            </Card.Root>
          ))}
        </Flex>
      ) : (
        !loading &&
        query && (
          <Text textAlign="center" color="gray.500">
            No nearby results found.
          </Text>
        )
      )}

      {!loading && locationError && (
        <Text color="red.500" mt={2}>
          {locationError}
        </Text>
      )}
    </Box>
  );
}
