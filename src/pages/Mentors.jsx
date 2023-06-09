import { SimpleGrid, Card, Image, Title, Text, Button } from "@mantine/core";
import MaterialTable from "material-table";
import { localization, icons, options } from "../helpers/table";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {BASE_URL} from "../api";

export default function Applicants() {
  const [data, setData] = useState([]);

  //   useEffect(async () => {
  //     const response = await fetch(`${BASE_URL}/api/users/applicants`);
  //     const data = await response.json();
  //     console.log(data);
  //     setData(data);
  //   }, []);

  return (
    <div>
      <MaterialTable
        title={"Найти ментора"}
        options={options}
        icons={icons}
        localization={localization}
        columns={columns}
        data={data}
      />
    </div>
  );
}

const columns = [
  {
    title: "ФИО",
    field: "fullName",
    render: (rowData) => {
      return (
        <Link to={`/applicant/${rowData.id}`}>
          <div style={{ color: "blue", cursor: "pointer" }}>
            {rowData.surname + " " + rowData.name + " " + rowData.patronymic}
          </div>
        </Link>
      );
    },
  },
  { title: "Профессия", field: "profession" },
  { title: "Навыки", field: "birth_day" },
  { title: "Опыт работы", field: "city" },
  { title: "Средняя цена", field: "rate" },
];
