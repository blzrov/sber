import { TextInput, Group, rem, Text, Button } from "@mantine/core";
import { Dropzone } from "@mantine/dropzone";
import { IconUpload } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { getUser } from "../helpers/user";
import { useToasts } from "react-toast-notifications";
import {BASE_URL} from "../api";

export default function EmployerEdit() {
  const { addToast } = useToasts();
  const [info, setInfo] = useState({});

  useEffect(async () => {
    const response = await fetch(`${BASE_URL}/api/user/${getUser().id}`);
    const data = await response.json();
    setInfo(data);
  }, []);

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
    const response = await fetch("http://100.73.198.48:8000/api/user/", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({ ...info, id: getUser().id }),
    });
    addToast("Сохранено", {
      appearance: "success",
      autoDismiss: true,
    });
  }

  return (
    <div>
      <Row>
        <Col>
          <h4>Фото</h4>
          <Dropzone
            maxSize={3 * 1024 ** 2}
            onDrop={(files) => handleImg(files)}
            onReject={(files) => console.log("rejected files", files)}
          >
            <Group position="center" spacing="xl" style={{ minHeight: rem(220), pointerEvents: "none" }}>
              {!info.img && <IconUpload size="3.2rem" stroke={1.5} />}
              <div>
                {info.img && <img src={info.img} width={200} height={200} />}
                {!info.img && (
                  <Text size="xl" inline>
                    Загрузите фото
                  </Text>
                )}
              </div>
            </Group>
          </Dropzone>
        </Col>
        <Col>
          <h4>О компании</h4>
          <TextInput
            value={info.name}
            onChange={(e) => {
              setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
            }}
            name="name"
            placeholder="Сбербанк"
            label="Название компании"
          />
          <TextInput
            value={info.city}
            onChange={(e) => {
              setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
            }}
            name="city"
            placeholder="Москва"
            label="Местоположение"
          />
          <TextInput
            value={info.descr}
            onChange={(e) => {
              setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
            }}
            name="descr"
            placeholder="О компании"
            label="Описание"
          />
          <Button color="green" className="mt-3" onClick={handleSubmit}>
            Сохранить
          </Button>
        </Col>
      </Row>
    </div>
  );
}
