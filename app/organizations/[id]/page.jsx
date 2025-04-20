import AppError from "@/components/app/AppError";
import AppMapBox from "@/components/app/AppMapBox";
import AppShowBox from "@/components/app/AppShowBox";
import AppShowHeadBox from "@/components/app/AppShowHeadBox";
import { Box } from "@chakra-ui/react";
import React from "react";

async function page({ params }) {
  const p = await params;

  const res = await fetch(
    "https://advancedpos.duckdns.org/api/organization/getbyid",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: p.id }),
    }
  );
  const data = await res.json();

  if (data.data)
    return (
      <Box px={4} pb={16} gap={4}>
        <AppShowHeadBox
          heading={"Organization Information"}
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
          detail={
            "Here are information and details of the organizations registered in our system."
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
