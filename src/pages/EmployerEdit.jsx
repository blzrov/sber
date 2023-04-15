import { TextInput, Group, rem, Text, Button } from "@mantine/core";
import { Dropzone } from "@mantine/dropzone";
import { IconUpload } from "@tabler/icons-react";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";

export default function EmployerEdit() {
  const [info, setInfo] = useState({});
  const [img, setImg] = useState("");

  function handleImg(files) {
    const file = files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const srcData = fileReader.result;
      setInfo((prev) => ({ ...prev, img: srcData }));
    };
    fileReader.readAsDataURL(file);
  }

  function handleSubmit(){
    console.log(info)
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
            <Group
              position="center"
              spacing="xl"
              style={{ minHeight: rem(220), pointerEvents: "none" }}
            >
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
            onChange={(e) => {
              setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
            }}
            name="name"
            placeholder="Сбербанк"
            label="Название компании"
          />
          <TextInput
            onChange={(e) => {
              setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
            }}
            name="descr"
            placeholder="О компании"
            label="Описание"
          />
          <Button color="green" className="mt-3" onClick={handleSubmit}>Сохранить</Button>
        </Col>
      </Row>
    </div>
  );
}
