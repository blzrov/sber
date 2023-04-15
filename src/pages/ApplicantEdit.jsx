import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Dropzone } from "@mantine/dropzone";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";
import {
  TextInput,
  Textarea,
  Checkbox,
  Button,
  Group,
  Text,
  rem,
  MultiSelect,
} from "@mantine/core";
import { DateInput, MonthPickerInput, YearPickerInput } from "@mantine/dates";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import WorkExpItem from "../components/WorkExpItem";
import { getUser } from "../helpers/user";

export default function ApplicantEdit() {
  const navigate = useNavigate();
  const [info, setInfo] = useState({ experience: [{}] });
  const [img, setImg] = useState("");
  const [skills, setSkills] = useState([]);

  useEffect(async () => {
    const response = await fetch("http://100.73.198.48:8000/api/skills/");
    const data = await response.json();
    setSkills(
      data.map((v) => {
        return { value: v.name, label: v.name };
      })
    );
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
    const data = { ...info, id: getUser().id };
    console.log(data)
    const response = await fetch("http://100.73.198.48:8000/api/user/", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "PATCH",
      body: JSON.stringify(data),
    });
  }

  return (
    <div>
      <h3>Редактирование профиля и резюме</h3>
      <Row className="mb-2">
        <Col md={3}>
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
              {!img && <IconUpload size="3.2rem" stroke={1.5} />}
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
        <Col md={5}>
          <h4>Личная информация</h4>
          <TextInput
            onChange={(e) =>
              setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            name="name"
            placeholder="Иванов"
            label="Фамилия"
          />
          <TextInput
            onChange={(e) =>
              setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            name="surname"
            placeholder="Иван"
            label="Имя"
          />
          <TextInput
            onChange={(e) =>
              setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            name="patronymic"
            placeholder="Иванович"
            label="Отчество"
          />
          <DateInput
            onChange={(e) =>
              setInfo((prev) => ({
                ...prev,
                birth_date: `${e.getFullYear()}-${
                  e.getMonth() + 1
                }-${e.getDate()}`,
              }))
            }
            label="Дата рождения"
            placeholder="Введите дату рождения"
          />
        </Col>
        <Col md={3}>
          <h4>Мой профиль</h4>
          <TextInput value="blzrov" label="Почта" readOnly />
          <TextInput value="Соискатель" label="Роль" readOnly />
        </Col>
      </Row>
      <Row className="mb-2">
        <h4>Подробнее о вас</h4>
        <TextInput
          onChange={(e) =>
            setInfo((prev) => ({ ...prev, city: e.target.value }))
          }
          name="city"
          placeholder="Екатеринбург"
          label="Город"
        />
        <TextInput
          onChange={(e) =>
            setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
          name="profession"
          placeholder="Аналитик"
          label="Профессия"
        />
        <Textarea
          onChange={(e) =>
            setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
          name="descr"
          autosize
          multiple
          placeholder="Расскажите про себя и как с вами можно связаться"
          label="О себе"
        />
        <MultiSelect
          onChange={(e) => setInfo((prev) => ({ ...prev, skills: e }))}
          data={skills}
          label="Ваши навыки"
          placeholder="React vue"
        />
        <MultiSelect
          // onChange={(e) => setInfo((prev) => ({ ...prev, skills: e }))}
          data={[{ value: "Удаленно", label: "Удаленно" }]}
          label="Формат работы"
          placeholder="В офисе"
        />
      </Row>
      <Row className="mb-2">
        <Col>
          <div className="d-flex">
            <h4>Опыт работы</h4>
            <Button
              onClick={() =>
                setInfo((prev) => ({
                  ...prev,
                  experience: prev.experience.concat([{}]),
                }))
              }
              variant="subtle"
            >
              Добавить место
            </Button>
          </div>
          {info.experience.map((e, i) => (
            <WorkExpItem
              key={i}
              exp={e}
              onChangeExp={(e) =>
                setInfo((prev) => {
                  const newWorkExp = [...prev.experience];
                  newWorkExp[i] = e;
                  return { ...prev, experience: newWorkExp };
                })
              }
            />
          ))}
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
        <Checkbox
          value={info.isSearch}
          onChange={(e) =>
            setInfo((prev) => ({ ...prev, is_search: e.target.checked }))
          }
          label="На данный момент я ищу работу"
          color="green"
          size="md"
        />
        <Group position="right" mt="md">
          <Button onClick={() => navigate("/applicant/1")}>Отмена</Button>
          <Button onClick={handleSubmit} color="green">
            Сохранить
          </Button>
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
