// src/pages/admin/AdminDashboard.jsx
import { 
  Users, BookOpen, GraduationCap, Building2, 
  Bell, Clock, TrendingUp, Award, AlertCircle,
  ChevronRight, Search
} from 'lucide-react';
import { useState } from 'react';

export default function AdminDashboard() {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock Data
  const stats = {
    totalStudents: 2847,
    totalFaculty: 89,
    totalCourses: 42,
    totalBranches: 6,
    activeBatches: 24,
    revenueThisMonth: "₹48.2L",
    completionRate: 87
  };

  const branchHierarchy = [
    { id: 1, name: "Mumbai Main Campus", dean: "Dr. Anita Sharma", students: 892, faculty: 28 },
    { id: 2, name: "Delhi NCR", dean: "Prof. Rajesh Kumar", students: 678, faculty: 22 },
    { id: 3, name: "Bangalore Tech Hub", dean: "Dr. Priya Menon", students: 512, faculty: 18 },
    { id: 4, name: "Pune Campus", dean: "Prof. Vikram Singh", students: 398, faculty: 12 },
    { id: 5, name: "Hyderabad", dean: "Dr. Neha Reddy", students: 245, faculty: 6 },
    { id: 6, name: "Chennai", dean: "Prof. Arjun Nair", students: 122, faculty: 3 }
  ];

  const recentNotifications = [
    { id: 1, type: "new-enrollment", message: "156 new students enrolled today", time: "2 mins ago", icon: Users },
    { id: 2, type: "course", message: "New course 'Ethical Hacking Pro' published", time: "1 hour ago", icon: BookOpen },
    { id: 3, type: "faculty", message: "Prof. Sarah Lee joined as Full Stack Mentor", time: "3 hours ago", icon: GraduationCap },
    { id: 4, type: "alert", message: "Server maintenance scheduled at 2:00 AM", time: "5 hours ago", icon: AlertCircle },
    { id: 5, type: "achievement", message: "98% students passed React Masterclass!", time: "1 day ago", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back, Admin</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search anything..."
                value={searchQuery}
                onChange={(e => setSearchQuery(e.target.value))}
                className="pl-12 pr-6 py-3 bg-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-200 w-80 transition"
              />
            </div>
            <button className="relative p-3 bg-red-50 rounded-full hover:bg-red-100 transition">
              <Bell className="w-6 h-6 text-red-600" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">5</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { label: "Total Students", value: stats.totalStudents.toLocaleString(), icon: Users, color: "from-blue-500 to-cyan-500", growth: "+12%" },
            { label: "Active Courses", value: stats.totalCourses, icon: BookOpen, color: "from-purple-500 to-pink-500", growth: "+3" },
            { label: "Faculty Members", value: stats.totalFaculty, icon: GraduationCap, color: "from-emerald-500 to-teal-500", growth: "+8" },
            { label: "Revenue (Month)", value: stats.revenueThisMonth, icon: TrendingUp, color: "from-orange-500 to-red-500", growth: "+18%" }
          ].map((stat, i) => (
            <div key={i} className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl p-7 border border-white/40 hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">{stat.growth}</span>
              </div>
              <p className="text-4xl font-bold text-gray-800">{stat.value}</p>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Branch Hierarchy + Recent Notifications */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Branch Hierarchy */}
          <div className="lg:col-span-2">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <Building2 className="w-8 h-8" />
                  Branch Hierarchy
                </h2>
                <p className="opacity-90 mt-1">All campuses across India</p>
              </div>
              <div className="p-6 space-y-4">
                {branchHierarchy.map((branch, index) => (
                  <div 
                    key={branch.id}
                    className="flex items-center justify-between p-5 bg-gray-50 rounded-2xl hover:bg-indigo-50 hover:border hover:border-indigo-200 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center text-2xl font-bold text-indigo-700">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">{branch.name}</h3>
                        <p className="text-sm text-gray-600">{branch.dean}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Students</p>
                      <p className="font-bold text-gray-800">{branch.students} students</p>
                      <p className="text-xs text-gray-500">{branch.faculty} faculty</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:translate-x-2 transition-transform" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Notifications */}
          <div>
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 h-full">
              <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white p-6 rounded-t-3xl">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <Bell className="w-8 h-8" />
                  Recent Notifications
                </h2>
                <p className="opacity-90 mt-1">Latest system updates</p>
              </div>
              <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
                {recentNotifications.map((notif) => (
                  <div key={notif.id} className="flex gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-red-50 transition-all group">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      notif.type === 'alert' ? 'bg-red-100' : 
                      notif.type === 'achievement' ? 'bg-emerald-100' : 'bg-indigo-100'
                    }`}>
                      <notif.icon className={`w-6 h-6 ${
                        notif.type === 'alert' ? 'text-red-600' : 
                        notif.type === 'achievement' ? 'text-emerald-600' : 'text-indigo-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-800">{notif.message}</p>
                      <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {notif.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-gray-500 text-sm">
          © 2025 Cybernetics LMS • Admin Portal • Secure & Powered by Love
        </div>
      </div>
    </div>
  );
}