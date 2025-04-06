import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import Home from '../pages/Home';
import WalkIn from '../pages/WalkIn';
import Rooms from '../pages/Rooms';
import ManageRate from '../pages/ManageRate';
import MakeReservation from '../pages/MakeReservation';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/walk-in" element={<WalkIn />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/manage-rate" element={<ManageRate />} />
      <Route path="/make-reservation" element={<MakeReservation />} />
    </Routes>
  );
}
