"use client";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import React from "react";

function AppDate() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();

    const suffixDay = (day) => {
      if (day === 1 || day === 21 || day === 31) {
        return `${day}st`;
      } else if (day === 2 || day === 22) {
        return `${day}nd`;
      } else if (day === 3 || day === 23) {
        return `${day}rd`;
      } else {
        return `${day}th`;
      }
    };

    const suffixMonth = (month) => {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return months[month];
    };

    suffixDay(date.getDate());

    setCurrentDate(
      suffixDay(suffixMonth(date.getMonth()) + " " + date.getDate()) +
        ", " +
        date.getFullYear()
    );
  }, []);
  return (
    <Box textAlign={"start"} fontSize={"sm"} fontWeight={'light'} m={2}>
      {currentDate ? `${currentDate}` : "Loading..."}
      <br />
      Wednesday
    </Box>
  );
}

export default AppDate;
