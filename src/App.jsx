import { useState } from "react";

import "./App.css";

import { Route, Routes } from "react-router-dom";
import CustomerRoutes from "./Routes/CustomerRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/*" element={<CustomerRoutes />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
