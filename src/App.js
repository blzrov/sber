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
import Applicants from "./pages/Applicants";
import CreateOrder from "./pages/CreateOrder";
import Employers from "./pages/Employers";
import Vacancys from "./pages/Vacancys";
import OrderCard from "./pages/OrderCard";
import VacancyCard from "./pages/VacancyCard";
import Orders from "./pages/Orders";
import CustomerEdit from "./pages/CustomerEdit";
import EmployerEdit from "./pages/EmployerEdit";
import { ToastProvider } from "react-toast-notifications";

export default function App() {
  const navigate = useNavigate();
  useEffect(() => {
    // if(!localStorage.getItem('user')){
    //   navigate('/auth')
    // }
  }, []);

  return (
    <ToastProvider autoDismiss autoDismissTimeout={4000} placement="top-right">
      <Container className="App">
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
            <Route path="/auth" element={<Authorization />} />
            <Route path="/applicants" element={<Applicants />} />
            <Route path="/applicant/:id" element={<ApplicantProfile />} />
            <Route path="/applicant/edit" element={<ApplicantEdit />} />
            <Route path="/employer/:id" element={<EmployerProfile />} />
            <Route path="/employer/edit" element={<EmployerEdit />} />
            <Route path="/employers" element={<Employers />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<Test />} />
            <Route path="/customer/:id" element={<CustomerProfile />} />
            <Route path="/customer/edit" element={<CustomerEdit />} />
            <Route path="/vacancy/new" element={<CreateVacancy />} />
            <Route path="/vacancys" element={<Vacancys />} />
            <Route path="/create-order" element={<CreateOrder />} />
            <Route path="/mentor/:id" element={<MentorProfile />} />
            <Route path="/order-card/:id" element={<OrderCard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/vacancy-card/:id" element={<VacancyCard />} />
          </Routes>
        </div>
      </Container>
    </ToastProvider>
  );
}
