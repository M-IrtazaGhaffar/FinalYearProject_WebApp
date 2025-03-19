import AppShowHeadBox from "@/components/app/AppShowHeadBox";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

async function page({ params }) {

  const p = await params;

  const res = await fetch(
    "http://13.203.196.191:8000/api/product/getbyid",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: p.id }),
    }
  );
  
  const data = await res.json();

  return (
    <Flex px={4} pb={16} flexDirection={"column"} gap={4}>
      <AppShowHeadBox
        heading={"Medicine Details"}
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
        detail={
          "These details are totally authentic and are provided by the real suppliers by the registered organization."
        }
      />
      <Box gap={4}>
        <Text fontSize={"xs"} fontWeight={"thin"}>
          Reg ID
        </Text>
        <Text>{data.data.id}</Text>
      </Box>
      <hr />
      <Box gap={4}>
        <Text fontSize={"xs"} fontWeight={"thin"}>
          Name
        </Text>
        <Text>{data.data.name}</Text>
      </Box>
      <Box gap={4}>
        <Text fontSize={"xs"} fontWeight={"thin"}>
          Formula
        </Text>
        <Text>{data.data.formula}</Text>
      </Box>
      <hr />
      <Box gap={4}>
        <Text fontSize={"xs"} fontWeight={"thin"}>
          Description
        </Text>
        <Text>
         {data.data.description}
        </Text>
      </Box>
      <hr />
      <Box gap={4}>
        <Text fontSize={"xs"} fontWeight={"thin"}>
          Detail
        </Text>
        <Text>
          {data.data.detail}
        </Text>
      </Box>
      <hr />
      <Box gap={4}>
        <Text fontSize={"xs"} fontWeight={"thin"}>
          Consumption
        </Text>
        <Text>
          {data.data.consumption}
        </Text>
      </Box>
      <hr />
      <Box gap={4}>
        <Text fontSize={"xs"} fontWeight={"thin"}>
          Side Effects
        </Text>
        <Text>
          {data.data.sideeffects}
        </Text>
      </Box>
      <hr />
      <Box gap={4}>
        <Text fontSize={"xs"} fontWeight={"thin"}>
          Others
        </Text>
        <Text>
         {data.data.other}
        </Text>
      </Box>
      <hr />
      <Box gap={4}>
        <Text fontSize={"xs"} fontWeight={"thin"}>
          Organization Name
        </Text>
        <Text>{data.data.retailer.name}</Text>
      </Box>
      <Box gap={4}>
        <Text fontSize={"xs"} fontWeight={"thin"}>
          Organization Email
        </Text>
        <Text>{data.data.retailer.email}</Text>
      </Box>
      <Box gap={4}>
        <Text fontSize={"xs"} fontWeight={"thin"}>
          Organization Phone
        </Text>
        <Text>{data.data.retailer.phone}</Text>
      </Box>
      <Box gap={4}>
        <Text fontSize={"xs"} fontWeight={"thin"}>
          Organization Address
        </Text>
        <Text>{data.data.retailer.address}</Text>
      </Box>
    </Flex>
  );
}

export default page;
