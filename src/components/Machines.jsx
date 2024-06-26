import React from "react";
import Box from "@mui/material/Box";

const Machines = ({ machinesData }) => {
  const machineStateColorMap = {
    ACCEPTABLE: "#1976d2",
    MONITOR: "#2e7d32",
    ALARM: "#ed6c02",
    DANGER: "#d32f2f",
  };

  return (
    <>
      {machinesData.map((machine) => (
        <Box
          key={machine.id}
          height={200}
          width={200}
          my={4}
          display="flex"
          alignItems="center"
          gap={4}
          p={2}
          sx={{
            border: `2px solid ${
              machineStateColorMap[machine.state] || "black"
            }`,
          }}
        >
          {machine.name}
        </Box>
      ))}
    </>
  );
};

export default Machines;
