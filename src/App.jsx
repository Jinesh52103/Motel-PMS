import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from "../components/AppRoutes";
import Home from '../pages/Home';

function App() {
  return (

   <Router>
      <AppRoutes />
   </Router>
  );
}

export default App;
