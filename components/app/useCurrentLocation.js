// hooks/useCurrentLocation.js
import { useState, useEffect } from "react";
import axios from "axios";

const useCurrentLocation = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    area: null,
    error: null,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLocation((prev) => ({
            ...prev,
            latitude,
            longitude,
          }));

          try {
            const response = await axios.get(
              `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=f4f1a9bdc0ee47a7a6da5124b3d5dcdb`
            );
            const area = response.data.results[0].formatted;
            setLocation((prev) => ({
              ...prev,
              area,
            }));
          } catch (error) {
            setLocation((prev) => ({
              ...prev,
              error: "Failed to fetch area information.",
            }));
          }
        },
        (error) => {
          setLocation((prev) => ({
            ...prev,
            error: error.message,
          }));
        }
      );
    } else {
      setLocation((prev) => ({
        ...prev,
        error: "Geolocation is not supported by this browser.",
      }));
    }
  }, []);

  return location;
};

export default useCurrentLocation;
