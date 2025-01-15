import { Flex } from "@chakra-ui/react";
import {
  ProgressCircleRing,
  ProgressCircleRoot,
} from "@/components/ui/progress-circle";
import React from "react";

function Loading() {
  return (
    <Flex justifyContent="center" alignItems="center" minH="100vh" w={"100%"}  color={"#199A8E"}>
      <ProgressCircleRoot value={null} size="sm" color={"#199A8E"} >
        <ProgressCircleRing cap="round" color={"#199A8E"} />
      </ProgressCircleRoot>
    </Flex>
  );
}

export default Loading;
