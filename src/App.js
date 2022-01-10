import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersListPage from './pages/UsersList'
import RecentActivityPage from './pages/RecentActivity'
import TicketHistoryPage from './pages/TicketHistory'
import TicketListPage from './pages/TicketList'
import DashboardPage from './pages/Dashboard';
import Register from './pages/Register'
import Settings from './pages/Settings'
import Login from './pages/Login'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/dashboard' element={<DashboardPage />} />
        <Route exact path='/ticket_history' element={<TicketHistoryPage />} />
        <Route exact path='/ticket_list' element={<TicketListPage />} />
        <Route exact path='/recent_activity' element={<RecentActivityPage />} />
        <Route exact path='/users_list' element={<UsersListPage />} />
        <Route exact path='/settings' element={<Settings />} />
      </Routes >
    </BrowserRouter >
  );
}

