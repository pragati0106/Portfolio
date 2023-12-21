// Packages Import
import { BrowserRouter } from "react-router-dom";


// Components Import
import Header from "./components/header.jsx";
import AnimatedRoutes from "./components/animatedRoutes.jsx";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
          <AnimatedRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
