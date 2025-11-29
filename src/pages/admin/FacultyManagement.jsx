// src/pages/admin/FacultyManagement.jsx
import React, { useState, useEffect } from "react";
import {
  Users, UserPlus, Search, Calendar, CheckCircle, XCircle,
  Eye, Trash2, Edit, Key, BookOpen, Camera, X, Loader2,
  Mail, Phone, Home, Briefcase, GraduationCap, Lock, UserCheck,
  MapPin, Shield, AlertCircle
} from "lucide-react";

const FacultyManagement = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [modalType, setModalType] = useState(""); // view, edit, password, courses, delete

  const [faculties, setFaculties] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setFaculties([
//         { id: 1, code: "FAC001", name: "Dr. Rajesh Kumar", email: "rajesh@faculty.com", phone: "+91 98765 12345", state: "Maharashtra", district: "Mumbai", status: "Active", courses: ["Machine Learning", "Data Science", "Python"], qualification: "PhD Computer Science", designation: "Professor", address: "Andheri, Mumbai", employment: "Employed" },
//         { id: 2, code: "FAC002", name: "Prof. Anjali Mehta", email: "anjali@faculty.com", phone: "+91 87654 32109", state: "Karnataka", district: "Bangalore", status: "Active", courses: ["Web Development", "React JS"], qualification: "M.Tech", designation: "Associate Professor", address: "Koramangala", employment: "Employed" },
//       ]);
//       setPendingRequests([
//         { id: 4, code: "FAC004", name: "Dr. Sneha Patel", email: "sneha.new@faculty.com", phone: "+91 91234 56789", qualification: "PhD Computer Science", designation: "Associate Professor" },
//       ]);
//       setLoading(false);
//     }, 800);
//   }, []);


    useEffect(() => {
    setTimeout(() => {
      setFaculties([
        { id: 1, code: "FAC001", name: "Dr. Rajesh Kumar", email: "rajesh@faculty.com", phone: "+91 98765 12345", state: "Maharashtra", district: "Mumbai", status: "Active", courses: 5 },
        { id: 2, code: "FAC002", name: "Prof. Anjali Mehta", email: "anjali@faculty.com", phone: "+91 87654 32109", state: "Karnataka", district: "Bangalore", status: "Active", courses: 8 },
        { id: 3, code: "FAC003", name: "Mr. Vikram Singh", email: "vikram@faculty.com", phone: "+91 76543 21098", state: "Delhi", district: "New Delhi", status: "Active", courses: 3 },
      ]);
      setPendingRequests([
        { id: 4, code: "FAC004", name: "Dr. Sneha Patel", email: "sneha.new@faculty.com", phone: "+91 91234 56789", qualification: "PhD Computer Science", designation: "Associate Professor" },
        { id: 5, code: "FAC005", name: "Prof. Amit Sharma", email: "amit@faculty.com", phone: "+91 82345 67890", qualification: "M.Tech", designation: "Assistant Professor" },
      ]);
      setLoading(false);
    }, 800);
  }, []);

  const filteredFaculties = faculties.filter(f =>
    f.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (type, faculty) => {
    setSelectedFaculty(faculty);
    setModalType(type);
  };

  const closeModal = () => {
    setSelectedFaculty(null);
    setModalType("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header & Stats Cards - same as before */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Faculty Management</h1>
          <p className="text-gray-600">Manage, approve, and monitor all faculty members</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="backdrop-blur-xl bg-white/70 rounded-3xl p-8 shadow-xl border border-white/50">
            <div className="flex items-center justify-between">
              <div><p className="text-gray-500 text-sm">Total Faculties</p><p className="text-4xl font-bold text-indigo-600 mt-2">{faculties.length}</p></div>
              <Users className="w-12 h-12 text-indigo-500 opacity-80" />
            </div>
          </div>
          <div className="backdrop-blur-xl bg-white/70 rounded-3xl p-8 shadow-xl border border-white/50">
            <div className="flex items-center justify-between">
              <div><p className="text-gray-500 text-sm">Today Joined</p><p className="text-4xl font-bold text-green-600 mt-2">2</p></div>
              <Calendar class="w-12 h-12 text-green-500 opacity-80" />
            </div>
          </div>
          <button onClick={() => setActiveTab("pending")} className="backdrop-blur-xl bg-white/70 rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transition cursor-pointer">
            <div className="flex items-center justify-between">
              <div><p className="text-gray-500 text-sm">Pending Requests</p><p className="text-4xl font-bold text-orange-600 mt-2">{pendingRequests.length}</p></div>
              <UserPlus class="w-12 h-12 text-orange-500 opacity-80" />
            </div>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-8">
          {["overview", "all", "pending"].map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-xl font-semibold transition-all ${activeTab === tab ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg" : "bg-white/60 text-gray-700 hover:bg-white/90"}`}>
              {tab === "overview" && "Overview"}
              {tab === "all" && "All Faculties"}
              {tab === "pending" && `Pending Requests (${pendingRequests.length})`}
            </button>
          ))}
          <button onClick={() => setShowAddModal(true)} className="ml-auto px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-xl flex items-center gap-3">
            <UserPlus class="w-5 h-5" /> Add New Faculty
          </button>
        </div>

        {/* All Faculties Table */}
        {(activeTab === "overview" || activeTab === "all") && (
          <div className="backdrop-blur-xl bg-white/70 rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <div className="relative w-96">
                  <Search class="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <input type="text" placeholder="Search by Code or Name..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-6 py-4 bg-white/60 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-300" />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-gray-600 border-b border-white/50">
                      <th className="pb-4">Code</th>
                      <th className="pb-4">Faculty Name</th>
                      <th className="pb-4">Contact</th>
                      <th className="pb-4">Location</th>
                      <th className="pb-4">Courses</th>
                      <th className="pb-4 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredFaculties.map((f) => (
                      <tr key={f.id} className="border-b border-white/30 hover:bg-white/40 transition">
                        <td className="py-5 font-mono font-bold text-indigo-600">{f.code}</td>
                        <td className="py-5">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">
                              {f.name.split(" ").map(n => n[0]).join("")}
                            </div>
                            <p className="font-semibold text-gray-800">{f.name}</p>
                          </div>
                        </td>
                        <td className="py-5 text-gray-600 text-sm">{f.email}<br />{f.phone}</td>
                        <td className="py-5 text-gray-600">{f.district}, {f.state}</td>
                        <td className="py-6 text-center font-bold text-indigo-600">{f.courses}</td>
                        <td className="py-5">
                          <div className="flex justify-center gap-3">
                            <button onClick={() => openModal("view", f)} title="View Details" className="p-3 bg-blue-500/20 text-blue-600 rounded-xl hover:bg-blue-500/40"><Eye class="w-5 h-5" /></button>
                            <button onClick={() => openModal("edit", f)} title="Edit" className="p-3 bg-yellow-500/20 text-yellow-600 rounded-xl hover:bg-yellow-500/40"><Edit class="w-5 h-5" /></button>
                            <button onClick={() => openModal("password", f)} title="Change Password" className="p-3 bg-purple-500/20 text-purple-600 rounded-xl hover:bg-purple-500/40"><Key class="w-5 h-5" /></button>
                            <button onClick={() => openModal("courses", f)} title="Assigned Courses" className="p-3 bg-green-500/20 text-green-600 rounded-xl hover:bg-green-500/40"><BookOpen class="w-5 h-5" /></button>
                            <button onClick={() => openModal("delete", f)} title="Remove" className="p-3 bg-red-500/20 text-red-600 rounded-xl hover:bg-red-500/40"><Trash2 class="w-5 h-5" /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Pending Requests - unchanged */}
                {/* Pending Requests */}
        {activeTab === "pending" && (
          <div className="grid gap-6">
            {pendingRequests.map((req) => (
              <div
                key={req.id}
                className="backdrop-blur-xl bg-white/70 rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {req.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{req.name}</h3>
                      <p className="text-gray-600 font-mono">
                        {req.code} • {req.email}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {req.designation} • {req.qualification}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button className="px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 flex items-center gap-2 font-semibold transition">
                      <CheckCircle className="w-5 h-5" /> Approve
                    </button>
                    <button className="px-6 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 flex items-center gap-2 font-semibold transition">
                      <XCircle className="w-5 h-5" /> Reject
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* MODALS */}
        {modalType && selectedFaculty && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl max-w-2xl w-full max-h-[95vh] overflow-y-auto border border-white/50">
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-800">
                    {modalType === "view" && "Faculty Details"}
                    {modalType === "edit" && "Edit Faculty"}
                    {modalType === "password" && "Change Password"}
                    {modalType === "courses" && "Assigned Courses"}
                    {modalType === "delete" && "Confirm Delete"}
                  </h2>
                  <button onClick={closeModal} className="p-3 hover:bg-gray-100 rounded-xl"><X class="w-6 h-6" /></button>
                </div>

                {/* View Details */}
                {modalType === "view" && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-6">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
                        {selectedFaculty.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{selectedFaculty.name}</h3>
                        <p className="text-indigo-600 font-mono">{selectedFaculty.code}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div><p className="text-gray-500">Email</p><p className="font-semibold">{selectedFaculty.email}</p></div>
                      <div><p className="text-gray-500">Phone</p><p className="font-semibold">{selectedFaculty.phone}</p></div>
                      <div><p className="text-gray-500">Qualification</p><p className="font-semibold">{selectedFaculty.qualification}</p></div>
                      <div><p className="text-gray-500">Designation</p><p className="font-semibold">{selectedFaculty.designation}</p></div>
                      <div><p className="text-gray-500">Address</p><p className="font-semibold">{selectedFaculty.address}</p></div>
                      <div><p className="text-gray-500">Employment</p><p className="font-semibold">{selectedFaculty.employment}</p></div>
                    </div>
                  </div>
                )}

                {/* Change Password */}
                {modalType === "password" && (
                  <div className="space-y-6">
                    <InputField icon={<Lock />} label="New Password" type="password" placeholder="Enter new password" />
                    <InputField icon={<Lock />} label="Confirm Password" type="password" placeholder="Confirm new password" />
                    <div className="flex justify-end gap-4 mt-8">
                      <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold">Update Password</button>
                      <button onClick={closeModal} className="px-8 py-3 bg-gray-200 text-gray-800 rounded-xl">Cancel</button>
                    </div>
                  </div>
                )}

                {/* Edit Faculty */}
                {modalType === "edit" && (
                  <div className="grid md:grid-cols-2 gap-6">
                    <InputField icon={<UserCheck />} label="Name" defaultValue={selectedFaculty.name} />
                    <InputField icon={<Mail />} label="Email" defaultValue={selectedFaculty.email} />
                    <InputField icon={<Phone />} label="Phone" defaultValue={selectedFaculty.phone} />
                    <InputField icon={<Home />} label="Address" defaultValue={selectedFaculty.address} />
                    <InputField icon={<Briefcase />} label="Designation" defaultValue={selectedFaculty.designation} />
                    <InputField icon={<GraduationCap />} label="Qualification" defaultValue={selectedFaculty.qualification} />
                    <div className="md:col-span-2 flex justify-end gap-4 mt-6">
                      <button className="px-10 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold">Save Changes</button>
                      <button onClick={closeModal} className="px-10 py-3 bg-gray-200 text-gray-800 rounded-xl">Cancel</button>
                    </div>
                  </div>
                )}

                {/* Assigned Courses */}
                {modalType === "courses" && (
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Courses Assigned ({selectedFaculty.courses.length})</h4>
                    <div className="space-y-3">
                      {selectedFaculty.courses.map((course, i) => (
                        <div key={i} className="flex justify-between items-center p-4 bg-indigo-50 rounded-xl">
                          <span className="font-medium">{course}</span>
                          <button className="text-red-600 hover:text-red-800"><X class="w-5 h-5" /></button>
                        </div>
                      ))}
                    </div>
                    <button className="mt-6 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl">+ Assign New Course</button>
                  </div>
                )}

                {/* Delete Confirmation */}
                {/* === PROFESSIONAL DELETE CONFIRMATION MODAL === */}
                {modalType === "delete" && (
                <div className="text-center py-12 px-8">
                    <div className="w-24 h-24 mx-auto mb-8 bg-red-100 rounded-full flex items-center justify-center">
                    <AlertCircle className="w-14 h-14 text-red-600" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    Remove Faculty Permanently?
                    </h3>
                    
                    <p className="text-gray-600 max-w-md mx-auto mb-8 leading-relaxed">
                    You are about to remove <span className="font-semibold text-red-600">{selectedFaculty.name}</span> 
                    ({selectedFaculty.code}) from the system. This action <strong>cannot be undone</strong>.
                    </p>

                    <div className="bg-red-50 border border-red-200 rounded-2xl p-5 mb-10 max-w-sm mx-auto">
                    <p className="text-sm text-red-700 font-medium">
                        All assigned courses, attendance records, and access will be revoked immediately.
                    </p>
                    </div>

                    <div className="flex justify-center gap-6">
                    <button
                        onClick={closeModal}
                        className="px-10 py-4 bg-gray-200 text-gray-800 font-semibold rounded-xl hover:bg-gray-300 transition"
                    >
                        Cancel
                    </button>
                    <button
                        className="px-10 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold rounded-xl hover:shadow-xl transform hover:scale-105 transition shadow-lg"
                    >
                        Yes, Remove Faculty
                    </button>
                    </div>
                </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Add New Faculty Modal - same as before */}
                {/* Add New Faculty Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto border border-white/50">
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-800">Add New Faculty</h2>
                  <button
                    onClick={() => setShowAddModal(false)}
                    className="p-3 hover:bg-gray-100 rounded-xl transition"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <InputField icon={<UserCheck />} label="Full Name" placeholder="Dr. Sarah Johnson" />
                  <InputField icon={<Mail />} label="Email" type="email" placeholder="sarah@faculty.com" />
                  <InputField icon={<Phone />} label="Phone Number" placeholder="+91 98765 43210" />
                  <InputField icon={<Home />} label="Address" placeholder="123 Academic Street, Mumbai" />
                  <InputField icon={<Briefcase />} label="Current Designation" placeholder="Professor" />
                  <InputField icon={<GraduationCap />} label="Highest Qualification" placeholder="PhD in Physics" />
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Employment Status</label>
                    <select className="w-full px-5 py-4 bg-white/60 rounded-xl border border-gray-200">
                      <option>Employed</option>
                      <option>Unemployed</option>
                    </select>
                  </div>
                  <InputField icon={<Lock />} label="Password" type="password" placeholder="••••••••" />
                </div>

                <div className="mt-8">
                  <label className="block text-sm font-medium text-gray-700 mb-4">Profile Picture</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-indigo-400 transition cursor-pointer">
                    <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">Click to upload or drag and drop</p>
                  </div>
                </div>

                <div className="mt-10 flex justify-center gap-6">
                  <button className="px-12 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-2xl transform hover:scale-105 transition">
                    Add Faculty
                  </button>
                  <button
                    onClick={() => setShowAddModal(false)}
                    className="px-12 py-4 bg-gray-200 text-gray-800 font-bold rounded-xl hover:bg-gray-300 transition"
                  >
                    Cancel
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

const InputField = ({ icon, label, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">{icon} {label}</label>
    <input className="w-full px-5 py-4 bg-white/60 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-300 border border-transparent" {...props} />
  </div>
);

export default FacultyManagement;