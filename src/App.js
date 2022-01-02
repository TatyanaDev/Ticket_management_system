import { BrowserRouter, Routes, Route } from "react-router-dom";
import TicketListPage from './pages/TicketList'
import DashboardPage from './pages/Dashboard';
import Register from './pages/Register'
import Login from './pages/Login'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/dashboard' element={<DashboardPage />} />
        <Route exact path='/ticket_list' element={<TicketListPage />} />
      </Routes >
    </BrowserRouter >
  );
}

