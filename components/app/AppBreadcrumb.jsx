"use client";
import React from "react";
import {
  BreadcrumbCurrentLink,
  BreadcrumbLink,
  BreadcrumbRoot,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import { Box } from "@chakra-ui/react";

export function AppBreadcrumb() {
  const path = usePathname();

  // Split the path into segments and filter out empty strings
  const pathSegments = path.split("/").filter((segment) => segment);

  return (
    <Box p={5}>
        <BreadcrumbRoot size="sm">
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
      {pathSegments.map((segment, index) => {
        return (
          <BreadcrumbLink key={index} href={`/${segment}`}>
            {segment[0].toUpperCase() + segment.slice(1)}
          </BreadcrumbLink>
        );
      })}
    </BreadcrumbRoot>
    </Box>
  );
}
