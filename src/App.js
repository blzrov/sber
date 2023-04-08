import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Second from "./pages/Second";
import Error from "./pages/Error";
import Container from "react-bootstrap/Container";

export default function App() {
  return (
    <Container fluid className="App">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/second" element={<Second />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Container>
  );
}
