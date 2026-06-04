import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Register from "./pages/Register";
import ProtetcRoute from "./routes/ProtetcRoute";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={
          <ProtetcRoute>
<Dashboard />
          </ProtetcRoute>
          
          
          } />
      </Routes>
    </>
  );
}

export default App;