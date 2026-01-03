import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { Toaster } from './components/ui/sonner';
import SplashScreen from './components/SplashScreen';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import ForgotPassword from './components/auth/ForgotPassword';
import TwoFactorAuth from './components/auth/TwoFactorAuth';
import Dashboard from './components/Dashboard';
import MessageAnalyzer from './components/MessageAnalyzer';
import SeverityResult from './components/SeverityResult';
import AIResponse from './components/AIResponse';
import ModeratorDashboard from './components/ModeratorDashboard';
import Analytics from './components/Analytics';
import AdminPanel from './components/AdminPanel';
import Settings from './components/Settings';
import ErrorBlocked from './components/ErrorBlocked';

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <Router>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/2fa" element={<TwoFactorAuth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analyzer" element={<MessageAnalyzer />} />
          <Route path="/result" element={<SeverityResult />} />
          <Route path="/ai-response" element={<AIResponse />} />
          <Route path="/moderator" element={<ModeratorDashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/blocked" element={<ErrorBlocked />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
      <Toaster />
    </ThemeProvider>
  );
}
