import AppError from "@/components/app/AppError";
import AppMapBox from "@/components/app/AppMapBox";
import AppShowBox from "@/components/app/AppShowBox";
import AppShowHeadBox from "@/components/app/AppShowHeadBox";
import { Box } from "@chakra-ui/react";
import React from "react";

async function page({ params }) {
  const p = await params;

  const res = await fetch("https://advancedpos.duckdns.org/api/retailer/getbyid", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: p.id }),
  });

  const data = await res.json();

  if (data.data)
    return (
      <Box px={4} pb={16} gap={4}>
        <AppShowHeadBox
          heading={"Retailer Information"}
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
            "Here are the information and details about the retailers registered in our system."
          }
        />
        <AppShowBox name={"Reg ID"} value={data.data.id} />
        <hr />
        <AppShowBox name={"Name"} value={data.data.name} />
        <hr />
        <AppShowBox name={"Owner"} value={data.data.owner} />
        <hr />
        <AppShowBox name={"Email"} value={data.data.email} />
        <hr />
        <AppShowBox name={"Phone"} value={data.data.phone} />
        <hr />
        <AppShowBox name={"National ID"} value={data.data.national_id} />
        <hr />
        <AppShowBox name={"Country"} value={data.data.country} />
        <hr />
        <AppShowBox name={"License"} value={data.data.license} />
        <hr />
        <AppShowBox name={"Address"} value={data.data.address} />
        <hr />
        <AppShowBox name={"Latitude"} value={data.data.latitude} />
        <hr />
        <AppShowBox name={"Longitude"} value={data.data.longitude} />
        <AppMapBox
          latitude={data.data.latitude}
          longitude={data.data.longitude}
        />
      </Box>
    );
  else return <AppError />;
}

export default page;
