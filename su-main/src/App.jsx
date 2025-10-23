import { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Products from './components/Products';
import Login from './components/Login';
import Signup from './components/Signup';

// Main App Content (shown when user is authenticated)
function AppContent() {
  const { currentUser } = useAuth();
  
  const handleSubscribe = (productName, redirectUrl) => {
    console.log(`Subscribing to ${productName}`);
    window.location.href = redirectUrl;
  };

  if (!currentUser) {
    return <AuthFlow />;
  }

  return (
    
    <div className="min-h-screen bg-gray-50 page-blue-tint">
      <Header />

      {/* Hero Section - Primary Intro */}
      <HeroSection />

  {/* Products Section - Focused listing below hero */}
  <section className="pt-4 sm:pt-4 lg:pt-4 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Products onSubscribe={handleSubscribe} />
        </div>
      </section>
    </div>
  );
}

// Authentication Flow Component
function AuthFlow() {
  const [isLogin, setIsLogin] = useState(true);

  const switchToSignup = () => setIsLogin(false);
  const switchToLogin = () => setIsLogin(true);

  return isLogin ? (
    <Login onSwitchToSignup={switchToSignup} />
  ) : (
    <Signup onSwitchToLogin={switchToLogin} />
  );
}

// Main App Component with Authentication Provider
function App() {
  return (
    
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
