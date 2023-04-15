import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Second from "./pages/Second";
import Error from "./pages/Error";
import ApplicantProfile from "./pages/ApplicantProfile";
import ApplicantEdit from "./pages/ApplicantEdit";
import Container from "react-bootstrap/Container";

export default function App() {
  return (
    <Container className="App">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/second" element={<Second />} />
          <Route path="*" element={<Error />} />
          <Route path="/applicant/:id" element={<ApplicantProfile />} />
          <Route path="/applicant/edit" element={<ApplicantEdit />} />
        </Routes>
      </div>
    </Container>
  );
}
