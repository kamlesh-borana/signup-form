import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUpPage1 from "./pages/SignUpPage1";
import SignUpPage2 from "./pages/SignUpPage2";
import SignUpPage3 from "./pages/SignUpPage3";
import SignUpPage4 from "./pages/SignUpPage4";
import "./App.css";

export default function App() {
  const [details, setDetails] = useState({
    fullName: "",
    displayName: "",
    workspaceName: "",
    workspaceUrl: "",
    usageType: "",
  });

  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<SignUpPage1 details={details} setDetails={setDetails} />}
          />
          <Route
            path="/page2"
            element={<SignUpPage2 details={details} setDetails={setDetails} />}
          />
          <Route
            path="/page3"
            element={<SignUpPage3 details={details} setDetails={setDetails} />}
          />
          <Route
            path="/page4"
            element={<SignUpPage4 details={details} setDetails={setDetails} />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
