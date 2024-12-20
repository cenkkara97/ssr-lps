import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import App from "./App";
import Form from "./form";
import ThankYouPage from "./components/thankyou-page";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact-form" element={<Form />} />
        <Route path="/ty" element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
