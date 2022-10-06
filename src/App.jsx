import React from "react";
import { Dashboard } from "./components/Dashboard";
import "./index.css";

function App() {
  return (
    <main className="min-h-screen bg-verydarkblue font-rubik text-white lg:grid lg:place-items-center">
      <Dashboard />
    </main>
  );
}

export { App };
