import { Sparkles, LogOut, User, BarChart2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';

export default function Header() {
  const { currentUser, logout } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showStats, setShowStats] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  // Hardcoded stats for now — can be wired to real data
  const stats = {
    appsAvailable: 3,
    yourSubscriptions: 0,
    satisfaction: '100%'
  };

  return (
    <header className="bg-white border-b border-gray-200 page-blue-tint">
      <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-12 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Brand - show only NTT DATA logo on the left */}
          <div className="flex items-center">
            <img src="/nttdata_logo.png" alt="NTT DATA" className="h-8" />
          </div>

          {/* Right-side controls: Stats + User Menu */}
          <div className="flex items-center gap-4">
            {/* Stats Button - always visible */}
            <div className="relative">
              <button
                onClick={() => setShowStats(!showStats)}
                aria-expanded={showStats}
                aria-controls="stats-dropdown"
                className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 rounded-xl px-3 py-2 transition-colors"
              >
                <BarChart2 className="w-5 h-5 text-gray-700" />
                <span className="hidden sm:inline text-sm text-gray-700">Stats</span>
              </button>

              {showStats && (
                <div id="stats-dropdown" className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-200">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">Platform stats</p>
                    <p className="text-xs text-gray-500">Quick overview</p>
                  </div>
                  <div className="px-4 py-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Apps Available</span>
                      <span className="font-medium text-gray-900">{stats.appsAvailable}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Your Subscriptions</span>
                      <span className="font-medium text-gray-900">{stats.yourSubscriptions}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Satisfaction</span>
                      <span className="font-medium text-gray-900">{stats.satisfaction}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* User Menu (only when logged in) */}
            {currentUser && (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-3 bg-gray-50 hover:bg-gray-100 rounded-xl px-4 py-2 transition-colors"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-left hidden sm:block">
                    <p className="text-sm font-medium text-gray-900">
                      {currentUser.displayName || 'User'}
                    </p>
                    <p className="text-xs text-gray-500">
                      {currentUser.email}
                    </p>
                  </div>
                </button>

                {/* Dropdown Menu */}
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">
                        {currentUser.displayName || 'User'}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {currentUser.email}
                      </p>
                    </div>
                    
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Click outside overlays to close dropdowns */}
      {(showUserMenu || showStats) && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => {
            setShowUserMenu(false);
            setShowStats(false);
          }}
        ></div>
      )}
    </header>
  );
}
