import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Register from './pages/Register'
import Login from './pages/Login'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Register />} />

        <Route exact path='/dashboard' element={<Dashboard />} />

        <Route exact path='/login' element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

