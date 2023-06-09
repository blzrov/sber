import { NumberInput, TextInput, Textarea, Button } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { async } from "q";
import { Row, Col } from "react-bootstrap";
import {BASE_URL} from "../api";

export default function CreateOrder() {
  const form = useForm({
    initialValues: {
      name: "",
      price: 0,
      deadline: new Date(),
      description: "",
    },
    validate: {
      name: (value) => (value.length > 0 ? null : "Введите название заказа"),
    },
  });

  return (
    <div>
      <Row>
        <Col md={4} className="mx-auto">
          <h3 className="text-center">Создать заказ</h3>
          <form
            onSubmit={form.onSubmit(async (values) => {
              const response = await fetch(`${BASE_URL}/api/order/`, {
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
                method: "POST",
                body: JSON.stringify(values),
              });
            })}
            className="d-flex flex-column gap-3"
          >
            <TextInput label="Название заказа" {...form.getInputProps("name")}></TextInput>

            <NumberInput placeholder="0" label="Стоимость" {...form.getInputProps("price")}></NumberInput>

            <DateInput label="Срок выполнения" {...form.getInputProps("deadline")}></DateInput>

            <Textarea autosize multiple label="Описание" {...form.getInputProps("description")}></Textarea>

            <Button type="submit" color="green">
              Создать заказ
            </Button>
          </form>
        </Col>
      </Row>
    </div>
  );
}
