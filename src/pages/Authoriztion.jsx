import { Group, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Button, Select } from "@mantine/core";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";

export default function Authorization() {
  const [authState, setAuthState] = useState("login");
  const authForm = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (value.length > 0 ? null : "Введите логин"),
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
      email: "",
      password: "",
      role: "",
    },
    validate: {
      email: (value) => (value.length > 0 ? null : "Введите логин"),
      password: (value) => {
        if (value.length === 0) {
          return "Введите пароль";
        }
        if (value.length < 4) {
          return "Минимальная длина 4 символов";
        }
        return null;
      },
      role: (value) => (value.length > 0 ? null : "Выберите вашу роль"),
    },
  });

  return (
    <Row className="my-auto">
      <Col md={6} className="mx-auto">
        {authState === "login" && (
          <>
            <h2 className="text-center">Вход</h2>
            <form
              onSubmit={authForm.onSubmit(async (values) => {
                const response = await fetch("http://100.73.198.48:8000/api/auth/login/", {
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  },
                  method: "POST",
                  body: JSON.stringify(values),
                });
                const result = await response.json();
                if (result.id) {
                  localStorage.setItem("user", JSON.stringify(result));
                  console.log(JSON.parse(localStorage.getItem("user")));
                }
              })}
            >
              <TextInput
                label="Логин"
                placeholder="Ваш логин"
                {...authForm.getInputProps("email")}
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
            <h2 className="text-center">Регистрация</h2>
            <form
              onSubmit={registrationForm.onSubmit(async (values) => {
                const response = await fetch("http://100.73.198.48:8000/api/auth/registration/", {
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  },
                  method: "POST",
                  body: JSON.stringify(values),
                });
                const result = await response.json();
                console.log(result);
                if (result.id) {
                  localStorage.setItem("user", JSON.stringify(result));
                  console.log(localStorage);
                }
              })}
            >
              <TextInput
                label="Логин"
                placeholder="Ваш логин"
                {...registrationForm.getInputProps("email")}
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
                  <span onClick={() => setAuthState("login")} className="text-primary" style={{ cursor: "pointer" }}>
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
