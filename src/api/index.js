const data = [
  { id: 1, name: "Machine 1", state: "ACCEPTABLE" },
  { id: 2, name: "Machine 2", state: "DANGER" },
  { id: 3, name: "Machine 3", state: "MONITOR" },
  { id: 4, name: "Machine 4", state: "ACCEPTABLE" },
  { id: 5, name: "Machine 5", state: "ACCEPTABLE" },
  { id: 6, name: "Machine 6", state: "MONITOR" },
  { id: 7, name: "Machine 7", state: "ACCEPTABLE" },
  { id: 8, name: "Machine 8", state: "ALARM" },
  { id: 9, name: "Machine 9", state: "ALARM" },
  { id: 10, name: "Machine 10", state: "" },
  { id: 11, name: "Machine 11", state: "" },
];

const getMachinesData = () => {
  return new Promise((res) => setTimeout(() => res(data), 1000));
};

export { getMachinesData };
