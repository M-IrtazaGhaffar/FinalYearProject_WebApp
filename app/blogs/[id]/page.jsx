import AppBlogDetailCard from "@/components/app/AppBlogDetailCard";
import AppShowHeadBox from "@/components/app/AppShowHeadBox";
import { Flex } from "@chakra-ui/react";
import React from "react";

function page() {
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
        title={"Why Not to Use Capoten?"}
        description={
          "Capoten (Captopril) may not be the right choice for all patients due to specific health conditions, potential side effects, or interactions with other medications."
        }
        details={
          "Capoten (Captopril) may not be suitable for certain individuals due to various health and safety concerns. Patients allergic to ACE inhibitors should avoid this medication, as it can cause severe allergic reactions, including swelling, difficulty breathing, and skin issues. Pregnant women should not use Capoten, as it poses significant risks to the developing fetus, particularly in the second and third trimesters. Individuals with kidney impairment or those undergoing dialysis may experience adverse effects, as the medication can strain kidney function. Additionally, Capoten can raise potassium levels in the blood, leading to hyperkalemia, which is especially dangerous for individuals with conditions like Addisons disease or those taking potassium-sparing drugs. Persistent dry cough, a common side effect, can make the drug intolerable for some patients. Furthermore, Capoten interacts with NSAIDs, diuretics, and other medications, potentially leading to complications. Careful assessment by a healthcare provider is crucial before starting Capoten."
        }
        organization={"XYZ Pharmaceuticals"}
      />
    </Flex>
  );
}

export default page;
