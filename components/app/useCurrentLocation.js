"use client";

import { useState, useEffect } from "react";
import axios from "axios";

const useCurrentLocation = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    area: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const response = await axios.get(
              `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=f4f1a9bdc0ee47a7a6da5124b3d5dcdb`
            );
            const area = response.data.results[0].formatted;
            setLocation({
              latitude,
              longitude,
              area,
              error: null,
              loading: false,
            });
          } catch (error) {
            setLocation((prev) => ({
              ...prev,
              error: "Failed to fetch area information.",
              loading: false,
            }));
          }
        },
        (error) => {
          setLocation((prev) => ({
            ...prev,
            error: error.message,
            loading: false,
          }));
        }
      );
    } else {
      setLocation((prev) => ({
        ...prev,
        error: "Geolocation is not supported by this browser.",
        loading: false,
      }));
    }
  }, []);

  return location;
};

export default useCurrentLocation;
