import AppShowHeadBox from "@/components/app/AppShowHeadBox";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

function page() {
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
        <Text>(12345)</Text>
      </Box>
      <hr />
      <Box gap={4}>
        <Text fontSize={"xs"} fontWeight={"thin"}>
          Name
        </Text>
        <Text>Capotin 5/10mg</Text>
      </Box>
      <hr />
      <Box gap={4}>
        <Text fontSize={"xs"} fontWeight={"thin"}>
          Description
        </Text>
        <Text>
          An ACE inhibitor used to treat hypertension and heart failure.
        </Text>
      </Box>
      <hr />
      <Box gap={4}>
        <Text fontSize={"xs"} fontWeight={"thin"}>
          Detail
        </Text>
        <Text>
          Captopril is a medication belonging to the class of ACE inhibitors. It
          works by relaxing blood vessels, which lowers blood pressure and
          improves blood flow, reducing the workload on the heart.
        </Text>
      </Box>
      <hr />
      <Box gap={4}>
        <Text fontSize={"xs"} fontWeight={"thin"}>
          Consumption
        </Text>
        <Text>
          Take 25-150 mg per day in divided doses as prescribed by your
          healthcare provider. Best taken on an empty stomach one hour before
          meals.
        </Text>
      </Box>
      <hr />
      <Box gap={4}>
        <Text fontSize={"xs"} fontWeight={"thin"}>
          Side Effects
        </Text>
        <Text>
          Dizziness, lightheadedness, cough, altered taste sensation, or rash.
          Severe side effects may include swelling, difficulty breathing, or
          signs of high potassium levels such as muscle weakness or irregular
          heartbeat.
        </Text>
      </Box>
      <hr />
      <Box gap={4}>
        <Text fontSize={"xs"} fontWeight={"thin"}>
          Others
        </Text>
        <Text>
          Not recommended for use during pregnancy. Monitor kidney function and
          potassium levels regularly while on this medication. Avoid potassium
          supplements or potassium-rich diets unless directed by your doctor.
        </Text>
      </Box>
      <hr />
      <Box gap={4}>
        <Text fontSize={"xs"} fontWeight={"thin"}>
          Organization
        </Text>
        <Text>XYZ Pharmaceuticals</Text>
      </Box>
    </Flex>
  );
}

export default page;
