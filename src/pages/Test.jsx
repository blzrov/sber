import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SimpleGrid, Button, Card, TextInput } from "@mantine/core";
import { nprogress, NavigationProgress } from "@mantine/nprogress";
import { Radio } from "@mantine/core";
import { Progress } from "@mantine/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getUser } from "../helpers/user";

export default function Test() {
  const [stage, setStage] = useState("not started");
  const { id } = useParams();
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState([]);
  const [description, setDescription] = useState("");

  const value = () => currentQuestion / tasks.length;

  useEffect(async () => {
    const response = await fetch(`http://100.73.198.48:8000/api/test/${id}`);
    const data = await response.json();
    console.log(data);
    setName(data.name);
    setTasks(data.tasks);
    setDescription(data.descr);
  }, []);

  async function sendResults() {
    const results = answers.reduce((acc, curr, idx) => {
      if (curr.value === tasks[curr.index].correct_answer) {
        acc += 1;
      }
      return acc;
    }, 0);
    console.log((results * 100) / tasks.length);
    const response = await fetch("http://100.73.198.48:8000/api/test/user", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        user: getUser().id,
        test: id,
        result: Math.ceil((results * 100) / tasks.length),
      }),
    });
  }

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [successedQuestions, setSuccessedQuestions] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [touched, setTouched] = useState(false);
  const [answers, setAnswers] = useState([]);
  return (
    <div>
      {stage === "not started" && (
        <div>
          <SimpleGrid cols={1}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <h3 className="text-center">{name}</h3>
              <p>{description}</p>
              <Button color="green" onClick={() => setStage("in progress")}>
                Начать тест
              </Button>
            </Card>
          </SimpleGrid>
        </div>
      )}
      {stage === "in progress" && (
        <div>
          <NavigationProgress color="green" initialProgress={50} />
          <Row>
            <Col md={4}>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <h3>{name}</h3>
                <SimpleGrid cols={5}>
                  {tasks.map((v, i) => (
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
                        setTouched(false);
                        setCurrentAnswer(
                          answers.map((v) => v.index).includes(i)
                            ? answers.find((v) => v.index === i).value
                            : ""
                        );
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
                  value={value * 100}
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
                <div>{tasks[currentQuestion].question}</div>

                {tasks[currentQuestion].answers.length > 0 ? (
                  <Radio.Group name="" label="">
                    <h6>Выберите верный вариант ответа:</h6>
                    <SimpleGrid cols={1}>
                      {tasks[currentQuestion].answers.map((v, i) => (
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
                      if (
                        !answers
                          .map((v) => v.index)
                          .includes(currentQuestion) ||
                        answers.find((v) => v.index === currentQuestion)
                          ?.value != currentAnswer
                      ) {
                        setAnswers([
                          ...answers.filter((v) => v.index !== currentQuestion),
                          { index: currentQuestion, value: currentAnswer },
                        ]);
                      }
                      setCurrentAnswer(
                        answers
                          .map((v) => v.index)
                          .includes(currentQuestion + 1)
                          ? answers.find((v) => v.index === currentQuestion + 1)
                              .value
                          : ""
                      );
                      setTouched(false);
                      if (currentQuestion < tasks.length - 1) {
                        setCurrentQuestion(currentQuestion + 1);
                      } else {
                        setStage("completed");
                        sendResults();
                      }
                    }
                  }}
                >
                  {currentQuestion === tasks.length - 1 ? (
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
      {stage === "completed" && (
        <div>
          <Row>
            <Col>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <h2 className="text-center">Результаты</h2>
                <p className="mx-auto" style={{fontSize: '22px', textAlign: 'center', width: '80%'}}>
                  Вы набрали {answers.reduce((acc, curr, idx) => {
                    if (curr.value === tasks[curr.index].correct_answer) {
                      acc += 1;
                    }
                    return acc;
                  }, 0)} из {tasks.length} баллов.
                  {answers.reduce((acc, curr, idx) => {
                    if (curr.value === tasks[curr.index].correct_answer) {
                      acc += 1;
                    }
                    return acc;
                  }, 0)*100/tasks.length > 60 ? <p style={{fontWeight: '600', color: '#34C924'}}>Поздравляем тест успешно пройден! Вы будете порекомендованы компаниям.</p> : 
                  <p style={{fontWeight: '600', color: 'crimson'}}>К сожалению тест провален! Вы можете найти ментора на нашей платформе.</p>}
                </p>
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
