import { useEffect, useState } from "react";
import { Filters } from "./components/Filters";
import Machines from "./components/Machines";
import { getMachinesData } from "./api";
import { CircularProgress } from "@mui/material";

function App() {
  const [machinesData, setMachinesData] = useState();
  const [filteredMachinesData, setFilteredMachinesData] = useState();

  useEffect(() => {
    async function fetchData() {
      const data = await getMachinesData();

      setMachinesData(data);
      setFilteredMachinesData(data);
    }
    fetchData();
  }, []);

  const filterByState = (machineState) => {
    setFilteredMachinesData(
      machinesData.filter((machine) => machine.state === machineState)
    );
  };

  if (!machinesData) {
    return <CircularProgress />;
  }

  return (
    <>
      <Filters onFilterClick={filterByState} />
      <Machines machinesData={filteredMachinesData} />
    </>
  );
}

export default App;
