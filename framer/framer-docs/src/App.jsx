import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import "./index.css";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/home"));
const Docs = lazy(() => import("./pages/docs"));
const Egghead = lazy(() => import("./pages/Egghead"));

import { Dialog } from "daisyui"; // Import Daisy UI Dialog for better modal
import { FaRocket, FaHandPeace, FaCogs } from "react-icons/fa"; // Importing icons from react-icons
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <div className="h-screen flex items-center justify-center">
                  Loading...
                </div>
              }
            >
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/docs"
          element={
            <Suspense
              fallback={
                <div className="h-screen flex items-center justify-center">
                  Loading...
                </div>
              }
            >
              <Docs />
            </Suspense>
          }
        />
        <Route
          path="/egghead"
          element={
            <Suspense
              fallback={
                <div className="h-screen flex items-center justify-center">
                  Loading...
                </div>
              }
            >
              <Egghead />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
