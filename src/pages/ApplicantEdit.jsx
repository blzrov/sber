import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Dropzone } from "@mantine/dropzone";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";
import { TextInput, Textarea, Checkbox, Button, Group, Text, rem, MultiSelect } from "@mantine/core";
import { DateInput, MonthPickerInput, YearPickerInput } from "@mantine/dates";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ApplicantEdit() {
  const navigate = useNavigate();
  const [info, setInfo] = useState({});

  function handleChange(e) {
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function handleSubmit() {
    console.log(info);
  }
  return (
    <div>
      <h3>Редактирование резюме</h3>
      <Row className="mb-2">
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
          <TextInput onChange={handleChange} name="name" placeholder="Иванов" label="Фамилия" />
          <TextInput placeholder="Иван" label="Имя" />
          <TextInput placeholder="Иванович" label="Отчество" />
          <DateInput label="Дата рождения" placeholder="Введите дату рождения" onChange={(e) => console.log(e)} />
        </Col>
        <Col md={3}>
          <h4>Мой профиль</h4>
          <TextInput value="blzrov" label="Логин" readOnly />
          <TextInput value="Соискатель" label="Роль" readOnly />
        </Col>
      </Row>
      <Row className="mb-2">
        <h4>Подробнее о вас</h4>
        <Textarea autosize multiple placeholder="Расскажите про себя и как с вами можно связаться" label="О себе" />
        <MultiSelect data={data} label="Ваши навыки" placeholder="React vue" />
      </Row>
      <Row className="mb-2">
        <Col>
          <div className="d-flex">
            <h4>Опыт работы</h4>
            <Button variant="subtle">Добавить место</Button>
          </div>
          <Row>
            <Col md={2}>
              <MonthPickerInput label="Начало работы" placeholder="Укажите год и месяц" />
            </Col>
            <Col md={2}>
              <MonthPickerInput label="Конец работы" placeholder="Укажите год и месяц" />
            </Col>
            <Col md={8}>
              <Textarea
                autosize
                multiple
                placeholder="Расскажите про свою роль на работе и какие задачи вы выполняли"
                label="Описание"
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <h4>Образование</h4>
          <Row>
            <Col md={2}>
              <YearPickerInput label="Начало" placeholder="Укажите год" />
            </Col>
            <Col md={2}>
              <YearPickerInput label="Конец" placeholder="Укажите год" />
            </Col>
            <Col md={8}>
              <TextInput placeholder="МГУ" label="Место обучения" />
            </Col>
          </Row>
        </Col>
      </Row>
      <div>
        <Checkbox label="На данный момент я ищу работу" color="green" size="md" />
        <Group position="right" mt="md">
          <Button onClick={() => navigate("/applicant/1")}>Отмена</Button>
          <Button onClick={handleSubmit} color="green">Сохранить</Button>
        </Group>
      </div>
    </div>
  );
}

const data = [
  { value: "react", label: "React" },
  { value: "ng", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "vue", label: "Vue" },
  { value: "riot", label: "Riot" },
  { value: "next", label: "Next.js" },
  { value: "blitz", label: "Blitz.js" },
];

{
  /* <Checkbox mt="md" label="Я согласен на обработку моих данных" />
        <Group position="right" mt="md">
          <Button color="green" type="submit">
            Сохранить
          </Button>
        </Group> */
}
