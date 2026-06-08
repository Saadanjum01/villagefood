import React from "react";
import { BrowserRouter, Navigate, Routes, Route, useParams } from "react-router-dom";
import { Toaster } from "sonner";
import "@/App.css";

import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Menu from "@/pages/Menu";
import Locations from "@/pages/Locations";
import LocationDetail from "@/pages/LocationDetail";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Feedback from "@/pages/Feedback";

const LocationRouteRedirect = () => {
  const { id } = useParams();
  return <Navigate to={`/${id}`} replace />;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/locations/:id" element={<LocationRouteRedirect />} />
            <Route path="/:id" element={<LocationDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-right"
        richColors
        toastOptions={{
          style: {
            fontFamily: "Oswald, sans-serif",
            letterSpacing: "0.04em",
          },
        }}
      />
    </div>
  );
}

export default App;
