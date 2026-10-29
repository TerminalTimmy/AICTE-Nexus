import { useState, useRef, useEffect } from 'react';
import { Search, Bell, User, ToggleLeft, ToggleRight } from 'lucide-react';
import { MOCK_NOTIFICATIONS } from '../data/mockData';

export default function Header({ role, onRoleChange, showNotifications, onToggleNotifications }) {
  const [searchQuery, setSearchQuery] = useState('');
  const notifRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        if (showNotifications) onToggleNotifications();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showNotifications, onToggleNotifications]);

  const isRB = role === 'RB';

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 flex-shrink-0 shadow-sm z-20">
      {/* Search */}
      <div className="relative w-96">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Search cases, institutions, officers..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all"
        />
      </div>

      {/* Right section */}
      <div className="flex items-center gap-5">
        {/* Role Toggle */}
        <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-lg px-4 py-1.5">
          <span
            className={`text-xs font-semibold tracking-wide transition-colors ${
              isRB ? 'text-blue-600' : 'text-slate-400'
            }`}
          >
            RB Officer
          </span>
          <button
            onClick={() => onRoleChange(isRB ? 'PGRC' : 'RB')}
            className="relative focus:outline-none"
            aria-label="Toggle role"
          >
            <div className={`w-11 h-6 rounded-full transition-colors ${isRB ? 'bg-blue-600' : 'bg-emerald-600'}`}>
              <div
                className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform ${
                  isRB ? 'left-0.5' : 'left-[22px]'
                }`}
              />
            </div>
          </button>
          <span
            className={`text-xs font-semibold tracking-wide transition-colors ${
              !isRB ? 'text-emerald-600' : 'text-slate-400'
            }`}
          >
            PGRC Official
          </span>
        </div>

        {/* Notification Bell */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={onToggleNotifications}
            className="relative p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <Bell size={20} className="text-slate-600" />
            <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm">
              4
            </span>
          </button>

          {/* Notification Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 top-12 w-96 bg-white rounded-xl shadow-2xl border border-slate-200 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2">
              <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                <h3 className="font-semibold text-sm text-slate-800">Notifications</h3>
                <span className="text-xs text-blue-600 font-medium cursor-pointer hover:underline">
                  Mark all read
                </span>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {MOCK_NOTIFICATIONS.map((n) => (
                  <div
                    key={n.id}
                    className={`px-4 py-3 border-b border-slate-50 hover:bg-slate-50 cursor-pointer transition-colors ${
                      n.urgent ? 'bg-red-50/50' : ''
                    }`}
                  >
                    <p className="text-sm text-slate-700">{n.text}</p>
                    <p className="text-xs text-slate-400 mt-1">{n.time}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* User avatar */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
            <User size={16} className="text-slate-600" />
          </div>
        </div>
      </div>
    </header>
  );
}
