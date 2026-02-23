import React from 'react';
import { useAuth } from '../services/authContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiBarChart2, FiPlus, FiTrendingUp, FiActivity, FiMusic, FiMap, FiUser, FiLogOut } from 'react-icons/fi';
import { FaHeartbeat } from 'react-icons/fa';

export default function Navbar() {
  const { token, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  if (!token || location.pathname === '/login' || location.pathname === '/register') {
    return null;
  }

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: FiBarChart2 },
    { path: '/add-health', label: 'Log Health', icon: FiPlus },
    { path: '/history', label: 'History', icon: FiTrendingUp },
    { path: '/medical', label: 'Medical', icon: FaHeartbeat },
    { path: '/workout', label: 'Workout', icon: FiActivity },
    { path: '/music', label: 'Music', icon: FiMusic },
    { path: '/maps', label: 'Maps', icon: FiMap },
    { path: '/profile', label: 'Profile', icon: FiUser },
  ];

  return (
    <nav className="nav" style={{
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'flex-start',
      overflowX: 'auto',
      paddingRight: '20px'
    }}>
      {navItems.map(item => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            title={item.label}
            style={{
              background: isActive 
                ? 'linear-gradient(135deg, #00D9FF 0%, #1DE9B6 100%)'
                : 'rgba(0, 217, 255, 0.1)',
              color: isActive ? '#0a0e27' : '#00D9FF',
              padding: '10px 16px',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              border: isActive ? 'none' : '1px solid rgba(0, 217, 255, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontWeight: isActive ? '700' : '600',
              fontSize: '14px'
            }}
          >
            <Icon size={18} />
            {item.label}
          </button>
        );
      })}
      <button
        onClick={logout}
        style={{
          marginLeft: 'auto',
          background: 'rgba(255, 107, 157, 0.2)',
          color: '#FF6B9D',
          border: '1px solid rgba(255, 107, 157, 0.4)',
          padding: '10px 16px',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontWeight: '600',
          fontSize: '14px'
        }}
      >
        <FiLogOut size={18} />
        Logout
      </button>
    </nav>
  );
}
