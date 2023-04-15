import { SimpleGrid, Card, Image, Title, Text, Button } from "@mantine/core";
import MaterialTable from "material-table";
import { localization, icons, options } from "../helpers/table";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Applicants() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    const response = await fetch("http://100.73.198.48:8000/api/applicants/");
    const data = await response.json();
    setData(data);
  }, []);

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
  {
    title: "ФИО",
    field: "fullName",
    render: (rowData) => {
      return (
        <Link to="/applicant/1">
          <div style={{ color: "blue", cursor: "pointer" }}>{rowData.fullName}</div>
        </Link>
      );
    },
  },
  { title: "Профессия", field: "surname" },
  { title: "Возраст", field: "birthYear" },
  { title: "Навыки", field: "name" },
  { title: "Образование", field: "surname" },
  { title: "Рейтинг", field: "birthYear" },
];