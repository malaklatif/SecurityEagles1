import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import CreditCard from '../components/CreditCard';
import ExchangeRatesChart from '../components/ExchangeRatesChart';
import LastCostsChart from '../components/LastCostsChart';
import EfficiencyChart from '../components/EfficiencyChart';
import UserProfileCard from '../components/UserProfileCard';
import RecentActivities from '../components/RecentActivities';
import PDFReportCard from '../components/PDFReportCard';
import CalendarContent from '../components/CalendarContent';
import CertificationsContent from '../components/CertificationsContent';
import MissionsContent from '../components/MissionsContent';
import MyDocsContent from '../components/MyDocsContent';
import LearningPath from '../components/learningpath';

const Dashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState('Overview');
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('access_token')) {
      navigate('/login');
    }
  }, [navigate]);

  const renderContent = () => {
    switch (selectedMenu) {
      case 'Overview':
        return (
          <div className="grid grid-cols-12 gap-6">
            {/* Left Column */}
            <div className="col-span-8">
              <div className="grid grid-cols-2 gap-6 mb-6">
                {/* Credit Card */}
                <div className="col-span-1">
                  <CreditCard />
                </div>
                
                {/* Exchange Rates Chart */}
                <div className="col-span-1">
                  <ExchangeRatesChart />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {/* Last Costs Chart */}
                <div className="col-span-1">
                  <LastCostsChart />
                </div>
                
                {/* Efficiency Chart */}
                <div className="col-span-1">
                  <EfficiencyChart />
                </div>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="col-span-4 space-y-6">
              {/* User Profile Card */}
              <UserProfileCard />
              
              {/* Recent Activities */}
              <RecentActivities />
              
              {/* PDF Report Card */}
            </div>
          </div>
        );
      case 'Learning Path':
        return <LearningPath/>
        ;
      case 'Certification':
        return <CertificationsContent />;
      case 'My Docs':
        return <MyDocsContent />;
      case 'Mission':
        return <MissionsContent />;
      case 'Calendar':
        return <CalendarContent />;
      case 'Settings':
        return (
          <div className="bg-white rounded-xl p-8 shadow text-blue-900 space-y-6">
            <h2 className="text-2xl font-bold mb-4">Settings</h2>
            <p className="text-blue-700 mb-6">Manage your account and preferences.</p>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email Notifications</label>
                <select className="w-full border border-blue-200 rounded-lg p-2">
                  <option>Enabled</option>
                  <option>Disabled</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Change Password</label>
                <input type="password" className="w-full border border-blue-200 rounded-lg p-2" placeholder="New password" />
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Save Changes</button>
            </form>
          </div>
        );
      default:
        return <div>Overview Content</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header selectedMenu={selectedMenu} />
        
        {/* Dashboard Content */}
        <div className="flex-1 p-8">
          {/* Back to Home Button */}
          <div className="mb-6">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 px-4 py-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <Home className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Home</span>
            </button>
          </div>
          
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
