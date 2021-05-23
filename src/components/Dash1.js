
import Sidebar from './sideber';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashbord from './dashbord';

function Dashb() {
  return (
    <Router>
      <div className="Apppp">
        <Sidebar />
        <Dashbord />
      </div>
    </Router>
  );
}

export default Dashb;