import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export const Filters = ({ onFilterClick }) => {
  const buttonsConfig = [
    {
      state: "primary",
      name: "Acceptable",
      machineState: "ACCEPTABLE",
    },
    {
      state: "success",
      name: "Monitor",
      machineState: "MONITOR",
    },
    {
      state: "warning",
      name: "Alarm",
      machineState: "ALARM",
    },
    {
      state: "error",
      name: "Danger",
      machineState: "DANGER",
    },
    {
      state: "info",
      name: "no status",
      machineState: "",
    },
  ];

  return (
    <>
      <Stack direction="row" spacing={2}>
        {buttonsConfig.map((btn) => (
          <Button
            key={btn.state}
            variant="contained"
            color={btn.state}
            onClick={() => {
              onFilterClick(btn.machineState);
            }}
          >
            {btn.name}
          </Button>
        ))}
      </Stack>
    </>
  );
};
