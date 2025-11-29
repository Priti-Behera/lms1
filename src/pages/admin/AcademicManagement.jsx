// src/pages/admin/AcademicManagement.jsx
import React, { useState } from "react";
import {
  UserPlus, Search, Eye, Edit, Trash2, Key, X, Calendar,
  Mail, User, Lock, Home, MapPin, Globe, AlertCircle
} from "lucide-react";

const countries = [
  "India", "United States", "United Kingdom", "Canada", "Australia",
  "Germany", "France", "Singapore", "United Arab Emirates", "Japan"
];

const AcademicManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedAcademic, setSelectedAcademic] = useState(null);
  const [modalType, setModalType] = useState(""); // "view", "edit", "password", "delete"

  const [academics, setAcademics] = useState([
    {
      id: 1,
      name: "Priya Sharma",
      email: "priya.academic@lms.com",
      username: "priya_sharma",
      dob: "1985-06-15",
      address: "45 MG Road",
      city: "Mumbai",
      postalCode: "400001",
      country: "India",
    },
    {
      id: 2,
      name: "Rahul Verma",
      email: "rahul.verma@lms.com",
      username: "rahul_verma92",
      dob: "1990-03-22",
      address: "Koramangala 6th Block",
      city: "Bangalore",
      postalCode: "560095",
      country: "India",
    },
    {
      id: 3,
      name: "Aisha Khan",
      email: "aisha@lms.com",
      username: "aisha_k",
      dob: "1988-11-30",
      address: "123 Park Street",
      city: "Dubai",
      postalCode: "00000",
      country: "United Arab Emirates",
    },
  ]);

  const filtered = academics.filter(a =>
    a.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (type, academic) => {
    setSelectedAcademic(academic);
    setModalType(type);
  };

  const closeModal = () => {
    setSelectedAcademic(null);
    setModalType("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Academic Management</h1>
          <p className="text-gray-600">Manage course coordinators and academic administrators</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="backdrop-blur-xl bg-white/70 rounded-3xl p-8 shadow-xl border border-white/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Course Admins</p>
                <p className="text-4xl font-bold text-indigo-600 mt-2">{academics.length}</p>
              </div>
              <UserPlus className="w-12 h-12 text-indigo-500 opacity-80" />
            </div>
          </div>
        </div>

        {/* Search + Add Button */}
        <div className="flex justify-between items-center mb-8">
          <div className="relative w-96">
            <Search className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, email or username..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-white/60 backdrop-blur-sm rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-300"
            />
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl flex items-center gap-3"
          >
            <UserPlus className="w-6 h-6" /> Add New Course Admin
          </button>
        </div>

        {/* Table */}
        <div className="backdrop-blur-xl bg-white/70 rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
          <div className="p-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-600 border-b border-white/50">
                    <th className="pb-4">Name</th>
                    <th className="pb-4">Email</th>
                    <th className="pb-4">Username</th>
                    <th className="pb-4">Location</th>
                    <th className="pb-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((a) => (
                    <tr key={a.id} className="border-b border-white/30 hover:bg-white/40 transition">
                      <td className="py-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                            {a.name.split(" ").map(n => n[0]).join("")}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">{a.name}</p>
                            <p className="text-sm text-gray-500">{new Date(a.dob).toLocaleDateString()}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-6 text-gray-700">{a.email}</td>
                      <td className="py-6 font-mono text-indigo-600">{a.username}</td>
                      <td className="py-6 text-gray-600">{a.city}, {a.country}</td>
                      <td className="py-6">
                        <div className="flex justify-center gap-3">
                          <button onClick={() => openModal("view", a)}     className="p-3 bg-blue-500/20 text-blue-600 rounded-xl hover:bg-blue-500/40"><Eye className="w-5 h-5" /></button>
                          <button onClick={() => openModal("edit", a)}     className="p-3 bg-yellow-500/20 text-yellow-600 rounded-xl hover:bg-yellow-500/40"><Edit className="w-5 h-5" /></button>
                          {/* <button onClick={() => openModal("password", a)} className="p-3 bg-purple-500/20 text-purple-600 rounded-xl hover:bg-purple-500/40"><Key className="w-5 h-5" /></button> */}
                          <button onClick={() => openModal("delete", a)}   className="p-3 bg-red-500/20 text-red-600 rounded-xl hover:bg-red-500/40"><Trash2 className="w-5 h-5" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* === ALL MODALS === */}
      {modalType && selectedAcademic && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl max-w-2xl w-full max-h-[95vh] overflow-y-auto border border-white/60">
            <div className="p-10">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">
                  {modalType === "view" && "View Details"}
                  {modalType === "edit" && "Edit Course Admin"}
                  {modalType === "password" && "Change Password"}
                  {modalType === "delete" && "Remove Course Admin"}
                </h2>
                <button onClick={closeModal} className="p-3 hover:bg-gray-100 rounded-xl"><X className="w-7 h-7" /></button>
              </div>

              {/* View Details */}
              {modalType === "view" && (
                <div className="space-y-6 text-gray-700">
                  <div className="grid grid-cols-2 gap-6">
                    <div><strong>Name:</strong> {selectedAcademic.name}</div>
                    <div><strong>Email:</strong> {selectedAcademic.email}</div>
                    <div><strong>Username:</strong> {selectedAcademic.username}</div>
                    <div><strong>DOB:</strong> {new Date(selectedAcademic.dob).toLocaleDateString()}</div>
                    <div><strong>Address:</strong> {selectedAcademic.address}, {selectedAcademic.city}</div>
                    <div><strong>Country:</strong> {selectedAcademic.country}</div>
                  </div>
                </div>
              )}

              {/* Edit Modal */}
              {modalType === "edit" && (
                <div className="grid grid-cols-2 gap-6">
                  <Input label="Name" defaultValue={selectedAcademic.name} />
                  <Input label="Email" type="email" defaultValue={selectedAcademic.email} />
                  <Input label="Username" defaultValue={selectedAcademic.username} />
                  <Input label="DOB" type="date" defaultValue={selectedAcademic.dob} />
                  <Input label="Address" defaultValue={selectedAcademic.address} />
                  <Input label="City" defaultValue={selectedAcademic.city} />
                  <Input label="Postal Code" defaultValue={selectedAcademic.postalCode} />
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                    <select className="w-full px-5 py-4 bg-white/70 rounded-xl border">
                      {countries.map(c => <option key={c} selected={c === selectedAcademic.country}>{c}</option>)}
                    </select>
                  </div>
                  <div className="col-span-2 flex justify-end gap-4 mt-6">
                    <button className="px-10 py-3 bg-green-600 text-white rounded-xl font-bold">Save Changes</button>
                    <button onClick={closeModal} className="px-10 py-3 bg-gray-200 text-gray-800 rounded-xl">Cancel</button>
                  </div>
                </div>
              )}

              {/* Change Password */}
              {modalType === "password" && (
                <div>
                  <Input label="New Password" type="password" placeholder="••••••••" />
                  <Input label="Confirm Password" type="password" placeholder="••••••••" className="mt-6" />
                  <div className="flex justify-end gap-4 mt-8">
                    <button className="px-10 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold">Update Password</button>
                    <button onClick={closeModal} className="px-10 py-3 bg-gray-200 text-gray-800 rounded-xl">Cancel</button>
                  </div>
                </div>
              )}

              {/* Delete Confirmation - Professional */}
              {modalType === "delete" && (
                <div className="text-center py-12">
                  <div className="w-24 h-24 mx-auto mb-8 bg-red-100 rounded-full flex items-center justify-center">
                    <AlertCircle className="w-14 h-14 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Remove {selectedAcademic.name}?
                  </h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    This action <strong>cannot be undone</strong>. All access will be revoked.
                  </p>
                  <div className="flex justify-center gap-6">
                    <button onClick={closeModal} className="px-10 py-3 bg-gray-200 text-gray-800 rounded-xl font-bold">
                      Cancel
                    </button>
                    <button className="px-10 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold rounded-xl shadow-lg">
                      Yes, Remove
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Add New Course Admin Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto">
            <div className="p-10">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Add New Course Admin</h2>
                <button onClick={() => setShowAddModal(false)} className="p-3 hover:bg-gray-100 rounded-xl">
                  <X className="w-7 h-7" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-7">
                <Input label="Full Name" placeholder="Priya Sharma" />
                <Input label="Email" type="email" placeholder="priya@lms.com" />
                <Input label="Date of Birth" type="date" />
                <Input label="Username" placeholder="priya_sharma" />
                <Input label="Password" type="password" placeholder="••••••••" />
                <Input label="Address" placeholder="45 MG Road" />
                <Input label="City" placeholder="Mumbai" />
                <Input label="Postal Code" placeholder="400001" />
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                  <select className="w-full px-5 py-4 bg-white/70 rounded-xl border focus:outline-none focus:ring-4 focus:ring-indigo-300">
                    <option value="">Select Country</option>
                    {countries.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-12 flex justify-center gap-6">
                <button className="px-12 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-2xl transform hover:scale-105 transition">
                  Create Course Admin
                </button>
                <button onClick={() => setShowAddModal(false)} className="px-12 py-4 bg-gray-200 text-gray-800 font-bold rounded-xl">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Reusable Inputs
const Input = ({ label, className = "", ...props }) => (
  <div className={className}>
    <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <input
      className="w-full px-5 py-4 bg-white/70 backdrop-blur-sm rounded-xl border border-white/50 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
      {...props}
    />
  </div>
);

export default AcademicManagement;







// // src/pages/admin/AcademicManagement.jsx
// import React, { useState } from "react";
// import {
//   UserPlus,
//   Search,
//   Eye,
//   Edit,
//   Trash2,
//   Mail,
//   Calendar,
//   User,
//   Lock,
//   Home,
//   MapPin,
//   Globe,
//   X,
//   Loader2,
// } from "lucide-react";

// const AcademicManagement = () => {
//   const [activeView, setActiveView] = useState("list"); // "list" or "add"
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showAddModal, setShowAddModal] = useState(false);

//   // Dummy data - replace with API later
//   const [academics, setAcademics] = useState([
//     {
//       id: 1,
//       name: "Priya Sharma",
//       email: "priya.academic@lms.com",
//       username: "priya_sharma",
//       dob: "1985-06-15",
//       address: "45 MG Road",
//       city: "Mumbai",
//       postalCode: "400001",
//       country: "India",
//     },
//     {
//       id: 2,
//       name: "Rahul Verma",
//       email: "rahul.verma@lms.com",
//       username: "rahul_verma92",
//       dob: "1990-03-22",
//       address: "Koramangala 6th Block",
//       city: "Bangalore",
//       postalCode: "560095",
//       country: "India",
//     },
//   ]);

//   const filteredAcademics = academics.filter(
//     (a) =>
//       a.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       a.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       a.username.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-8 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-10">
//           <h1 className="text-4xl font-bold text-gray-800 mb-3">Academic Management</h1>
//           <p className="text-gray-600">Manage course coordinators and academic staff</p>
//         </div>

//         {/* Stats Card */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
//           <div className="backdrop-blur-xl bg-white/70 rounded-3xl p-8 shadow-xl border border-white/50">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-500 text-sm">Total Course Admins</p>
//                 <p className="text-4xl font-bold text-indigo-600 mt-2">{academics.length}</p>
//               </div>
//               <UserPlus className="w-12 h-12 text-indigo-500 opacity-80" />
//             </div>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex justify-between items-center mb-8">
//           <div className="relative w-96">
//             <Search className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search by name, email or username..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-12 pr-6 py-4 bg-white/60 backdrop-blur-sm rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-300 border border-white/50"
//             />
//           </div>

//           <button
//             onClick={() => setShowAddModal(true)}
//             className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition flex items-center gap-3"
//           >
//             <UserPlus className="w-6 h-6" />
//             Add New Course Admin
//           </button>
//         </div>

//         {/* Academics Table */}
//         <div className="backdrop-blur-xl bg-white/70 rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
//           <div className="p-8">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">All Course Admins</h2>

//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="text-left text-gray-600 border-b border-white/50">
//                     <th className="pb-4">Name</th>
//                     <th className="pb-4">Email</th>
//                     <th className="pb-4">Username</th>
//                     <th className="pb-4">Location</th>
//                     <th className="pb-4 text-center">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredAcademics.map((academic) => (
//                     <tr key={academic.id} className="border-b border-white/30 hover:bg-white/40 transition">
//                       <td className="py-6">
//                         <div className="flex items-center gap-4">
//                           <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
//                             {academic.name.split(" ").map((n) => n[0]).join("")}
//                           </div>
//                           <div>
//                             <p className="font-semibold text-gray-800">{academic.name}</p>
//                             <p className="text-sm text-gray-500">DOB: {new Date(academic.dob).toLocaleDateString()}</p>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="py-6 text-gray-700">{academic.email}</td>
//                       <td className="py-6 font-mono text-indigo-600">{academic.username}</td>
//                       <td className="py-6 text-gray-600">
//                         {academic.city}, {academic.country}
//                       </td>
//                       <td className="py-6">
//                         <div className="flex justify-center gap-3">
//                           <button className="p-3 bg-blue-500/20 text-blue-600 rounded-xl hover:bg-blue-500/40"><Eye className="w-5 h-5" /></button>
//                           <button className="p-3 bg-yellow-500/20 text-yellow-600 rounded-xl hover:bg-yellow-500/40"><Edit className="w-5 h-5" /></button>
//                           <button className="p-3 bg-red-500/20 text-red-600 rounded-xl hover:bg-red-500/40"><Trash2 className="w-5 h-5" /></button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Add New Course Admin Modal */}
//       {showAddModal && (
//         <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4 z-50">
//           <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto border border-white/60">
//             <div className="p-10">
//               <div className="flex justify-between items-center mb-8">
//                 <h2 className="text-3xl font-bold text-gray-800">Add New Course Admin</h2>
//                 <button
//                   onClick={() => setShowAddModal(false)}
//                   className="p-3 hover:bg-gray-100 rounded-xl transition"
//                 >
//                   <X className="w-7 h-7" />
//                 </button>
//               </div>

//               <div className="grid md:grid-cols-2 gap-7">
//                 <InputField icon={<User />} label="Full Name" placeholder="Priya Sharma" />
//                 <InputField icon={<Mail />} label="Email" type="email" placeholder="priya@lms.com" />
//                 <InputField icon={<Calendar />} label="Date of Birth" type="date" />
//                 <InputField icon={<User />} label="Username" placeholder="priya_sharma" />
//                 <InputField icon={<Lock />} label="Password" type="password" placeholder="••••••••" />
//                 <InputField icon={<Home />} label="Address" placeholder="45 MG Road" />
//                 <InputField icon={<MapPin />} label="City" placeholder="Mumbai" />
//                 <InputField icon={<MapPin />} label="Postal Code" placeholder="400001" />
//                 <div className="md:col-span-2">
//                   <InputField icon={<Globe />} label="Country" placeholder="India" />
//                 </div>
//               </div>

//               <div className="mt-12 flex justify-center gap-6">
//                 <button className="px-12 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:shadow-2xl transform hover:scale-105 transition">
//                   Create Course Admin
//                 </button>
//                 <button
//                   onClick={() => setShowAddModal(false)}
//                   className="px-12 py-4 bg-gray-200 text-gray-800 font-bold text-lg rounded-xl hover:bg-gray-300 transition"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // Reusable Input Component
// const InputField = ({ icon, label, ...props }) => (
//   <div>
//     <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
//       {icon}
//       {label}
//     </label>
//     <input
//       className="w-full px-5 py-4 bg-white/70 backdrop-blur-sm rounded-xl border border-white/50 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
//       {...props}
//     />
//   </div>
// );

// export default AcademicManagement;