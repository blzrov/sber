import MaterialTable from "material-table";
import { localization, tableIcons, options } from "../helpers/table";

export default function Table() {
  const data = [
    { name: "Mohammad", surname: "Faisal", birthYear: 1995 },
    { name: "Nayeem Raihan ", surname: "Shuvo", birthYear: 1994 },
  ];

  const columns = [
    { title: "Name", field: "name" },
    { title: "Surname", field: "surname" },
    { title: "Birth Year", field: "birthYear" },
    { title: "Name", field: "name" },
    { title: "Surname", field: "surname" },
    { title: "Birth Year", field: "birthYear" },
  ];
  return (
    <MaterialTable options={options} icons={tableIcons} localization={localization} columns={columns} data={data} />
  );
}
