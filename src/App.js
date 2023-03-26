import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "./components/sidebar/sidebar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Users from "./pages/users/users";
import Serves from "./pages/serves/serves";

import Home from "./pages/home/home";
import Projects from "./pages/projects/projects";

import Navbar from './components/FixedNavbar/FixedNavbar';
import Footer from './components/Footer/Footer';
import CreateContest from './pages/Contests/CreateContest/CreateContest';
import EditContest from './pages/Contests/EditContest/EditContest';
import Contest from './pages/Contests/Contest/Contest';
import Project from './pages/projects/Project/Project';
import CreateProject from './pages/projects/CreateProject/CreateProject';
import EditProject from './pages/projects/EditProject/EditProject';

function App() {
  return (
    <div className="mainapp" dir="rtl">
      <Container className="">

        <Row gap={3}>
          <Col className="sidebar-container" lg={3}>
            <Sidebar />
          </Col>

          <Col lg={9} className="routing-page">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/home" element={<Home />} />
              <Route path="/serves" element={<Serves />} />
              <Route path="/users" element={<Users />} />
              <Route path="/projects" element={<Projects />} />

              <Route exact path="/createContest" element={<CreateContest/>} />
              <Route exact path="/contest/:id" element={<EditContest/>} />
              <Route exact path="/contest" element={<Contest/>} />
              <Route exact path="/createProject" element={<CreateProject/>} />
              <Route exact path="/project/:id" element={<EditProject/>} />
              <Route exact path="/project" element={<Project/>} />
            </Routes>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default App;
