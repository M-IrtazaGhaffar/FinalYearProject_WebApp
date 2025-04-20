import AppProductCard from "@/components/app/AppProductCard";
import AppShowHeadBox from "@/components/app/AppShowHeadBox";
import SearchNearby from "@/components/app/SearchNearby";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";

async function page() {
  const res = await fetch("https://advancedpos.duckdns.org/api/product/get", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  
  return (
    <Box px={4} pb={16}>
      <AppShowHeadBox
        heading={"Medicines"}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#199A8E"
            className="bi bi-capsule"
            viewBox="0 0 16 16"
          >
            <path d="M1.828 8.9 8.9 1.827a4 4 0 1 1 5.657 5.657l-7.07 7.071A4 4 0 1 1 1.827 8.9Zm9.128.771 2.893-2.893a3 3 0 1 0-4.243-4.242L6.713 5.429z" />
          </svg>
        }
        detail={"Here are the medicines available in our registered stores."}
      />
      <SearchNearby />
      <hr />
      <Flex
        py={4}
        wrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={4}
      >
        {
          data.data.map((product, index) => (
            <AppProductCard
              name={product.name}
              formula={product.formula}
              organization={product.retailer.name}
              link={`/products/${product.id}`}
              key={index}
            />
          ))
        }
      </Flex>
    </Box>
  );
}

export default page;
