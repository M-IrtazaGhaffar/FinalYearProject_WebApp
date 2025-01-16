import AppShowBox from "@/components/app/AppShowBox";
import AppShowHeadBox from "@/components/app/AppShowHeadBox";
import { Box } from "@chakra-ui/react";
import React from "react";

function page() {
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
      <AppShowBox name={"Reg ID"} value={"12345"} />
      <hr />
      <AppShowBox name={"Name"} value={"MediCare 24/7"} />
      <hr />
      <AppShowBox name={"Owner"} value={"M Irtaza Ghaffar"} />
      <hr />
      <AppShowBox name={"Email"} value={"irtazaghaffar@gmail.com"} />
      <hr />
      <AppShowBox name={"Phone"} value={"+923320523524"} />
      <hr />
      <AppShowBox name={"CNIC"} value={"37301-0823191-3"} />
      <hr />
      <AppShowBox name={"Country"} value={"Pakistan"} />
      <hr />
      <AppShowBox name={"License"} value={"DPharm-PUN-2025-012345"} />
      <hr />
      <AppShowBox name={"Address"} value={"Mozzam Hospital Jhelum"} />
      <hr />
      <AppShowBox name={"Latitude"} value={"73.18626952080118"} />
      <hr />
      <AppShowBox name={"Longitude"} value={"33.54824734241191"} />
    </Box>
  );
}

export default page;
