import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
import Context from "./pages/Context/Context";

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
              <Route path="/Context" element={<Context />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
