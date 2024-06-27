import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { MachineState } from "../types";
import { styled } from "@mui/material/styles";
import { machineStateToColorMap } from "../utils";

interface FiltersProps {
  onFilterClick: (machineState: MachineState) => void;
}

const CustomButton = styled(Button)<{ customColor: string & ButtonProps }>(
  ({ theme, customColor }) => ({
    color: theme.palette.getContrastText(customColor),
    backgroundColor: customColor,
    "&:hover": {
      backgroundColor: customColor,
    },
    borderRadius: 20,
  })
);

type ButtonConfig = {
  color: string;
  name: string;
  machineState: MachineState;
};

export const Filters: React.FC<FiltersProps> = ({ onFilterClick }) => {
  const buttonsConfig: ButtonConfig[] = [
    {
      color: machineStateToColorMap[MachineState.ACCEPTABLE],
      name: "Acceptable",
      machineState: MachineState.ACCEPTABLE,
    },
    {
      color: machineStateToColorMap[MachineState.MONITOR],
      name: "Monitor",
      machineState: MachineState.MONITOR,
    },
    {
      color: machineStateToColorMap[MachineState.ALARM],
      name: "Alarm",
      machineState: MachineState.ALARM,
    },
    {
      color: machineStateToColorMap[MachineState.DANGER],
      name: "Danger",
      machineState: MachineState.DANGER,
    },
    {
      color: machineStateToColorMap[MachineState.NONE],
      name: "no status",
      machineState: MachineState.NONE,
    },
  ];

  return (
    <Stack direction="row" spacing={2}>
      {buttonsConfig.map((btn) => (
        <CustomButton
          key={btn.name}
          variant="contained"
          customColor={btn.color}
          onClick={() => onFilterClick(btn.machineState)}
        >
          {btn.name}
        </CustomButton>
      ))}
    </Stack>
  );
};
