import React, { useEffect, useState } from "react";
import { CircularProgress, Divider } from "@mui/material";
import { getMachinesData } from "./api";
import { Filters } from "./components/Filters";
import Machines from "./components/Machines";
import { Machine, MachineState } from "./types";

const App: React.FC = () => {
  const [machinesData, setMachinesData] = useState<Machine[] | null>(null);
  const [filteredMachinesData, setFilteredMachinesData] = useState<
    Machine[] | null
  >(null);

  useEffect(() => {
    async function fetchData() {
      const data: Machine[] = await getMachinesData();

      setMachinesData(data);
      setFilteredMachinesData(data);
    }
    fetchData();
  }, []);

  const filterByState = (machineState: MachineState) => {
    if (machinesData) {
      setFilteredMachinesData(
        machinesData.filter((machine) => machine.state === machineState)
      );
    }
  };

  if (!machinesData) {
    return <CircularProgress />;
  }

  return (
    <>
      <Divider sx={{ marginBottom: "16px" }} />
      <Filters onFilterClick={filterByState} />
      <Divider sx={{ paddingTop: "16px" }} />
      <Machines machinesData={filteredMachinesData ?? []} />
    </>
  );
};

export default App;
