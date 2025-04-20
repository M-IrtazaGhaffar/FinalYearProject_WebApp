import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import AppProductCard from "./AppProductCard";
import AppInfoCard from "./AppInfoCard";
import AppBlogCard from "./AppBlogCard";

async function AppHomeFetch() {
  const res = await fetch("https://advancedpos.duckdns.org//api/home", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return (
    <Box className="space-y-3 pt-3">
      <Text fontWeight={"semibold"} fontSize={"xl"}>
        Recently Added by Us
      </Text>

      {/* Products Section */}
      <Box>
        <Text fontSize={"xs"}>Products</Text>
        <Flex direction="row" overflowX="auto" className="scrollbar-hide" gap={3}>
          {data.data.products.map((product, index) => (
            <Box key={index} minWidth="300px" flexShrink={0}>
              <AppProductCard
                name={product.name}
                formula={product.formula}
                organization={product.retailer.name}
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
          {data.data.blogs.map((blog, index) => (
            <Box key={index} minWidth="300px" flexShrink={0}>
              <AppBlogCard
                title={blog.title}
                date={blog.updatedAt}
                organization={blog.organization.name}
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
          {data.data.retailers.map((item, index) => (
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

      <hr />

      {/* Organizations Section */}
      <Box>
        <Text fontSize={"xs"}>Organizations</Text>
        <Flex direction="row" overflowX="auto" className="scrollbar-hide" gap={3}>
          {data.data.organizations.map((item, index) => (
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
    </Box>
  );
}

export default AppHomeFetch;