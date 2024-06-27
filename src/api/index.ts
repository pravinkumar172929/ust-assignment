import { Machine, MachineState } from "../types";

const data: Machine[] = [
  { id: 1, name: "Machine 1", state: MachineState.ACCEPTABLE },
  { id: 2, name: "Machine 2", state: MachineState.DANGER },
  { id: 3, name: "Machine 3", state: MachineState.MONITOR },
  { id: 4, name: "Machine 4", state: MachineState.ACCEPTABLE },
  { id: 5, name: "Machine 5", state: MachineState.ACCEPTABLE },
  { id: 6, name: "Machine 6", state: MachineState.MONITOR },
  { id: 7, name: "Machine 7", state: MachineState.ACCEPTABLE },
  { id: 8, name: "Machine 8", state: MachineState.ALARM },
  { id: 9, name: "Machine 9", state: MachineState.ALARM },
  { id: 10, name: "Machine 10", state: MachineState.NONE },
  { id: 11, name: "Machine 11", state: MachineState.NONE },
];

const getMachinesData: () => Promise<Machine[]> = () => {
  return new Promise((res) => setTimeout(() => res(data), 1000));
};

export { getMachinesData };
