import { Box } from "@mui/material";
import { Routes, Route, useLocation } from "react-router-dom";

//import components
import About from "./about.jsx";
import Projects from "./projects.jsx";
import Skills from "./skills.jsx";

//import modules
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <Box>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </AnimatePresence>
    </Box>
  );
};

export default AnimatedRoutes;
