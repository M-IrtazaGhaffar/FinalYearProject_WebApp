import AppInfoCard from "@/components/app/AppInfoCard";
import AppShowHeadBox from "@/components/app/AppShowHeadBox";
import { Box, Card, Flex } from "@chakra-ui/react";
import React from "react";

async function page() {
  const res = await fetch("https://13.203.196.191/api/retailer/get", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  
  return (
    <Box px={4} pb={16}>
      <AppShowHeadBox
        heading={"Retailers"}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#199A8E"
            className="bi bi-buildings"
            viewBox="0 0 16 16"
          >
            <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z" />
            <path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z" />
          </svg>
        }
        detail={"Here are the registered retailers in our system."}
      />
      <Flex
        py={4}
        wrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={4}
      >
        {data.data.map((item, index) => {
          return (
            <AppInfoCard
              owner={item.owner}
              name={item.name}
              phone={item.phone}
              email={item.email}
              address={item.address}
              link={`/retailers/${item.id}`}
              key={index}
            />
          );
        })}
      </Flex>
    </Box>
  );
}

export default page;
