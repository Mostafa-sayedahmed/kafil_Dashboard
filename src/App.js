import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "./components/sidebar/sidebar";
import { Routes, Route, Router } from "react-router-dom";
import { useState } from "react";

import Users from "./pages/users/users";
import Serves from "./pages/serves/serves";

import Home from "./pages/home/home";

import Contest from "./pages/Contests/Contest/Contest";

import Projects from "./pages/projects/Project/projects";
import Login from "./pages/Login/Login";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import ProtectedRoute from "./components/protectedRoute/protectedRoute";
import ContestDetails from "./pages/Contests/ContestDetails/ContestDetails";
import Viewservice from "./pages/viewservice/viewservice";
import Portfolios from "./pages/portfolois/portfolois";

function App() {
  let isLogged = localStorage.getItem("isLogged");

  return (
    // <>
    //   <Routes>
    //     <Route path="/" element={<Login />} />

    //     <Route path="/Login" element={<Login />} />

    //     <Route path="/forgetpassword" element={<ForgetPassword />} />

    //     <Route
    //       path="/Context"
    //       element={
    //         // <ProtectedRoute isLoggedIn={token}>
    //         <div className="mainapp" dir="rtl">
    //           <Container className="">
    //             <Row gap={3}>
    //               <Col className="sidebar-container" lg={3}>
    //                 <Sidebar />
    //               </Col>
    //               <Col lg={9} className="routing-page">
    //                 <Context />
    //               </Col>
    //             </Row>
    //           </Container>
    //         </div>
    //         // </ProtectedRoute>
    //       }
    //     />

    //     <Route
    //       path="/dashboard"
    //       element={
    //         // <ProtectedRoute isLoggedIn={token}>
    //         <div className="mainapp" dir="rtl">
    //           <Container className="">
    //             <Row gap={3}>
    //               <Col className="sidebar-container" lg={3}>
    //                 <Sidebar />
    //               </Col>
    //               <Col lg={9} className="routing-page">
    //                 <Dashboard />
    //               </Col>
    //             </Row>
    //           </Container>
    //         </div>
    //         // </ProtectedRoute>
    //       }
    //     />

    //     <Route
    //       path="/home"
    //       element={
    //         // <ProtectedRoute isLoggedIn={token}>
    //         <div className="mainapp" dir="rtl">
    //           <Container className="">
    //             <Row gap={3}>
    //               <Col className="sidebar-container" lg={3}>
    //                 <Sidebar />
    //               </Col>
    //               <Col lg={9} className="routing-page">
    //                 <Home />
    //               </Col>
    //             </Row>
    //           </Container>
    //         </div>
    //         // </ProtectedRoute>
    //       }
    //     />

    //     <Route
    //       path="/users"
    //       element={
    //         // <ProtectedRoute isLoggedIn={token}>
    //         <div className="mainapp" dir="rtl">
    //           <Container className="">
    //             <Row gap={3}>
    //               <Col className="sidebar-container" lg={3}>
    //                 <Sidebar />
    //               </Col>
    //               <Col lg={9} className="routing-page">
    //                 <Users />
    //               </Col>
    //             </Row>
    //           </Container>
    //         </div>
    //         // </ProtectedRoute>
    //       }
    //     />

    //     <Route
    //       path="/serves"
    //       element={
    //         // <ProtectedRoute isLoggedIn={token}>
    //         <div className="mainapp" dir="rtl">
    //           <Container className="">
    //             <Row gap={3}>
    //               <Col className="sidebar-container" lg={3}>
    //                 <Sidebar />
    //               </Col>
    //               <Col lg={9} className="routing-page">
    //                 <Serves />
    //               </Col>
    //             </Row>
    //           </Container>
    //         </div>
    //         // </ProtectedRoute>
    //       }
    //     />

    //     <Route
    //       path="/projects"
    //       element={
    //         // <ProtectedRoute isLoggedIn={token}>
    //         <div className="mainapp" dir="rtl">
    //           <Container className="">
    //             <Row gap={3}>
    //               <Col className="sidebar-container" lg={3}>
    //                 <Sidebar />
    //               </Col>
    //               <Col lg={9} className="routing-page">
    //                 <Projects />
    //               </Col>
    //             </Row>
    //           </Container>
    //         </div>
    //         // </ProtectedRoute>
    //       }
    //     />
    //     <Route
    //       path="/viewservice"
    //       element={
    //         // <ProtectedRoute isLoggedIn={token}>
    //         <div className="mainapp" dir="rtl">
    //           <Container className="">
    //             <Row gap={3}>
    //               <Col className="sidebar-container" lg={3}>
    //                 <Sidebar />
    //               </Col>
    //               <Col lg={9} className="routing-page">
    //                 <Viewservice />
    //               </Col>
    //             </Row>
    //           </Container>
    //         </div>
    //         // </ProtectedRoute>
    //       }
    //     />
    //   </Routes>
    // </>

    <div className="mainapp" dir="rtl">
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/Login" element={<Login />} />

        <Route path="/forgetpassword" element={<ForgetPassword />} />

        <Route
          path="/Contest"
          element={
            <ProtectedRoute isLoggedIn={isLogged}>
              <div className="mainapp" dir="rtl">
                <Container className="">
                  <Row gap={3}>
                    <Col className="sidebar-container" lg={3}>
                      <Sidebar />
                    </Col>
                    <Col lg={9} className="routing-page">
                      <Contest />
                    </Col>
                  </Row>
                </Container>
              </div>
            </ProtectedRoute>
          }
        />

        <Route
          path="/Contest/:id"
          element={
            <ProtectedRoute isLoggedIn={isLogged}>
              <div className="mainapp" dir="rtl">
                <Container className="">
                  <Row gap={3}>
                    <Col className="sidebar-container" lg={3}>
                      <Sidebar />
                    </Col>
                    <Col lg={9} className="routing-page">
                      <ContestDetails />
                    </Col>
                  </Row>
                </Container>
              </div>
            </ProtectedRoute>
          }
        />

        <Route
          path="/home"
          element={
            <ProtectedRoute isLoggedIn={isLogged}>
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
            </ProtectedRoute>
          }
        />

        <Route
          path="/users"
          element={
            <ProtectedRoute isLoggedIn={isLogged}>
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
            </ProtectedRoute>
          }
        />

        <Route
          path="/services"
          element={
            <ProtectedRoute isLoggedIn={isLogged}>
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
            </ProtectedRoute>
          }
        />
        <Route
          path="/services/:serviceid"
          element={
            <ProtectedRoute isLoggedIn={isLogged}>
              <div className="mainapp" dir="rtl">
                <Container className="">
                  <Row gap={3}>
                    <Col className="sidebar-container" lg={3}>
                      <Sidebar />
                    </Col>
                    <Col lg={9} className="routing-page">
                      <Viewservice />
                    </Col>
                  </Row>
                </Container>
              </div>
            </ProtectedRoute>
          }
        />

        <Route
          path="/projects"
          element={
            <ProtectedRoute isLoggedIn={isLogged}>
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
            </ProtectedRoute>
          }
        />
             <Route
          path="/portfolois"
          element={
            <ProtectedRoute isLoggedIn={isLogged}>
              <div className="mainapp" dir="rtl">
                <Container className="">
                  <Row gap={3}>
                    <Col className="sidebar-container" lg={3}>
                      <Sidebar />
                    </Col>
                    <Col lg={9} className="routing-page">
                      <Portfolios/>
                    </Col>
                  </Row>
                </Container>
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
      
    </div>
  );
}

export default App;
