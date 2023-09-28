import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Route, Routes } from "react-router-dom";
import BottomNavigation from "./components/BottomNavigation";
import EventCardList from "./components/EventCardList";
import EventDetails from "./components/EventDetails";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="container mx-auto rounded-xl shadow border p-4">
              <EventCardList />
            </div>
          }
        />
        <Route path="/event/:id" element={<EventDetails />} />
      </Routes>
      <BottomNavigation />
    </Router>
  );
}

export default App;
