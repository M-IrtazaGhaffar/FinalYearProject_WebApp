import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import AppProductCard from "./AppProductCard";
import AppInfoCard from "./AppInfoCard";
import AppBlogCard from "./AppBlogCard";

async function fetchHomeData() {
  try {
    const res = await fetch("https://advancedpos.duckdns.org/api/home", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    const data = await res.json();

    if (!res.ok || !data.success) {
      throw new Error(data.message || "Failed to fetch home data");
    }

    return data.data;
  } catch (error) {
    console.error("Error fetching home data:", error);
    return null;
  }
}

export default function AppHomeFetch() {
  return (
    <React.Suspense fallback={<p>Loading...</p>}>
      <HomeContent />
    </React.Suspense>
  );
}

async function HomeContent() {
  const data = await fetchHomeData();

  if (!data) {
    return (
      <Box className="py-10 text-center">
        <Text color="red.500" fontWeight="bold">
          Failed to load home content.
        </Text>
        <Text fontSize="sm">Please try again later.</Text>
      </Box>
    );
  }

  return (
    <Box className="space-y-3 pt-3">
      <Text fontWeight={"semibold"} fontSize={"xl"}>
        Recently Added by Us
      </Text>

      {/* Products Section */}
      <Box>
        <Text fontSize={"xs"}>Products</Text>
        <Flex direction="row" overflowX="auto" className="scrollbar-hide" gap={3}>
          {data.products?.map((product, index) => (
            <Box key={index} minWidth="300px" flexShrink={0}>
              <AppProductCard
                name={product?.name}
                formula={product?.formula}
                organization={product?.organization?.name}
                link={`/products/${product.id}`}
              />
            </Box>
          ))}
        </Flex>
      </Box>

      <hr />

      {/* Blogs Section */}
      <Box>
        <Text fontSize={"xs"}>Blogs</Text>
        <Flex direction="row" overflowX="auto" className="scrollbar-hide" gap={3}>
          {data.blogs?.map((blog, index) => (
            <Box key={index} minWidth="300px" flexShrink={0}>
              <AppBlogCard
                title={blog?.title}
                date={blog?.updatedAt}
                organization={blog?.organization?.name}
                link={`/blogs/${blog.id}`}
              />
            </Box>
          ))}
        </Flex>
      </Box>

      <hr />

      {/* Retailers Section */}
      <Box>
        <Text fontSize={"xs"}>Retailers</Text>
        <Flex direction="row" overflowX="auto" className="scrollbar-hide" gap={3}>
          {data.retailers?.map((item, index) => (
            <Box key={index} minWidth="300px" flexShrink={0}>
              <AppInfoCard
                owner={item?.owner}
                name={item?.name}
                phone={item?.phone}
                email={item?.email}
                address={item?.address}
                link={`/retailers/${item.id}`}
              />
            </Box>
          ))}
        </Flex>
      </Box>

      <hr />

      {/* Organizations Section */}
      <Box>
        <Text fontSize={"xs"}>Organizations</Text>
        <Flex direction="row" overflowX="auto" className="scrollbar-hide" gap={3}>
          {data.organizations?.map((item, index) => (
            <Box key={index} minWidth="300px" flexShrink={0}>
              <AppInfoCard
                owner={item?.owner}
                name={item?.name}
                phone={item?.phone}
                email={item?.email}
                address={item.address}
                link={`/organizations/${item.id}`}
              />
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
