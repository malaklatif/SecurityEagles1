import React from 'react';
import { 
  Home, 
  BookOpen,
  Award,
  FileText,
  Target,
  Calendar,
  Settings,
  Search
} from 'lucide-react';

const username = localStorage.getItem('username');

const Sidebar = ({ selectedMenu, setSelectedMenu }) => {
  const [search, setSearch] = React.useState('');

  const menuItems = [
    { icon: Home, label: 'Overview' },
    { icon: BookOpen, label: 'Learning Path' },
    { icon: Award, label: 'Certification' },
    { icon: FileText, label: 'My Docs' },
    { icon: Target, label: 'Mission' },
    { icon: Calendar, label: 'Calendar' },
  ];

  return (
    <div className="w-64 bg-white h-screen border-r border-blue-100 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-blue-100">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">SE </span>
          </div>
          <span className="font-semibold text-blue-800">
            Welcome {username ? username : 'User'}
          </span>
        </div>
      </div>

      {/* Search */}
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-blue-50 border border-blue-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {menuItems
            .filter(item => item.label.toLowerCase().includes(search.toLowerCase()))
            .map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => setSelectedMenu(item.label)}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors w-full text-left ${
                    selectedMenu === item.label
                      ? 'bg-blue-50 text-blue-800'
                      : 'text-black hover:bg-blue-50'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            ))}
        </ul>
      </nav>

      {/* Settings */}
      <div className="p-4 border-t border-blue-100">
        <button
          onClick={() => setSelectedMenu('Settings')}
          className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors w-full text-left ${
            selectedMenu === 'Settings'
              ? 'bg-blue-50 text-blue-800'
              : 'text-blue-600 hover:bg-blue-50'
          }`}
        >
          <Settings className="w-5 h-5" />
          <span className="font-medium">Settings</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;