import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
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
import MentorProfile from "./pages/MentorProfile";
import Test from "./pages/Test";
import CreateVacancy from "./pages/CreateVacancy";
import CreateOrder from "./pages/CreateOrder";
import OrderCard from "./pages/OrderCard";
import VacancyCard from "./pages/VacancyCard";

export default function App() {
  const navigate = useNavigate();
  useEffect(() => {
    // if(!localStorage.getItem('user')){
    //   navigate('/auth')
    // }
  }, []);

  return (
    <Container className="App">
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/auth" element={<Authorization />} />
          <Route path="/applicant/:id" element={<ApplicantProfile />} />
          <Route path="/applicant/edit" element={<ApplicantEdit />} />
          <Route path="/employer/:id" element={<EmployerProfile />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<Test />} />
          <Route path="/customer/:id" element={<CustomerProfile />} />
          <Route path="/vacancy/new" element={<CreateVacancy />} />
          <Route path="/create-order" element={<CreateOrder/>}/>
          <Route path="/mentor/:id" element={<MentorProfile />} />
          <Route path="/order-card/:id" element={<OrderCard/>}/>
          <Route path="/vacancy-card/:id" element={<VacancyCard/>}/>
        </Routes>
      </div>
    </Container>
  );
}
