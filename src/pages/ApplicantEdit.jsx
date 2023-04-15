import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Dropzone } from "@mantine/dropzone";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";
import { TextInput, Textarea, Checkbox, Button, Group, Text, rem } from "@mantine/core";

export default function ApplicantEdit() {
  return (
    <div>
      <h3>Редактирование резюме</h3>
      <Row>
        <Col md={3}>
          <h4>Фото</h4>
          <Dropzone
            maxSize={3 * 1024 ** 2}
            onDrop={(files) => console.log("accepted files", files)}
            onReject={(files) => console.log("rejected files", files)}
          >
            <Group position="center" spacing="xl" style={{ minHeight: rem(220), pointerEvents: "none" }}>
              <Dropzone.Accept>
                <IconUpload size="3.2rem" stroke={1.5} />
              </Dropzone.Accept>
              <Dropzone.Reject>
                <IconX size="3.2rem" stroke={1.5} />
              </Dropzone.Reject>
              <Dropzone.Idle>
                <IconPhoto size="3.2rem" stroke={1.5} />
              </Dropzone.Idle>
              <div>
                <Text size="xl" inline>
                  Загрузите фото
                </Text>
              </div>
            </Group>
          </Dropzone>
        </Col>
        <Col md={5}>
          <h4>Личная информация</h4>
          <TextInput placeholder="Иванов" label="Фамилия" />
          <TextInput placeholder="Иван" label="Имя" />
          <TextInput placeholder="Иванович" label="Отчество" />
          <Textarea autosize multiple placeholder="Расскажите про себя и как с вами можно связаться" label="О себе" />
          <Checkbox mt="md" label="Я согласен на обработку моих данных" />
          <Group position="right" mt="md">
            <Button color="green" type="submit">
              Отправить
            </Button>
          </Group>
        </Col>
        <Col md={3}>
          <h4>Мой профиль</h4>
          <TextInput value="blzrov" label="Логин" readOnly />
          <TextInput value="Соискатель" label="Роль" readOnly />
        </Col>
      </Row>
    </div>
  );
}
