// src/pages/student/CoursesDashboard.jsx
import { useNavigate } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { 
  BookOpen, Clock, CheckCircle, Award, TrendingUp, 
  Search, Bell, ChevronRight, AlertCircle, Target
} from 'lucide-react';

import oip from '../../assets/OIP.jpg';
import node from '../../assets/node.webp';
import vue from '../../assets/vue.webp';
import python from '../../assets/python.webp';
import java from '../../assets/java.webp';
import ml from '../../assets/ML.webp';

export default function CoursesDashboard() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [showAllCourses, setShowAllCourses] = useState(false);

  const user = { firstName: "Rahul" };
  const stats = { enrolled: 8, completed: 3, inProgress: 5 };

  const allCourses = [
    { id: "react-101", title: "React Masterclass", instructor: "John Doe", thumbnail: oip, progress: 80, duration: 3 },
    { id: "node-201", title: "Node.js Advanced", instructor: "Jane Smith", thumbnail: node, progress: 45, duration: 6 },
    { id: "vue-301", title: "Vue.js Essentials", instructor: "Mike Chen", thumbnail: vue, progress: 100, duration: 1 },
    { id: "python-742", title: "Python for Data Science", instructor: "Sarah Lee", thumbnail: python, progress: 60, duration: 3 },
    { id: "java-501", title: "Java Spring Boot", instructor: "Raj Patel", thumbnail: java, progress: 20, duration: 12 },
    { id: "ml-601", title: "Machine Learning A-Z", instructor: "Dr. Kim", thumbnail: ml, progress: 0, duration: 6 }
  ];

  const recentActivity = [
    { message: "Completed Hooks Deep Dive", time: "2 hours ago", icon: CheckCircle },
    { message: "Submitted REST API Quiz", time: "5 hours ago", icon: Target },
    { message: "Enrolled in Vue.js Essentials", time: "1 day ago", icon: BookOpen }
  ];

  const announcements = [
    { text: "New course “AI & Ethics” launching next week!", type: "success" },
    { text: "System update scheduled: 22 Nov, 2:00 AM", type: "info" }
  ];

  const filteredCourses = useMemo(() => {
    let filtered = allCourses;
    if (searchQuery) {
      filtered = filtered.filter(c => c.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    if (selectedDuration !== 'all') {
      filtered = filtered.filter(c => c.duration === parseInt(selectedDuration));
    }
    return filtered;
  }, [searchQuery, selectedDuration]);

  const coursesToShow = showAllCourses ? filteredCourses : filteredCourses.slice(0, 4);

  const handleCourseClick = (id) => navigate(`/student/course/${id}`);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">

      {/* Beautiful Compact Hero */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">Welcome back, {user.firstName}!</h1>
              <p className="text-lg opacity-90">Ready to continue your learning journey?</p>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl px-8 py-5 flex gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold">{stats.inProgress}</p>
                <p className="text-sm opacity-90">In Progress</p>
              </div>
              <div className="w-px bg-white/30"></div>
              <div className="text-center">
                <p className="text-3xl font-bold">{stats.completed}</p>
                <p className="text-sm opacity-90">Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 -mt-6 relative z-10">

        {/* Compact & Beautiful Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {[
            { label: "Total Enrolled", value: stats.enrolled, icon: BookOpen, color: "from-blue-500 to-cyan-500" },
            { label: "Courses Completed", value: stats.completed, icon: Award, color: "from-emerald-500 to-teal-500" },
            { label: "Learning Streak", value: "12 Days", icon: TrendingUp, color: "from-orange-500 to-red-500" }
          ].map((stat, i) => (
            <div key={i} className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-6 border border-white/50 hover:shadow-xl transition">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-800 mt-1">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-md`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clean Search + Filter */}
        {/* <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg p-2 mb-10 border border-white/50">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search your courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-gray-50rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-100 transition"
              />
            </div> */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-1 mb-10 border border-white/50">
           <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                 type="text"
                 placeholder="Search your courses..."
                value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="w-full pl-12 pr-6 py-4 bg-gray-50 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-200 transition"
              />
             </div>
            <select 
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="px-6 py-4 bg-gray-50 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-100"
            >
              <option value="all">All Durations</option>
              <option value="1">1 Month</option>
              <option value="3">3 Months</option>
              <option value="6">6 Months</option>
              <option value="12">12+ Months</option>
            </select>
          </div>
        </div>

        {/* My Courses - Beautiful & Spacious */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-indigo-600" />
              My Courses
            </h2>
            {filteredCourses.length > 4 && (
              <button
                onClick={() => setShowAllCourses(!showAllCourses)}
                className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold transition"
              >
                {showAllCourses ? 'Show Less' : 'View All'}
                <ChevronRight className={`w-5 h-5 transition-transform ${showAllCourses ? 'rotate-90' : ''}`} />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {coursesToShow.map((course) => (
              <div
                key={course.id}
                onClick={() => handleCourseClick(course.id)}
                className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 cursor-pointer border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  {course.progress === 100 && (
                    <div className="absolute top-3 right-3 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Completed
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-800 mb-1 line-clamp-2">{course.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">by {course.instructor}</p>

                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-600 mb-2">
                      <span>Progress</span>
                      <span className="font-bold">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-1000"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-2xl font-semibold hover:shadow-lg transition">
                    {course.progress === 100 ? 'Review Course' : 'Continue Learning'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity & Announcements - Side by Side */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-lg p-7 border border-white/50">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Clock className="w-6 h-6 text-orange-600" />
              Recent Activity
            </h3>
            <div className="space-y-4">
              {recentActivity.map((act, i) => (
                <div key={i} className="flex items-center gap-4 pb-4 border-b border-gray-100 last:border-0">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <act.icon className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{act.message}</p>
                    <p className="text-xs text-gray-500">{act.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Announcements */}
          <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-3xl shadow-lg p-7 text-white">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <Bell className="w-6 h-6" />
              Announcements
            </h3>
            <div className="space-y-4">
              {announcements.map((ann, i) => (
                <div key={i} className="bg-white/20 backdrop-blur-lg rounded-2xl p-5 border border-white/20">
                  <p className="font-medium">{ann.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}






// // src/pages/student/CoursesDashboard.jsx
// import { useNavigate } from 'react-router-dom';
// import { useState, useMemo } from 'react';
// import { 
//   BookOpen, Clock, CheckCircle, Search, Filter, 
//   TrendingUp, Target, Award, Calendar, Bell, ChevronRight 
// } from 'lucide-react';

// import oip from '../../assets/OIP.jpg';
// import node from '../../assets/node.webp';
// import vue from '../../assets/vue.webp';
// import python from '../../assets/python.webp';
// import java from '../../assets/java.webp';
// import ml from '../../assets/ML.webp';

// export default function CoursesDashboard() {
//   const navigate = useNavigate();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedDuration, setSelectedDuration] = useState('all');
//   const [showAllCourses, setShowAllCourses] = useState(false);

//   const user = { firstName: "Rahul" };

//   const stats = { enrolled: 8, completed: 3, inProgress: 5 };

//   const allCourses = [
//     { id: "react-101", title: "React Masterclass", instructor: "John Doe", thumbnail: oip, progress: 80, duration: 3 },
//     { id: "node-201", title: "Node.js Advanced", instructor: "Jane Smith", thumbnail: node, progress: 45, duration: 6 },
//     { id: "vue-301", title: "Vue.js Essentials", instructor: "Mike Chen", thumbnail: vue, progress: 100, duration: 1 },
//     { id: "python-401", title: "Python for Data Science", instructor: "Sarah Lee", thumbnail: python, progress: 60, duration: 3 },
//     { id: "java-501", title: "Java Spring Boot", instructor: "Raj Patel", thumbnail: java, progress: 20, duration: 12 },
//     { id: "ml-601", title: "Machine Learning A-Z", instructor: "Dr. Kim", thumbnail: ml, progress: 0, duration: 6 }
//   ];

//   const recentActivity = [
//     { message: "Completed Hooks Deep Dive", time: "2 hours ago", icon: CheckCircle },
//     { message: "Submitted REST API Quiz", time: "5 hours ago", icon: Target },
//     { message: "Enrolled in Vue.js Essentials", time: "1 day ago", icon: BookOpen }
//   ];

//   const announcements = [
//     { text: "New course “AI & Ethics” launching next week!", type: "success" },
//     { text: "System update scheduled: 22 Nov, 2:00 AM", type: "info" }
//   ];

//   const filteredCourses = useMemo(() => {
//     let filtered = allCourses;
//     if (searchQuery) {
//       filtered = filtered.filter(c => c.title.toLowerCase().includes(searchQuery.toLowerCase()));
//     }
//     if (selectedDuration !== 'all') {
//       filtered = filtered.filter(c => c.duration === parseInt(selectedDuration));
//     }
//     return filtered;
//   }, [searchQuery, selectedDuration]);

//   const coursesToShow = showAllCourses ? filteredCourses : filteredCourses.slice(0, 4);

//   const handleCourseClick = (id) => navigate(`/student/course/${id}`);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
//       {/* Hero Header */}
//       <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
//         <div className="max-w-7xl mx-auto px-6 py-12">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-8">
//             <div>
//               <h1 className="text-4xl md:text-5xl font-bold mb-3">
//                 Welcome back, {user.firstName}!
//               </h1>
//               <p className="text-xl text-white/90">Ready to continue your learning journey?</p>
//             </div>
//             <div className="text-right">
//               <div className="inline-flex items-center gap-4 bg-white/20 backdrop-blur-lg rounded-2xl px-6 py-4">
//                 <div className="text-center">
//                   <p className="text-4xl font-bold">{stats.inProgress}</p>
//                   <p className="text-sm opacity-90">In Progress</p>
//                 </div>
//                 <div className="h-12 w-px bg-white/30"></div>
//                 <div className="text-center">
//                   <p className="text-4xl font-bold">{stats.completed}</p>
//                   <p className="text-sm opacity-90">Completed</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 py-12 -mt-8 relative z-10">
//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//           {[
//             { label: "Total Enrolled", value: stats.enrolled, icon: BookOpen, color: "from-blue-500 to-cyan-500" },
//             { label: "Courses Completed", value: stats.completed, icon: Award, color: "from-emerald-500 to-teal-500" },
//             { label: "Learning Streak", value: "12 Days", icon: TrendingUp, color: "from-orange-500 to-red-500" }
//           ].map((stat, i) => (
//             <div key={i} className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 group">
//               <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
//                 <stat.icon className="w-9 h-9 text-white" />
//               </div>
//               <p className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</p>
//               <p className="text-gray-600">{stat.label}</p>
//             </div>
//           ))}
//         </div>

//         {/* Search & Filter Bar */}
//         <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-6 mb-10 border border-white/50">
//           <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
//             <div className="relative flex-1 max-w-md">
//               <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search your courses..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-12 pr-6 py-4 bg-gray-50 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-200 transition"
//               />
//             </div>
//             <select 
//               value={selectedDuration}
//               onChange={(e) => setSelectedDuration(e.target.value)}
//               className="px-6 py-4 bg-gray-50 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-200"
//             >
//               <option value="all">All Durations</option>
//               <option value="1">1 Month</option>
//               <option value="3">3 Months</option>
//               <option value="6">6 Months</option>
//               <option value="12">12+ Months</option>
//             </select>
//           </div>
//         </div>

//         {/* My Courses Section */}
//         <div className="mb-12">
//           <div className="flex justify-between items-center mb-8">
//             <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
//               <BookOpen className="w-8 h-8 text-indigo-600" />
//               My Courses
//             </h2>
//             {filteredCourses.length > 4 && (
//               <button
//                 onClick={() => setShowAllCourses(!showAllCourses)}
//                 className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 700 font-semibold transition"
//               >
//                 {showAllCourses ? 'Show Less' : 'View All'}
//                 <ChevronRight className={`w-5 h-5 transition-transform ${showAllCourses ? 'rotate-90' : ''}`} />
//               </button>
//             )}
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//             {coursesToShow.map((course) => (
//               <div
//                 key={course.id}
//                 onClick={() => handleCourseClick(course.id)}
//                 className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 cursor-pointer border border-gray-100"
//               >
//                 <div className="relative overflow-hidden">
//                   <img 
//                     src={course.thumbnail} 
//                     alt={course.title}
//                     className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                   {course.progress === 100 && (
//                     <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
//                       <CheckCircle className="w-4 h-4" /> Completed
//                     </div>
//                   )}
//                 </div>

//                 <div className="p-6">
//                   <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2">{course.title}</h3>
//                   <p className="text-sm text-gray-600 mb-4">by {course.instructor}</p>

//                   {/* Progress */}
//                   <div className="mb-4">
//                     <div className="flex justify-between text-xs text-gray-600 mb-2">
//                       <span>Progress</span>
//                       <span className="font-bold">{course.progress}%</span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
//                       <div 
//                         className={`h-full rounded-full transition-all duration-1000 ease-out ${
//                           course.progress === 100 ? 'bg-gradient-to-r from-emerald-500 to-teal-500' : 
//                           course.progress >= 70 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
//                           course.progress >= 40 ? 'bg-gradient-to-r from-blue-500 to-indigo-500' :
//                           'bg-gradient-to-r from-orange-500 to-red-500'
//                         }`}
//                         style={{ width: `${course.progress}%` }}
//                       />
//                     </div>
//                   </div>

//                   <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-2xl font-semibold hover:shadow-xl transition-all group-hover:bg-gradient-to-l">
//                     {course.progress === 100 ? 'Review Course' : 'Continue Learning'}
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Bottom Section: Activity + Announcements */}
//         <div className="grid lg:grid-cols-2 gap-8">
//           {/* Recent Activity */}
//           <div className="bg-white rounded-3xl shadow-xl p-8">
//             <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
//               <Clock className="w-7 h-7 text-orange-600" />
//               Recent Activity
//             </h3>
//             <div className="space-y-5">
//               {recentActivity.map((act, i) => (
//                 <div key={i} className="flex items-center gap-4 pb-4 border-b border-gray-100 last:border-0">
//                   <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-pink-100 rounded-2xl flex items-center justify-center">
//                     <act.icon className="w-6 h-6 text-orange-600" />
//                   </div>
//                   <div className="flex-1">
//                     <p className="font-medium text-gray-800">{act.message}</p>
//                     <p className="text-sm text-gray-500">{act.time}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Announcements */}
//           <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-3xl shadow-xl p-8 text-white">
//             <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
//               <Bell className="w-7 h-7" />
//               Announcements
//             </h3>
//             <div className="space-y-5">
//               {announcements.map((ann, i) => (
//                 <div key={i} className="bg-white/20 backdrop-blur-lg rounded-2xl p-5 border border-white/30">
//                   <p className="font-medium">{ann.text}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






// // // src/pages/student/CoursesDashboard.jsx
// // import { useNavigate } from 'react-router-dom';
// // import { useState, useMemo } from 'react';
// // import { BookOpen, Clock, CheckCircle, AlertCircle, Search, Filter } from 'lucide-react';
// // import oip from '../../assets/OIP.jpg';
// // import node from '../../assets/node.webp';
// // import vue from '../../assets/vue.webp';
// // import python from '../../assets/python.webp';
// // import java from '../../assets/java.webp';
// // import ml from '../../assets/ML.webp';

// // export default function CoursesDashboard() {
// //   const navigate = useNavigate();

// //   // MOCK DATA (Frontend Only)
// //   const user = { firstName: "Rahul" };

// //   const stats = {
// //     enrolled: 8,
// //     completed: 3,
// //     inProgress: 5
// //   };

// //   const allCourses = [
// //     { id: "react-101", title: "React Masterclass", instructor: "John Doe", thumbnail: oip, progress: 80, nextItem: { title: "Lesson 4 – Hooks", dueDate: "2025-11-18" }, duration: 3 },
// //     { id: "node-201", title: "Node.js Advanced", instructor: "Jane Smith", thumbnail: node, progress: 45, nextItem: { title: "Quiz 2 – REST APIs", dueDate: "2025-11-20" }, duration: 6 },
// //     { id: "vue-301", title: "Vue.js Essentials", instructor: "Mike Chen", thumbnail: vue, progress: 100, nextItem: null, duration: 1 },
// //     { id: "python-401", title: "Python for Data Science", instructor: "Sarah Lee", thumbnail: python, progress: 60, nextItem: { title: "Project: Pandas", dueDate: "2025-12-01" }, duration: 3 },
// //     { id: "java-501", title: "Java Spring Boot", instructor: "Raj Patel", thumbnail: java, progress: 20, nextItem: { title: "Module 1 – Setup", dueDate: "2025-11-25" }, duration: 12 },
// //     { id: "ml-601", title: "Machine Learning A-Z", instructor: "Dr. Kim", thumbnail: ml, progress: 0, nextItem: { title: "Lesson 1 – Intro", dueDate: null }, duration: 6 }
// //   ];

// //   const recentActivity = [
// //     { message: "Started Lesson 2", time: "2 hours ago" },
// //     { message: "Submitted Quiz 1", time: "5 hours ago" },
// //     { message: "Enrolled in Vue Basics", time: "1 day ago" }
// //   ];

// //   const announcements = [
// //     { text: "System maintenance on 20 Nov 02:00–04:00 AM", type: "maintenance" },
// //     { text: "New course “Node.js Advanced” released!", type: "info" }
// //   ];

// //   // Filter & Search States
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [selectedDuration, setSelectedDuration] = useState('all'); // 'all', '1', '3', '6', '12'
// //   const [showAllCourses, setShowAllCourses] = useState(false);

// //   // Filtered Courses
// //   const filteredCourses = useMemo(() => {
// //     let filtered = allCourses;

// //     // Search by name
// //     if (searchQuery) {
// //       filtered = filtered.filter(c => 
// //         c.title.toLowerCase().includes(searchQuery.toLowerCase())
// //       );
// //     }

// //     // Filter by duration
// //     if (selectedDuration !== 'all') {
// //       filtered = filtered.filter(c => c.duration === parseInt(selectedDuration));
// //     }

// //     return filtered;
// //   }, [searchQuery, selectedDuration]);

// //   const coursesToShow = showAllCourses ? filteredCourses : filteredCourses.slice(0, 3);

// //   const handleCourseClick = (courseId) => {
// //     navigate(`/student/course/${courseId}`);
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-6">
// //       {/* Header */}
// //       <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
// //         <div>
// //           <h1 className="text-3xl font-bold text-gray-800">Cybernetics LMS</h1>
// //           <p className="text-lg text-gray-600 mt-1">Welcome back, <span className="font-semibold">{user.firstName}</span>!</p>
// //         </div>
// //         <div className="flex items-center gap-3">
// //           <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
// //             {user.firstName[0]}
// //           </div>
// //         </div>
// //       </header>

// //       {/* Quick Stats */}
// //       <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
// //         {[
// //           { label: "Enrolled", value: stats.enrolled, icon: BookOpen, color: "blue" },
// //           { label: "Completed", value: stats.completed, icon: CheckCircle, color: "green" },
// //           { label: "In Progress", value: stats.inProgress, icon: Clock, color: "orange" }
// //         ].map((stat, i) => {
// //           const Icon = stat.icon;
// //           return (
// //             <div key={i} className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4 hover:shadow-xl transition">
// //               <div className={`p-3 rounded-full bg-${stat.color}-100`}>
// //                 <Icon className={`w-6 h-6 text-${stat.color}-600`} />
// //               </div>
// //               <div>
// //                 <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
// //                 <p className="text-sm text-gray-600">{stat.label}</p>
// //               </div>
// //             </div>
// //           );
// //         })}
// //       </section>

// //       {/* Search + Filter */}
// //       <section className="mb-6">
// //        <div className="bg-white rounded-xl shadow-lg p-3 gap-4 w-fit">
// //   <div className="flex items-center gap-3">

// //     {/* Filter Dropdown */}
// //     <select 
// //       value={selectedDuration} 
// //       onChange={(e) => setSelectedDuration(e.target.value)}
// //       className="border border-gray-300 rounded-lg px-3 py-2 min-w-[120px]"
// //     >
// //       <option value="all">All Durations</option>
// //       <option value="1">1 Month</option>
// //       <option value="3">3 Months</option>
// //       <option value="6">6 Months</option>
// //       <option value="12">12 Months</option>
// //     </select>

// //     {/* Search Field */}
// //     <div className="relative min-w-[200px]">
// //       <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
// //       <input
// //         type="text"
// //         placeholder="Search..."
// //         value={searchQuery}
// //         onChange={(e) => setSearchQuery(e.target.value)}
// //         className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
// //       />
// //     </div>

// //   </div>
// // </div>

// //       </section>

// //       {/* My Courses */}
// //       <section className="mb-8">
// //         <div className="flex justify-between items-center mb-5">
// //           <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
// //             <BookOpen className="w-6 h-6 text-blue-600" />
// //             My Courses
// //           </h2>
// //           <button
// //             onClick={() => setShowAllCourses(!showAllCourses)}
// //             className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
// //           >
// //             {showAllCourses ? 'Show Less' : 'View All Courses'}
// //             <span className="text-xs">({filteredCourses.length})</span>
// //           </button>
// //         </div>

// //         {coursesToShow.length === 0 ? (
// //           <div className="text-center py-12 text-gray-500">
// //             No courses found matching your filters.
// //           </div>
// //         ) : (
// //           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
// //             {coursesToShow.map((course) => (
// //               <div
// //                 key={course.id}
// //                 onClick={() => handleCourseClick(course.id)}
// //                 className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
// //               >
// //                 <img
// //                   src={course.thumbnail}
// //                   alt={course.title}
// //                   className="w-full h-48 object-cover"
// //                 />
// //                 <div className="p-5">
// //                   <div className="flex justify-between items-start mb-2">
// //                     <h3 className="font-bold text-lg text-gray-800">{course.title}</h3>
// //                     <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
// //                       {course.duration} {course.duration > 1 ? 'Months' : 'Month'}
// //                     </span>
// //                   </div>
// //                   <p className="text-sm text-gray-600 mb-3">by {course.instructor}</p>

// //                   {/* Progress Bar */}
// //                   <div className="mb-3">
// //                     <div className="flex justify-between text-xs text-gray-600 mb-1">
// //                       <span>Progress</span>
// //                       <span>{course.progress}%</span>
// //                     </div>
// //                     <div className="w-full bg-gray-200 rounded-full h-2">
// //                       <div
// //                         className={`h-2 rounded-full transition-all ${
// //                           course.progress === 100 ? 'bg-green-500' : 'bg-blue-600'
// //                         }`}
// //                         style={{ width: `${course.progress}%` }}
// //                       />
// //                     </div>
// //                   </div>

// //                   {/* Next Item */}
// //                   {course.nextItem ? (
// //                     <p className="text-sm text-gray-700 mb-4">
// //                       <strong>Next:</strong> {course.nextItem.title}
// //                       {course.nextItem.dueDate && (
// //                         <span className="text-red-600 text-xs ml-1">
// //                           (due {new Date(course.nextItem.dueDate).toLocaleDateString()})
// //                         </span>
// //                       )}
// //                     </p>
// //                   ) : (
// //                     <p className="text-sm text-green-600 font-medium mb-4">Course Completed!</p>
// //                   )}

// //                   {/* Continue Button */}
// //                   <button
// //                     onClick={(e) => {
// //                       e.stopPropagation();
// //                       handleCourseClick(course.id);
// //                     }}
// //                     className={`w-full py-2 rounded-lg font-medium transition ${
// //                       course.progress === 100
// //                         ? 'bg-gray-200 text-gray-600 cursor-not-allowed'
// //                         : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700'
// //                     }`}
// //                     disabled={course.progress === 100}
// //                   >
// //                     {course.progress === 100 ? 'Completed' : 'Continue Learning'}
// //                   </button>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </section>

// //       {/* Recent Activity */}
// //       <section className="mb-8">
// //         <h2 className="text-2xl font-bold text-gray-800 mb-5 flex items-center gap-2">
// //           <Clock className="w-6 h-6 text-orange-600" />
// //           Recent Activity
// //         </h2>
// //         <div className="bg-white rounded-2xl shadow-lg p-6">
// //           <ul className="space-y-3">
// //             {recentActivity.map((act, i) => (
// //               <li key={i} className="flex justify-between items-center text-sm">
// //                 <span className="text-gray-700">{act.message}</span>
// //                 <span className="text-gray-500">{act.time}</span>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       </section>

// //       {/* Announcements */}
// //       {announcements.length > 0 && (
// //         <section>
// //           <h2 className="text-2xl font-bold text-gray-800 mb-5 flex items-center gap-2">
// //             <AlertCircle className="w-6 h-6 text-purple-600" />
// //             Announcements
// //           </h2>
// //           <div className="space-y-3">
// //             {announcements.map((ann, i) => (
// //               <div
// //                 key={i}
// //                 className={`p-4 rounded-xl text-white flex items-center gap-3 ${
// //                   ann.type === 'maintenance' ? 'bg-red-500' : 'bg-indigo-600'
// //                 }`}
// //               >
// //                 <AlertCircle className="w-5 h-5" />
// //                 <span>{ann.text}</span>
// //               </div>
// //             ))}
// //           </div>
// //         </section>
// //       )}
// //     </div>
// //   );
// // }



// // // export default CoursesDashboard;   