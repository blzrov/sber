import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Second from "./pages/Second";
import Error from "./pages/Error";
import Container from "react-bootstrap/Container";
import Authorization from "./pages/Authoriztion";
import { useEffect } from "react";

export default function App() {
  const navigate = useNavigate()
  useEffect(() => {
    if(!localStorage.getItem('user')){
      navigate('/auth')
    }
  }, [])

  return (
    <Container fluid className="App">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/second" element={<Second />} />
          <Route path="*" element={<Error />} />
          <Route path="/auth" element={<Authorization/>}/>
        </Routes>
      </div>
    </Container>
  );
}
