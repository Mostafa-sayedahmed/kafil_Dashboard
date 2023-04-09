import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "./components/sidebar/sidebar";
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Dashboard from "./pages/dashboard/dashboard";
import Users from "./pages/users/users";
import Serves from "./pages/serves/serves";

import Home from "./pages/home/home";
import Context from "./pages/Context/Context";
import Navbar from './components/FixedNavbar/FixedNavbar';
import Footer from './components/Footer/Footer';
import CreateContest from './pages/Contests/CreateContest/CreateContest';
import EditContest from './pages/Contests/EditContest/EditContest';
import Contest from './pages/Contests/Contest/Contest';
import CreateProject from './pages/projects/CreateProject/CreateProject';
import EditProject from './pages/projects/EditProject/EditProject';
import Projects from './pages/projects/Project/projects';
import Login from "./pages/Login/Login";
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';
import ProtectedRoute from './components/protectedRoute/protectedRoute';

function App() {

  let token = localStorage.getItem('token');

  console.log(token);


  return (
    <>
      <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/Login" element={<Login />} />

          <Route path="/forgetpassword" element={<ForgetPassword />} />

          <Route path="/Context" element={
            // <ProtectedRoute isLoggedIn={token}>
                <div className="mainapp" dir="rtl">
                  <Container className="">
                      <Row gap={3}>
                        <Col className="sidebar-container" lg={3}>
                        <Sidebar />
                        </Col>
                        <Col lg={9} className="routing-page">          
                          <Context />
                        </Col>
                      </Row>
                  </Container>
                </div>
            // </ProtectedRoute> 
          } />

        <Route path="/dashboard" element={
            // <ProtectedRoute isLoggedIn={token}>
                <div className="mainapp" dir="rtl">
                  <Container className="">
                      <Row gap={3}>
                        <Col className="sidebar-container" lg={3}>
                        <Sidebar />
                        </Col>
                        <Col lg={9} className="routing-page">          
                        <Dashboard />
                        </Col>
                      </Row>
                  </Container>
                </div>
            // </ProtectedRoute>
          } />

        <Route path="/home" element={
            // <ProtectedRoute isLoggedIn={token}>
                <div className="mainapp" dir="rtl">
                  <Container className="">
                      <Row gap={3}>
                        <Col className="sidebar-container" lg={3}>
                        <Sidebar />
                        </Col>
                        <Col lg={9} className="routing-page">          
                        <Home />
                        </Col>
                      </Row>
                  </Container>
                </div>
            // </ProtectedRoute>
          } />

        <Route path="/users" element={
            // <ProtectedRoute isLoggedIn={token}>
                <div className="mainapp" dir="rtl">
                  <Container className="">
                      <Row gap={3}>
                        <Col className="sidebar-container" lg={3}>
                        <Sidebar />
                        </Col>
                        <Col lg={9} className="routing-page">          
                        <Users />
                        </Col>
                      </Row>
                  </Container>
                </div>
            // </ProtectedRoute>
          } />


          <Route path="/serves" element={
            // <ProtectedRoute isLoggedIn={token}>
                <div className="mainapp" dir="rtl">
                  <Container className="">
                      <Row gap={3}>
                        <Col className="sidebar-container" lg={3}>
                        <Sidebar />
                        </Col>
                        <Col lg={9} className="routing-page">          
                        <Serves />
                        </Col>
                      </Row>
                  </Container>
                </div>
            // </ProtectedRoute>
          } />

          <Route path="/Projects" element={
            // <ProtectedRoute isLoggedIn={token}>
                <div className="mainapp" dir="rtl">
                  <Container className="">
                      <Row gap={3}>
                        <Col className="sidebar-container" lg={3}>
                        <Sidebar />
                        </Col>
                        <Col lg={9} className="routing-page">          
                        <Projects />
                        </Col>
                      </Row>
                  </Container>
                </div>
            // </ProtectedRoute>
          } />

      </Routes>
    </>


    // <div className="mainapp" dir="rtl">
    //   <Container className="">

    //     <Row gap={3}>
    //       <Col className="sidebar-container" lg={3}>
    //         <Sidebar />
    //       </Col>

    //       <Col lg={9} className="routing-page">
    //         <Routes>
    //           <Route path="/" element={<Login />} />
    //           {/* <Route path="/" element={<Dashboard />} /> */}
    //           <Route path="/home" element={<Home />} />
    //           <Route path="/serves" element={<Serves />} />
    //           <Route path="/users" element={<Users />} />
    //           <Route path="/projects" element={<Projects />} />
    //           <Route exact path="/createContest" element={<CreateContest/>} />
    //           <Route exact path="/contest/:id" element={<EditContest/>} />
    //           <Route exact path="/contest" element={<Contest/>} />
    //           <Route exact path="/createProject" element={<CreateProject/>} />
    //           <Route exact path="/project/:id" element={<EditProject/>} />
    //           <Route exact path="/project" element={<Project/>} />
    //           <Route path="/Context" element={<Context />} />
    //           <Route path="/Login" element={<Login />} />
    //         </Routes>
    //       </Col>
    //     </Row>

    //   </Container>
    // </div>
  );
}

export default App;
