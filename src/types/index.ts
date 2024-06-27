export enum MachineState {
  ACCEPTABLE,
  DANGER,
  MONITOR,
  ALARM,
  NONE = "",
}

export type Machine = {
  id: number;
  name: string;
  state: MachineState;
};
