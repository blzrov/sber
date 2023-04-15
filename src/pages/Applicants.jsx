import { SimpleGrid, Card, Image, Title, Text, Button } from "@mantine/core";
import MaterialTable from "material-table";
import { localization, icons, options } from "../helpers/table";

export default function Applicants() {
  return (
    <div>
      <h3>Все соискатели</h3>
      <MaterialTable options={options} icons={icons} localization={localization} columns={columns} data={data} />
    </div>
  );
}

const data = [
  { fullName: "Mohammad", surname: "Faisal", birthYear: 1995 },
  { fullName: "Nayeem Raihan ", surname: "Shuvo", birthYear: 1994 },
];

const columns = [
  { title: "ФИО", field: "fullName" },
  { title: "Профессия", field: "surname" },
  { title: "Возраст", field: "birthYear" },
  { title: "Навыки", field: "name" },
  { title: "Образование", field: "surname" },
  { title: "Рейтинг", field: "birthYear" },
];
