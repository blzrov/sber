import { Group, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Button, Select } from "@mantine/core";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";

export default function Authorization() {
  const [authState, setAuthState] = useState("login");
  const authForm = useForm({
    initialValues: {
      login: "",
      password: "",
    },
    validate: {
      login: (value) => (value.length > 0 ? null : "Введите логин"),
      password: (value) => {
        if (value.length === 0) {
          return "Введите пароль";
        }
        if (value.length < 6) {
          return "Минимальная длина 6 символов";
        }
        return null;
      },
    },
  });

  const registrationForm = useForm({
    initialValues: {
      login: "",
      password: "",
      role: "",
    },
    validate: {
      login: (value) => (value.length > 0 ? null : "Введите логин"),
      password: (value) => {
        if (value.length === 0) {
          return "Введите пароль";
        }
        if (value.length < 6) {
          return "Минимальная длина 6 символов";
        }
        return null;
      },
      role: (value) => (value.length > 0 ? null : "Выберите вашу роль"),
    },
  });

  return (
    <Row className="my-auto">
      <Col md={3} className="mx-auto">
        {authState === "login" && (
          <>
            <h2 className='text-center'>Вход</h2>
            <form
              onSubmit={authForm.onSubmit((values) => {
                console.log(values);
                authForm.reset();
              })}
            >
              <TextInput
                label="Логин"
                placeholder="Ваш логин"
                {...authForm.getInputProps("login")}
                withAsterisk
                size="lg"
                radius="md"
              />

              <PasswordInput
                label="Пароль"
                placeholder="Ваш пароль"
                {...authForm.getInputProps("password")}
                withAsterisk
                size="lg"
                radius="md"
              />

              <Group className="mt-3 d-flex flex-column">
                <Button type="submit" color="green" className="w-100">
                  Войти
                </Button>
                <p>
                  У вас нет аккаунта?{" "}
                  <span
                    onClick={() => setAuthState("registration")}
                    className="text-primary"
                    style={{ cursor: "pointer" }}
                  >
                    Зарегистрируйтесь.
                  </span>
                </p>
              </Group>
            </form>
          </>
        )}
        {authState === "registration" && (
          <>
            <h2 className='text-center'>Регистрация</h2>
            <form
              onSubmit={registrationForm.onSubmit((values) => {
                console.log(values);
                registrationForm.reset();
              })}
            >
              <TextInput
                label="Логин"
                placeholder="Ваш логин"
                {...registrationForm.getInputProps("login")}
                withAsterisk
                size="lg"
                radius="md"
              />

              <PasswordInput
                label="Пароль"
                placeholder="Ваш пароль"
                {...registrationForm.getInputProps("password")}
                withAsterisk
                size="lg"
                radius="md"
              />

              <Select
                label="Ваша роль"
                placeholder="Выберите вашу роль"
                data={[
                  { value: "employer", label: "Работодатель" },
                  { value: "applicant", label: "Соискатель" },
                  { value: "mentor", label: "Ментор" },
                  { value: "customer", label: "Заказчик" },
                ]}
                {...registrationForm.getInputProps("role")}
                withAsterisk
                size="lg"
                radius="md"
              />

              <Group className="mt-3 d-flex flex-column">
                <Button type="submit" color="green" className="w-100">
                  Зарегистрироваться
                </Button>
                <p>
                  У вас уже есть аккаунт?{" "}
                  <span
                    onClick={() => setAuthState("login")}
                    className="text-primary"
                    style={{ cursor: "pointer" }}
                  >
                    Войдите.
                  </span>
                </p>
              </Group>
            </form>
          </>
        )}
      </Col>
    </Row>
  );
}
