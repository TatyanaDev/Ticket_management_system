import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './pages/Register'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

