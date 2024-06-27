import React from "react";
import Box from "@mui/material/Box";
import { Machine } from "../types";
import { machineStateToColorMap } from "../utils";

interface MachinesProps {
  machinesData: Machine[];
}

const Machines: React.FC<MachinesProps> = ({ machinesData }) => {
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
              machineStateToColorMap[machine.state] || "black"
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
