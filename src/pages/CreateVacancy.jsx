import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import { TextInput, Textarea, Button } from "@mantine/core";
import { getUser } from "../helpers/user";
import { Dropzone } from "@mantine/dropzone";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";
import { Checkbox, Group, Text, rem, MultiSelect } from "@mantine/core";

export default function CreateVacancy() {
  const [info, setInfo] = useState({});

  function handleImg(files) {
    const file = files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const srcData = fileReader.result;
      setInfo((prev) => ({ ...prev, img: srcData }));
    };
    fileReader.readAsDataURL(file);
  }

  async function handleSubmit() {
    const data = { ...info, id: getUser().id };
    const response = await fetch("http://100.73.198.48:8000/api/vacancy/", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });
    console.log(response);
  }

  return (
    <div>
      <h3 className="text-center">Создать новую вакансию</h3>
      <Row className="mb-4">
        <Col md={8} className="mx-auto">
          <TextInput
            onChange={(e) => setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
            name="name"
            placeholder="Аналитик"
            label="Название вакансии"
          />
          <TextInput
            onChange={(e) => setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
            name="salary"
            placeholder="50000"
            label="Зарплата"
          />
          <Textarea
            className="mb-2"
            autosize
            multiple
            onChange={(e) => setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
            name="descr"
            placeholder="Напишите подробнее о вакансии"
            label="Описание"
          />
          <Dropzone
            className="mb-2"
            onDrop={(files) => handleImg(files)}
            onReject={(files) => console.log("rejected files", files)}
          >
            <Group position="center">
              {!info.img && <IconUpload size="3.2rem" stroke={1.5} />}
              <div>
                {/* {info.img && <img src={info.img} width={200} height={200} />} */}
                {!info.img && (
                  <Text size="xl" inline>
                    Загрузите фото
                  </Text>
                )}
              </div>
            </Group>
          </Dropzone>
          <Button fullWidth color="green" className="mt-2" onClick={handleSubmit}>
            Опубликовать
          </Button>
        </Col>
      </Row>
    </div>
  );
}
