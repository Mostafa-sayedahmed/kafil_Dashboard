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

function App() {
  return (
    <div className="mainapp" dir="rtl">
      <Container className="p-3">
        <Row gap={3}>
          <Col lg={3}>
            <Sidebar />
          </Col>

          <Col lg={9} className="routing-page">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/home" element={<Home />} />
              <Route path="/serves" element={<Serves />} />
              <Route path="/users" element={<Users />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
