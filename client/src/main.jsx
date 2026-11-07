//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/react";

//import Published Key
const publishedKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!publishedKey) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <ClerkProvider publishableKey={publishedKey} afterSignInUrl="/">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ClerkProvider>,
);
