import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Second from "./pages/Second";
import Error from "./pages/Error";
import ApplicantProfile from "./pages/ApplicantProfile";
import ApplicantEdit from "./pages/ApplicantEdit";
import Container from "react-bootstrap/Container";
import Authorization from "./pages/Authoriztion";
import { useEffect } from "react";
import EmployerProfile from "./pages/EmployerProfile";
import Courses from "./pages/Courses";
import CustomerProfile from "./pages/CustomerProfile";
import Header from "./components/Header";
import Test from "./pages/Test";

export default function App() {
  const navigate = useNavigate()
  useEffect(() => {
    // if(!localStorage.getItem('user')){
    //   navigate('/auth')
    // }
  }, [])

  return (
    <Container className="App">
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/second" element={<Second />} />
          <Route path="*" element={<Error />} />
          <Route path="/auth" element={<Authorization/>}/>
          <Route path="/applicant/:id" element={<ApplicantProfile />} />
          <Route path="/applicant/edit" element={<ApplicantEdit />} />
          <Route path="/employer/:id" element={<EmployerProfile/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/courses/:id" element={<Test/>}/>
          <Route path="/customer/:id" element={<CustomerProfile/>}/>
        </Routes>
      </div>
    </Container>
  );
}
