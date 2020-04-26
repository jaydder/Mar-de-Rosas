import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Events from "./pages/Events";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/events' exact element={<Events />} />
    </Routes>
  );
}
