"use client";

import { Text, Flex, Box } from "@chakra-ui/react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  ProgressCircleRing,
  ProgressCircleRoot,
} from "@/components/ui/progress-circle";
import AppProductCard from "@/components/app/AppProductCard";
import AppBlogCard from "@/components/app/AppBlogCard";
import AppInfoCard from "@/components/app/AppInfoCard";

export default function Page() {
  const query = useSearchParams().get("q") || "";
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) return;
      setLoading(true);

      try {
        const res = await axios.post("https://13.203.196.191/api/search", {
          query,
        });
        setSearchResults(res.data?.data);
      } catch (error) {
        console.error("Failed to fetch search results:", error);
        setSearchResults(null);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  return (
    <Box>
      <Text fontSize="md" fontWeight="thin" m={4}>
        Search Results for{" "}
        <Text as="span" fontSize="xl" fontWeight="normal">
          "{query}"
        </Text>
      </Text>

      {loading && (
        <Flex justifyContent="center" alignItems="center" w="100%" py={6}>
          <ProgressCircleRoot value={null} size="sm" color="#199A8E">
            <ProgressCircleRing cap="round" color="#199A8E" />
          </ProgressCircleRoot>
        </Flex>
      )}

      {!loading && searchResults ? (
        <>
          {/* ✅ Products Section */}
          {searchResults.products?.length > 0 && (
            <Box px={4} mb={6}>
              <Text fontSize="xs" mb={2}>
                Products
              </Text>
              <Flex
                direction="row"
                overflowX="auto"
                className="scrollbar-hide"
                gap={3}
              >
                {searchResults.products.map((product, index) => (
                  <Box key={index} minWidth="300px" flexShrink={0}>
                    <AppProductCard
                      name={product.name}
                      formula={product.formula || "N/A"}
                      organization={product.retailer?.name || "Unknown"}
                      link={`/products/${product.id}`}
                    />
                  </Box>
                ))}
              </Flex>
            </Box>
          )}

          {/* ✅ Blogs Section */}
          {searchResults.blogs?.length > 0 && (
            <Box px={4} mb={6}>
              <Text fontSize="xs" mb={2}>
                Blogs
              </Text>
              <Flex
                direction="row"
                overflowX="auto"
                className="scrollbar-hide"
                gap={3}
              >
                {searchResults.blogs.map((blog, index) => (
                  <Box key={index} minWidth="300px" flexShrink={0}>
                    <AppBlogCard
                      title={blog.title}
                      date={blog.updatedAt}
                      organization={blog.organization?.name || "Unknown"}
                      link={`/blogs/${blog.id}`}
                    />
                  </Box>
                ))}
              </Flex>
            </Box>
          )}

          {/* ✅ Retailers Section */}
          {searchResults.retailers?.length > 0 && (
            <Box px={4} mb={6}>
              <Text fontSize="xs" mb={2}>
                Retailers
              </Text>
              <Flex
                direction="row"
                overflowX="auto"
                className="scrollbar-hide"
                gap={3}
              >
                {searchResults.retailers.map((item, index) => (
                  <Box key={index} minWidth="300px" flexShrink={0}>
                    <AppInfoCard
                      owner={item.owner}
                      name={item.name}
                      phone={item.phone}
                      email={item.email}
                      address={item.address}
                      link={`/retailers/${item.id}`}
                    />
                  </Box>
                ))}
              </Flex>
            </Box>
          )}

          {/* ✅ Organizations Section */}
          {searchResults.organizations?.length > 0 && (
            <Box px={4} mb={6}>
              <Text fontSize="xs" mb={2}>
                Organizations
              </Text>
              <Flex
                direction="row"
                overflowX="auto"
                className="scrollbar-hide"
                gap={3}
              >
                {searchResults.organizations.map((item, index) => (
                  <Box key={index} minWidth="300px" flexShrink={0}>
                    <AppInfoCard
                      owner={item.owner}
                      name={item.name}
                      phone={item.phone}
                      email={item.email}
                      address={item.address}
                      link={`/organizations/${item.id}`}
                    />
                  </Box>
                ))}
              </Flex>
            </Box>
          )}
        </>
      ) : (
        !loading && (
          <Text textAlign="center" color="gray.500" mt={4}>
            No results found or failed to fetch.
          </Text>
        )
      )}
    </Box>
  );
}
