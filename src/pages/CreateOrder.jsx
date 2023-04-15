import { NumberInput, TextInput, Button } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { Row, Col } from "react-bootstrap";

export default function CreateOrder() {
  const form = useForm({
    initialValues: {
      name: "",
      price: 0,
      deadline: new Date(),
      description: "",
    },
  });

  return (
    <div>
      <Row>
        <Col md={4} className="mx-auto">
            <h3 className="text-center">Создать заказ</h3>
          <form
            onSubmit={form.onSubmit((values) => {
              console.log(values);
              form.reset()
            })}
            className="d-flex flex-column gap-3"
          >
            <TextInput
              label="Название заказа"
              {...form.getInputProps("name")}
            ></TextInput>

            <NumberInput
              placeholder="0"
              label="Стоимость"
              {...form.getInputProps("price")}
            ></NumberInput>

            <DateInput
              label="Срок выполнения"
              {...form.getInputProps("deadline")}
            ></DateInput>

            <TextInput
              label="Описание"
              {...form.getInputProps("description")}
            ></TextInput>

            <Button type="submit" color="green">
              Создать заказ
            </Button>
          </form>
        </Col>
      </Row>
    </div>
  );
}
