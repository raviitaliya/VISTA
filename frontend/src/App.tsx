import { Route, Routes, Navigate } from "react-router-dom";
import FristPage from "./pages/FristPage";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import "./App.css";
import HomePage from "./pages/HomePage";
import Layout from "./Layout"; // Add this import
import Profile from "./pages/Profile";
import UploadContant from "./pages/UploadContant";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};





const AuthRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem('token');
  if (token) {
    return <Navigate to="/home" replace />;
  }
  return <>{children}</>;
};

function App() {
  return (
    <Layout> {/* Wrap the Routes with Layout */}
      <Routes>
        <Route 
          path="/login" 
          element={
            <AuthRoute>
              <Login />
            </AuthRoute>
          } 
        />
        <Route 
          path="/signup" 
          element={
            <AuthRoute>
              <Signup />
            </AuthRoute>
          } 
        />
        <Route 
          path="/home" 
          element={
            <ProtectedRoute>
              <FristPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/following" 
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } 
        />
        
        <Route 
          path="/editor" 
          element={
            <ProtectedRoute>
              <UploadContant />
            </ProtectedRoute>
          } 
        />
        

        <Route 
          path="*" 
          element={
            <ProtectedRoute>
              <Navigate to="/home" replace />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Layout>
  );
}

export default App;