"use client";

import { Text, Flex, Box } from "@chakra-ui/react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  ProgressCircleRing,
  ProgressCircleRoot,
} from "@/components/ui/progress-circle";
import useCurrentLocation from "@/components/app/useCurrentLocation";

export default function SearchNearby() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const { latitude, longitude, error: locationError } = useCurrentLocation();

  const handleSearch = async () => {
    if (!query || !latitude || !longitude) return;
    setLoading(true);
    try {
      const res = await axios.post(
        "http://13.203.196.191:8000/api/searchnearby",
        {
          productName: query,
          latitude,
          longitude,
        }
      );
      setSearchResults(res.data?.data);
    } catch (err) {
      console.error("Nearby search failed:", err);
      setSearchResults(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Trigger search when query changes (optional)
    const delayDebounce = setTimeout(() => {
      if (query) handleSearch();
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [query, latitude, longitude]);

  return (
    <Box p={4}>

      {loading && (
        <Flex justifyContent="center" alignItems="center" py={6}>
          <ProgressCircleRoot value={null} size="sm" color="#199A8E">
            <ProgressCircleRing cap="round" color="#199A8E" />
          </ProgressCircleRoot>
        </Flex>
      )}

      {!loading && searchResults && searchResults.length > 0 ? (
        <Box>
          {searchResults.map((item) => (
            <Box
              key={item.productId}
              border="1px solid #ccc"
              borderRadius="lg"
              p={4}
              mb={4}
              bg="white"
            >
              <Text fontWeight="bold">{item.productName}</Text>
              <Text>Formula: {item.productFormula}</Text>
              <Text>Retailer: {item.retailerName}</Text>
              <Text>Address: {item.retailerAddress}</Text>
              <Text>Price: Rs. {item.price}</Text>
              <Text>Stock: {item.stock}</Text>
              <Text>Distance: {item.distance.toFixed(2)} km</Text>
            </Box>
          ))}
        </Box>
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
