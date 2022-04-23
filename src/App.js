import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecentActivityPage from './Pages/RecentActivity'
import TicketHistoryPage from './Pages/TicketHistory'
import TicketListPage from './Pages/TicketList'
import DashboardPage from './Pages/Dashboard';
import UsersListPage from './Pages/UsersList'
import Register from './Pages/Register'
import Settings from './Pages/Settings'
import Login from './Pages/Login'

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

