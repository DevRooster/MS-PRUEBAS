import "./App.css"; // Importamos el archivo CSS
import { Dash } from "./components/home/Dash";
import { LoginWeb } from "./components/home/LoginWeb"; //Importamos el componente LoginWeb
import { RegisterWeb } from "./components/home/RegisterWeb";
import { BrowserRouter, Route, Routes } from "react-router-dom";


export function App() {
  
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginWeb/>} />
          <Route path="/register" element={<RegisterWeb/>} />
          <Route path="/dashboard" element={<Dash/>} />
        </Routes>
      </BrowserRouter>

  );
}