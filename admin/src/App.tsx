import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './auth/Login';
import Layout from './layout/Layout';
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Layout />} />
        
        </Routes>
      </div>
    </Router>
  );
}


export default App;