import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import AppProductCard from "./AppProductCard";
import AppInfoCard from "./AppInfoCard";
import AppBlogCard from "./AppBlogCard";

async function AppHomeFetch() {
  const res = await fetch("http://13.203.196.191:8000/api/home", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return (
    <Box className="space-y-3">
      <Text fontWeight={"semibold"} fontSize={'xl'}>Recently Added by Us</Text>
      <Box>
        <Text fontSize={"xs"}>Products</Text>
        <Flex direction="row" overflowX="scroll" className="scrollbar-hide">
          {data.data.products.map((product, index) => (
            <AppProductCard
              name={product.name}
              formula={product.formula}
              organization={product.retailer.name}
              link={`/products/${product.id}`}
              key={index}
            />
          ))}
        </Flex>
      </Box>
      <hr />
      <Box>
        <Text fontSize={"xs"}>Blogs</Text>
        <Flex
          direction="row"
          gap={3}
          overflowX="scroll"
          className="scrollbar-hide"
        >
          {data.data.blogs.map((blog, index) => (
            <AppBlogCard
              title={blog.title}
              date={blog.updatedAt}
              organization={blog.organization.name}
              link={`/blogs/${blog.id}`}
              key={index}
            />
          ))}
        </Flex>
      </Box>
      <hr />
      <Box>
        <Text fontSize={"xs"}>Retailers</Text>
        <Flex
          direction="row"
          gap={3}
          overflowX="scroll"
          className="scrollbar-hide"
        >
          {data.data.retailers.map((item, index) => (
            <AppInfoCard
              owner={item.owner}
              name={item.name}
              phone={item.phone}
              email={item.email}
              address={item.address}
              link={`/retailers/${item.id}`}
              key={index}
            />
          ))}
        </Flex>
      </Box>
      <hr />
      <Box>
        <Text fontSize={"xs"}>Organizations</Text>
        <Flex
          direction="row"
          gap={3}
          overflowX="scroll"
          className="scrollbar-hide"
        >
          {data.data.organizations.map((item, index) => (
            <AppInfoCard
              owner={item.owner}
              name={item.name}
              phone={item.phone}
              email={item.email}
              address={item.address}
              link={`/organizations/${item.id}`}
              key={index}
            />
          ))}
        </Flex>
      </Box>
    </Box>
  );
}

export default AppHomeFetch;
