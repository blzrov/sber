import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SimpleGrid, Button, Card, TextInput } from "@mantine/core";
import { nprogress, NavigationProgress } from "@mantine/nprogress";
import { Radio } from "@mantine/core";
import { Progress } from "@mantine/core";
import { useState } from "react";
import { test } from "../test";

export default function Test() {
  const [isStarted, setIsStarted] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [successedQuestions, setSuccessedQuestions] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [touched, setTouched] = useState(false);
  const [answers, setAnswers] = useState([]);
  return (
    <div>
      {!isStarted ? (
        <div>
          <SimpleGrid cols={1}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <h3 className="text-center">Название теста</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                consequatur, voluptates laborum cumque dicta fugiat provident.
                Cum debitis, ipsa ea distinctio doloremque voluptate veniam, id
                dolores enim ex blanditiis. Praesentium.
              </p>
              <Button color="green" onClick={() => setIsStarted(true)}>
                Начать тест
              </Button>
            </Card>
          </SimpleGrid>
        </div>
      ) : (
        <div>
          <NavigationProgress color="green" initialProgress={10} />
          <Row>
            <Col md={4}>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <h3>Название теста</h3>
                <SimpleGrid cols={5}>
                  {test.map((v, i) => (
                    <div
                      style={
                        i === currentQuestion
                          ? pageStyleActive
                          : answers.map((v) => v.index).includes(i)
                          ? pageStyleSuccess
                          : pageStyle
                      }
                      onClick={() => {
                        setCurrentQuestion(i);
                        setTouched(false)
                        setCurrentAnswer(answers.map((v) => v.index).includes(i) ? answers.find((v) => v.index === i).value : '')
                      }}
                      key={i}
                    >
                      {i + 1}
                    </div>
                  ))}
                </SimpleGrid>
                <Progress
                  className="mt-3"
                  color="green"
                  radius="xs"
                  size="xl"
                  value={50}
                  striped
                  animate
                />
                <Button className="mt-3" disabled>
                  Закончить
                </Button>
              </Card>
            </Col>
            <Col md={8}>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <h4>Вопрос {currentQuestion + 1}</h4>
                {test[currentQuestion].image && (
                  <img src={test[currentQuestion].image}></img>
                )}
                <div>{test[currentQuestion].question}</div>

                {test[currentQuestion].answerType === "variants" ? (
                  <Radio.Group name="" label="">
                    <h6>Выберите верный вариант ответа:</h6>
                    <SimpleGrid cols={1}>
                      {test[currentQuestion].answers.map((v, i) => (
                        <Card
                          shadow="sm"
                          padding="lg"
                          radius="md"
                          withBorder
                          key={i}
                        >
                          <Radio
                            value={v}
                            label={v}
                            checked={true}
                            onClick={(e) => {
                              setCurrentAnswer(e.target.value);
                              setTouched(true);
                            }}
                          />
                        </Card>
                      ))}
                    </SimpleGrid>
                  </Radio.Group>
                ) : (
                  <TextInput
                    value={currentAnswer}
                    placeholder="Ответ..."
                    label="Введите ваш ответ"
                    onClick={() => setTouched(true)}
                    onChange={(e) => setCurrentAnswer(e.target.value)}
                  />
                )}

                <Button
                  color="green"
                  className="mt-4"
                  onClick={() => {
                    setTouched(true);
                    if (currentAnswer) {
                      setAnswers([
                        ...answers,
                        {index: currentQuestion, value: currentAnswer}
                      ])
                      setCurrentAnswer(answers.map((v) => v.index).includes(currentQuestion + 1) ? answers.find((v) => v.index === currentQuestion + 1).value : '');
                      setTouched(false);
                      if (currentQuestion < test.length - 1) {
                        setCurrentQuestion(currentQuestion + 1);
                      }
                      else{
                        console.log(answers);
                      }
                    }
                  }}
                >
                  {currentQuestion === test.length - 1 ? (
                    <span>Завершить тест</span>
                  ) : (
                    <span>Подтвердить</span>
                  )}
                </Button>
                {!currentAnswer && touched && (
                  <div className="text-danger">Вы не ответили на вопрос</div>
                )}
              </Card>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
}

const pageStyle = {
  backgroundColor: "white",
  textAlign: "center",
  padding: "15px 10px",
  cursor: "pointer",
  border: "2px solid #2b8a3e",
  borderRadius: "5px",
};
const pageStyleSuccess = {
  backgroundColor: "#2b8a3e",
  textAlign: "center",
  padding: "15px",
  cursor: "pointer",
  borderRadius: "5px",
};
const pageStyleActive = {
  backgroundColor: "blue",
  textAlign: "center",
  padding: "15px",
  cursor: "pointer",
  color: "white",
  borderRadius: "5px",
};
