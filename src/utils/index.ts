import { MachineState } from "../types";

const machineStateToColorMap = {
  [MachineState.ACCEPTABLE]: "#25a355",
  [MachineState.MONITOR]: "#acda4e",
  [MachineState.ALARM]: "#fa781f",
  [MachineState.DANGER]: "#fd1e28",
  [MachineState.NONE]: "#979797",
};

export { machineStateToColorMap };
