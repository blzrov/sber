import { Button } from "@mantine/core";
import { Row, Col } from "react-bootstrap";

export default function VacancyCard(){
    return <div>
        <Row>
            <Col md={6} className="mx-auto">
                <h2 className="text-center">Название вакансии</h2>
                <p>Работодатель</p>
                <p>50000р./мес.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, reprehenderit in harum at quo, consectetur neque cum quia fuga fugit dicta facere quasi quidem? Laboriosam eveniet totam harum repellat tenetur.</p>
                <Button color="green" className="w-100">Откликнуться</Button>
            </Col>
        </Row>
    </div>
}