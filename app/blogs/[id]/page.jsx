import AppBlogDetailCard from "@/components/app/AppBlogDetailCard";
import AppError from "@/components/app/AppError";
import AppShowHeadBox from "@/components/app/AppShowHeadBox";
import { Flex } from "@chakra-ui/react";
import React from "react";

async function page({ params }) {
  const p = await params;

  const res = await fetch("https://13.203.196.191/api/blog/getbyid", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: p.id }),
  });

  const data = await res.json();
  if (data.data)
    return (
      <Flex px={4} pb={16} flexDirection={"column"} gap={4}>
        <AppShowHeadBox
          heading={"Here is Your Interested Topic"}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#199A8E"
              className="bi bi-body-text"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M0 .5A.5.5 0 0 1 .5 0h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 0 .5m0 2A.5.5 0 0 1 .5 2h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m9 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-9 2A.5.5 0 0 1 .5 4h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m5 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m7 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-12 2A.5.5 0 0 1 .5 6h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m8 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-8 2A.5.5 0 0 1 .5 8h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m7 0a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-7 2a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"
              />
            </svg>
          }
          detail={
            "These details are totally authentic and are provided by the real suppliers by the registered organization."
          }
        />
        <AppBlogDetailCard
          title={data.data.title}
          description={data.data.description}
          details={data.data.details}
          date={data.data.updatedAt}
          organization={data.data.organization.name}
          email={data.data.organization.email}
          phone={data.data.organization.phone}
          address={data.data.organization.address}
        />
      </Flex>
    );
  else  return <AppError />
}

export default page;
