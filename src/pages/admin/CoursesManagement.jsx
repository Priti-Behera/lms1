// src/pages/admin/CoursesManagement.jsx
import React, { useState } from "react";
import {
  BookOpen,
  Plus,
  Search,
  Eye,
  Edit,
  Trash2,
  X,
  Upload,
  Calendar,
  Clock,
  Users,
  DollarSign,
  Link2,
  AlertCircle,
  Tag,
} from "lucide-react";

const CoursesManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [modalType, setModalType] = useState("");

  const [courses] = useState([
    {
      id: 1,
      name: "React Masterclass 2025",
      type: "Live",
      price: 7999,
      teachers: ["Dr. Rajesh Kumar", "Prof. Anjali Mehta"],
      batch: { startDate: "2025-01-10", endDate: "2025-04-10", startTime: "07:00 PM", endTime: "09:00 PM" },
      description: "Advanced React with hooks, context, Redux Toolkit, projects & deployment",
      addedToday: true,
    },
    {
      id: 2,
      name: "Python for Data Science",
      type: "Recorded",
      price: 4999,
      teachers: ["Mr. Vikram Singh"],
      batch: { startDate: "2024-12-01", endDate: "2025-03-01", startTime: "10:00 AM", endTime: "12:00 PM" },
      description: "Pandas, NumPy, Visualization, ML basics — complete roadmap",
      addedToday: false,
    },
    {
      id: 3,
      name: "Full Stack MERN",
      type: "Live",
      price: 12999,
      teachers: ["Prof. Anjali Mehta"],
      batch: { startDate: "2025-02-01", endDate: "2025-06-01", startTime: "08:00 PM", endTime: "10:00 PM" },
      description: "MongoDB, Express, React, Node.js — build 5 real-world apps",
      addedToday: true,
    },
  ]);

  const todayAdded = courses.filter(c => c.addedToday).length;
  const filtered = courses.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const openModal = (type, course = null) => {
    setSelectedCourse(course);
    setModalType(type);
  };

  const closeModal = () => {
    setSelectedCourse(null);
    setModalType("");
    setShowAddModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Courses Management</h1>
          <p className="mt-2 text-gray-600">Create, edit and manage all courses beautifully</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Courses</p>
                <p className="text-3xl font-bold text-indigo-600 mt-1">{courses.length}</p>
              </div>
              <BookOpen className="w-10 h-10 text-indigo-500 opacity-70" />
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Added Today</p>
                <p className="text-3xl font-bold text-emerald-600 mt-1">{todayAdded}</p>
              </div>
              <Plus className="w-10 h-10 text-emerald-500 opacity-70" />
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Live Now</p>
                <p className="text-3xl font-bold text-purple-600 mt-1">
                  {courses.filter(c => c.type === "Live").length}
                </p>
              </div>
              <Users className="w-10 h-10 text-purple-500 opacity-70" />
            </div>
          </div>
        </div>

        {/* Search + Add Button */}
        <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-5 mb-10">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-white/70 backdrop-blur rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="px-7 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center gap-3 transform hover:scale-105 transition"
          >
            <Plus className="w-5 h-5" />
            Add New Course
          </button>
        </div>

        {/* Courses Grid — Beautiful Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {filtered.map((course) => (
            <div
              key={course.id}
              className="group bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden border border-white/60 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <BookOpen className="w-20 h-20 text-white/20" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-black/60 text-white text-xs font-medium rounded-full backdrop-blur">
                    {course.type}
                  </span>
                </div>
                {course.addedToday && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full animate-pulse">
                      NEW
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 line-clamp-1">{course.name}</h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">{course.description}</p>

                <div className="flex items-center justify-between mt-5">
                  <div>
                    <p className="text-2xl font-bold text-indigo-600">₹{course.price.toLocaleString()}</p>
                    <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {course.teachers.length} Teacher{course.teachers.length > 1 ? "s" : ""}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => openModal("view", course)} className="p-2.5 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button onClick={() => openModal("edit", course)} className="p-2.5 bg-amber-100 text-amber-600 rounded-lg hover:bg-amber-200 transition">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button onClick={() => openModal("delete", course)} className="p-2.5 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add / Edit Modal - Beautiful & Compact */}
      
        {(showAddModal || modalType === "edit") && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 p-4">
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-5xl max-h-[95vh] overflow-y-auto border border-white/60">
                <div className="p-8 md:p-10">

                  {/* Header */}
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                      {showAddModal ? "Create New Course" : "Edit Course"}
                    </h2>
                    <button
                      onClick={() => { setShowAddModal(false); closeModal(); }}
                      className="p-3 hover:bg-gray-100 rounded-xl transition"
                    >
                      <X className="w-7 h-7 text-gray-600" />
                    </button>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-10">

                    {/* LEFT COLUMN */}
                    <div className="space-y-7">

                      {/* Course Image Upload */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Course Image</label>
                        <div className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-indigo-500 hover:bg-indigo-50/30 transition-all cursor-pointer">
                          <Upload className="w-14 h-14 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-600 font-medium">Click to upload or drag & drop</p>
                          <p className="text-xs text-gray-500 mt-2">PNG, JPG up to 5MB</p>
                        </div>
                      </div>

                      {/* Course Name */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Course Name</label>
                        <input
                          type="text"
                          placeholder="e.g. React Masterclass 2025"
                          className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                        />
                      </div>

                      {/* Course Type */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Course Type</label>
                        <select className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition">
                          <option>Live</option>
                          <option>Recorded</option>
                          <option>Hybrid</option>
                        </select>
                      </div>

                      {/* Price */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Price (₹)</label>
                        <input
                          type="number"
                          placeholder="7999"
                          className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                        />
                      </div>

                      {/* Meeting Link */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Class Meeting Link (Live only)</label>
                        <input
                          type="url"
                          placeholder="https://zoom.us06web.zoom.us/j/..."
                          className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                        />
                      </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="space-y-7">

                      {/* Assign Teachers */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
                          <Users className="w-5 h-5" />
                          Assign Teachers
                        </label>
                        <div className="space-y-3 bg-gray-50/70 p-5 rounded-xl border border-gray-200">
                          {["Dr. Rajesh Kumar", "Prof. Anjali Mehta", "Mr. Vikram Singh", "Dr. Sneha Patel"].map((teacher) => (
                            <label key={teacher} className="flex items-center gap-4 cursor-pointer hover:bg-white/70 px-4 py-3 rounded-lg transition">
                              <input type="checkbox" className="w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500" />
                              <span className="text-gray-700 font-medium">{teacher}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Batch Details */}
                      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl border border-indigo-200">
                        <h4 className="font-bold text-indigo-800 mb-5 flex items-center gap-2">
                          <Calendar className="w-5 h-5" />
                          Batch Schedule
                        </h4>
                        <div className="grid grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                            <input type="date" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                            <input type="date" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Start Time</label>
                            <input type="time" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">End Time</label>
                            <input type="time" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500" />
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Course Description</label>
                        <textarea
                          rows="6"
                          placeholder="Write a compelling description that attracts students..."
                          className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none transition"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-center gap-6 mt-12">
                    <button
                      className="px-12 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-200"
                    >
                      {showAddModal ? "Create Course" : "Save Changes"}
                    </button>
                    <button
                      onClick={() => { setShowAddModal(false); closeModal(); }}
                      className="px-12 py-4 bg-gray-100 text-gray-800 font-bold text-lg rounded-xl hover:bg-gray-200 transition"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}



        {/* View Modal */}
        {modalType === "view" && selectedCourse && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl max-w-3xl w-full p-8 border border-white/50">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Course Details</h2>
                <button onClick={closeModal} className="p-2 hover:bg-gray-100 rounded-lg"><X className="w-6 h-6" /></button>
              </div>
              <div className="space-y-5 text-gray-700">
                <img src="https://via.placeholder.com/800x400/6366f1/ffffff?text=Course+Image" className="w-full h-64 object-cover rounded-2xl" />
                <h3 className="text-2xl font-bold">{selectedCourse.name}</h3>
                <p>{selectedCourse.description}</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div><strong>Type:</strong> {selectedCourse.type}</div>
                  <div><strong>Price:</strong> ₹{selectedCourse.price.toLocaleString()}</div>
                  <div><strong>Teachers:</strong> {selectedCourse.teachers.join(", ")}</div>
                  <div><strong>Batch:</strong> {selectedCourse.batch.startDate} → {selectedCourse.batch.endDate}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Delete Modal - Already perfect */}
        {modalType === "delete" && selectedCourse && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl max-w-lg w-full border border-white/60">
              <div className="p-10 text-center">
                <div className="w-24 h-24 mx-auto mb-8 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-14 h-14 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Delete Course?</h3>
                <p className="text-gray-600 mb-8">
                  Permanently delete <strong>"{selectedCourse.name}"</strong>?<br />This cannot be undone.
                </p>
                <div className="flex justify-center gap-6">
                  <button onClick={closeModal} className="px-10 py-3 bg-gray-200 text-gray-800 font-bold rounded-xl hover:bg-gray-300">
                    Cancel
                  </button>
                  <button className="px-10 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl">
                    Yes, Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Input = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <input
      className="w-full px-4 py-3 bg-white/70 backdrop-blur rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
      {...props}
    />
  </div>
);

export default CoursesManagement;






// // src/pages/admin/CoursesManagement.jsx
// import React, { useState } from "react";
// import {
//   BookOpen,
//   Plus,
//   Search,
//   Eye,
//   Edit,
//   Trash2,
//   X,
//   Upload,
//   Calendar,
//   Clock,
//   Users,
//   DollarSign,
//   Link2,
//   AlertCircle,
// } from "lucide-react";

// const CoursesManagement = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [modalType, setModalType] = useState(""); // "view", "edit"

//   // Dummy data
//   const [courses, setCourses] = useState([
//     {
//       id: 1,
//       image: null,
//       name: "React Masterclass 2025",
//       type: "Live",
//       price: 7999,
//       meetingLink: "https://zoom.us/j/123456789",
//       teachers: ["Dr. Rajesh Kumar", "Prof. Anjali Mehta"],
//       batch: { startDate: "2025-01-10", endDate: "2025-04-10", startTime: "19:00", endTime: "21:00" },
//       description: "Complete React with hooks, context, redux, projects...",
//       addedToday: true,
//     },
//     {
//       id: 2,
//       image: null,
//       name: "Python for Data Science",
//       type: "Recorded",
//       price: 4999,
//       meetingLink: "",
//       teachers: ["Mr. Vikram Singh"],
//       batch: { startDate: "2024-12-01", endDate: "2025-03-01", startTime: "10:00", endTime: "12:00" },
//       description: "Pandas, NumPy, Matplotlib, Machine Learning basics",
//       addedToday: false,
//     },
//     {
//       id: 3,
//       image: null,
//       name: "Java",
//       type: "Recorded",
//       price: 4999,
//       meetingLink: "",
//       teachers: ["Mr. Vikram Singh"],
//       batch: { startDate: "2024-12-01", endDate: "2025-03-01", startTime: "10:00", endTime: "12:00" },
//       description: "Pandas, NumPy, Matplotlib, Machine Learning basics",
//       addedToday: false,
//     },
//     {
//       id: 4,
//       image: null,
//       name: "Python for Data Science",
//       type: "Recorded",
//       price: 4999,
//       meetingLink: "",
//       teachers: ["Mr. Vikram Singh"],
//       batch: { startDate: "2024-12-01", endDate: "2025-03-01", startTime: "10:00", endTime: "12:00" },
//       description: "Pandas, NumPy, Matplotlib, Machine Learning basics",
//       addedToday: false,
//     },
//     {
//       id: 5,
//       image: null,
//       name: "Python for Data Science",
//       type: "Recorded",
//       price: 4999,
//       meetingLink: "",
//       teachers: ["Mr. Vikram Singh"],
//       batch: { startDate: "2024-12-01", endDate: "2025-03-01", startTime: "10:00", endTime: "12:00" },
//       description: "Pandas, NumPy, Matplotlib, Machine Learning basics",
//       addedToday: false,
//     },
//   ]);

//   const todayAdded = courses.filter(c => c.addedToday).length;

//   const filtered = courses.filter(c =>
//     c.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const openModal = (type, course) => {
//     setSelectedCourse(course);
//     setModalType(type);
//   };

//   const closeModal = () => {
//     setSelectedCourse(null);
//     setModalType("");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-8 px-4">
//       <div className="max-w-7xl mx-auto">

//         {/* Header */}
//         <div className="mb-10">
//           <h1 className="text-4xl font-bold text-gray-800 mb-3">Courses Management</h1>
//           <p className="text-gray-600">Create and manage all courses in the platform</p>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
//           <div className="backdrop-blur-xl bg-white/70 rounded-3xl p-8 shadow-xl border border-white/50">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-500 text-sm">Total Courses</p>
//                 <p className="text-4xl font-bold text-indigo-600 mt-2">{courses.length}</p>
//               </div>
//               <BookOpen className="w-12 h-12 text-indigo-500 opacity-80" />
//             </div>
//           </div>

//           <div className="backdrop-blur-xl bg-white/70 rounded-3xl p-8 shadow-xl border border-white/50">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-500 text-sm">Added Today</p>
//                 <p className="text-4xl font-bold text-green-600 mt-2">{todayAdded}</p>
//               </div>
//               <Plus className="w-12 h-12 text-green-500 opacity-80" />
//             </div>
//           </div>
//         </div>

//         {/* Search + Add Button */}
//         <div className="flex justify-between items-center mb-8">
//           <div className="relative w-96">
//             <Search className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search course by name..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-12 pr-6 py-4 bg-white/60 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-300"
//             />
//           </div>

//           <button
//             onClick={() => setShowAddModal(true)}
//             className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl flex items-center gap-3"
//           >
//             <Plus className="w-6 h-6" /> Add New Course
//           </button>
//         </div>

//         {/* Courses Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filtered.map((course) => (
//             <div key={course.id} className="backdrop-blur-xl bg-white/70 rounded-3xl shadow-xl border border-white/50 overflow-hidden hover:shadow-2xl transition">
//               <div className="h-48 bg-gradient-to-br from-indigo-400 to-purple-500 relative">
//                 {course.image ? (
//                   <img src={course.image} alt="" className="w-full h-full object-cover" />
//                 ) : (
//                   <div className="w-full h-full flex items-center justify-center">
//                     <BookOpen className="w-20 h-20 text-white/30" />
//                   </div>
//                 )}
//                 <span className="absolute top-4 right-4 px-4 py-2 bg-black/50 text-white rounded-full text-sm font-medium">
//                   {course.type}
//                 </span>
//               </div>

//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-800 mb-2">{course.name}</h3>
//                 <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>

//                 <div className="flex items-center justify-between mb-4">
//                   <span className="text-2xl font-bold text-indigo-600">₹{course.price.toLocaleString()}</span>
//                   <span className="text-sm text-gray-500">{course.teachers.length} Teacher{course.teachers.length > 1 ? "s" : ""}</span>
//                 </div>

//                 <div className="flex justify-between items-center">
//                   <button onClick={() => openModal("view", course)} className="text-blue-600 hover:text-blue-800">
//                     <Eye className="w-5 h-5" />
//                   </button>
//                   <button onClick={() => openModal("edit", course)} className="text-yellow-600 hover:text-yellow-800">
//                     <Edit className="w-5 h-5" />
//                   </button>
//                   <button onClick={() => openModal("delete", course)} className="text-red-600 hover:text-red-800">
//                     <Trash2 className="w-5 h-5" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Add / Edit Modal */}
//       {(showAddModal || modalType === "edit") && (
//         <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
//           <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl max-w-5xl w-full max-h-[95vh] overflow-y-auto">
//             <div className="p-10">
//               <div className="flex justify-between items-center mb-8">
//                 <h2 className="text-3xl font-bold text-gray-800">
//                   {showAddModal ? "Add New Course" : "Edit Course"}
//                 </h2>
//                 <button onClick={() => { setShowAddModal(false); closeModal(); }} className="p-3 hover:bg-gray-100 rounded-xl">
//                   <X className="w-7 h-7" />
//                 </button>
//               </div>

//               <div className="grid md:grid-cols-2 gap-8">
//                 {/* Left Side */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-3">Course Image</label>
//                   <div className="border-2 border-dashed border-gray-300 rounded-2xl p-10 text-center hover:border-indigo-400 transition cursor-pointer">
//                     <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//                     <p className="text-gray-500">Click to upload or drag and drop</p>
//                   </div>

//                   <Input label="Course Name" placeholder="React Masterclass 2025" className="mt-8" />
//                   <div className="mt-6">
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Course Type</label>
//                     <select className="w-full px-5 py-4 bg-white/70 rounded-xl border">
//                       <option>Live</option>
//                       <option>Recorded</option>
//                       <option>Hybrid</option>
//                     </select>
//                   </div>
//                   <Input label="Price (₹)" type="number" placeholder="7999" className="py-6" />
//                   <Input label="Class Meeting Link" placeholder="https://zoom.us/..." />
//                 </div>

//                 {/* Right Side */}
//                 <div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-3">Assign Teachers</label>
//                     <div className="space-y-3">
//                       {["Dr. Rajesh Kumar", "Prof. Anjali Mehta", "Mr. Vikram Singh"].map((t, i) => (
//                         <label key={i} className="flex items-center gap-3">
//                           <input type="checkbox" className="w-5 h-5 text-indigo-600 rounded" />
//                           <span>{t}</span>
//                         </label>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="mt-8 p-6 bg-indigo-50 rounded-2xl">
//                     <h4 className="font-bold text-indigo-800 mb-4">Course Batch Details</h4>
//                     <div className="grid grid-cols-2 gap-4">
//                       <Input label="Start Date" type="date" />
//                       <Input label="End Date" type="date" />
//                       <Input label="Start Time" type="time" />
//                       <Input label="End Time" type="time" />
//                     </div>
//                   </div>

//                   <div className="mt-6">
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Course Description</label>
//                     <textarea
//                       rows="5"
//                       className="w-full px-5 py-4 bg-white/70 rounded-xl border focus:outline-none focus:ring-4 focus:ring-indigo-300"
//                       placeholder="Write detailed description..."
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-mt-12 flex justify-center gap-6">
//                 <button className="px-12 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:shadow-2xl transform hover:scale-105 transition">
//                   {showAddModal ? "Create Course" : "Save Changes"}
//                 </button>
//                 <button onClick={() => { setShowAddModal(false); closeModal(); }} className="px-12 py-4 bg-gray-200 text-gray-800 font-bold text-lg rounded-xl">
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* View Details Modal */}
//       {modalType === "view" && selectedCourse && (
//         <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
//           <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto p-10">
//             <div className="flex justify-between items-center mb-8">
//               <h2 className="text-3xl font-bold text-gray-800">Course Details</h2>
//               <button onClick={closeModal} className="p-3 hover:bg-gray-100 rounded-xl"><X className="w-7 h-7" /></button>
//             </div>
//             <div className="grid md:grid-cols-2 gap-8">
//               <img src={selectedCourse.image || "https://via.placeholder.com/600"} alt="" className="w-full h-64 object-cover rounded-2xl" />
//               <div>
//                 <h3 className="text-2xl font-bold mb-4">{selectedCourse.name}</h3>
//                 <p className="text-gray-600 mb-6">{selectedCourse.description}</p>
//                 <div className="space-y-3">
//                   <div className="flex justify-between"><strong>Type:</strong> <span>{selectedCourse.type}</span></div>
//                   <div className="flex justify-between"><strong>Price:</strong> <span>₹{selectedCourse.price}</span></div>
//                   <div className="flex justify-between"><strong>Teachers:</strong> <span>{selectedCourse.teachers.join(", ")}</span></div>
//                   <div className="flex justify-between"><strong>Batch:</strong> <span>{selectedCourse.batch.startDate} to {selectedCourse.batch.endDate}</span></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* DELETE CONFIRMATION MODAL */}
//       {modalType === "delete" && selectedCourse && (
//         <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
//           <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl max-w-lg w-full border border-white/60">
//             <div className="p-10 text-center">

//               {/* Warning Icon */}
//               <div className="w-24 h-24 mx-auto mb-8 bg-red-100 rounded-full flex items-center justify-center">
//                 <AlertCircle className="w-14 h-14 text-red-600" />
//               </div>

//               {/* Title */}
//               <h3 className="text-2xl font-bold text-gray-800 mb-4">
//                 Delete Course Permanently?
//               </h3>

//               {/* Description */}
//               <p className="text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
//                 You are about to delete <span className="font-bold text-red-600">"{selectedCourse.name}"</span>.<br />
//                 This will remove the course, all enrolled students, materials, and records.
//               </p>

//               {/* Warning Box */}
//               <div className="bg-red-50 border border-red-200 rounded-2xl p-5 mb-10">
//                 <p className="text-sm font-medium text-red-700">
//                   This action <strong>cannot be undone</strong>.
//                 </p>
//               </div>

//               {/* Buttons */}
//               <div className="flex justify-center gap-6">
//                 <button
//                   onClick={closeModal}
//                   className="px-10 py-4 bg-gray-200 text-gray-800 font-bold rounded-xl hover:bg-gray-300 transition"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={() => {
//                     // Add delete logic here later
//                     // alert(`Course "${selectedCourse.name}" deleted!`);
//                     setCourses(courses.filter(c => c.id !== selectedCourse.id));
//                     closeModal();
//                   }}
//                   className="px-10 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition"
//                 >
//                   Yes, Delete Course
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const Input = ({ label, className = "", ...props }) => (
//   <div className={className}>
//     <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
//     <input
//       className="w-full px-5 py-4 bg-white/70 rounded-xl border border-white/50 focus:outline-none focus:ring-4 focus:ring-indigo-300"
//       {...props}
//     />
//   </div>
// );

// export default CoursesManagement;