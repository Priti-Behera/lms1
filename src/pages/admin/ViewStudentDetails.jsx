// src/pages/admin/ViewStudentDetails.jsx
import React, { useState, useEffect } from "react";
import { ArrowLeft, User, Mail, Phone, University, Loader2 } from "lucide-react";

const ViewStudentDetails = () => {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock data - replace with real API call later
  useEffect(() => {
    setTimeout(() => {
      setStudent({
        firstName: "Priya",
        lastName: "Sharma",
        university: "Delhi Technological University",
        email: "priya.sharma@student.dtu.ac.in",
        mobile: "+91 98765 43210",
      });
      setLoading(false);
    }, 800);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Student Details</h1>
          <p className="text-gray-600">View complete profile information of the student</p>
        </div>

        {/* Glassmorphic Card */}
        <div className="backdrop-blur-xl bg-white/70 rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
          {loading ? (
            <div className="p-16 flex flex-col items-center justify-center">
              <Loader2 className="w-12 h-12 text-indigo-600 animate-spin mb-4" />
              <p className="text-gray-600">Loading student details...</p>
            </div>
          ) : (
            <div className="p-10 md:p-12 lg:p-16">
              {/* Profile Header */}
              <div className="flex flex-col sm:flex-row items-center gap-8 mb-12">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-32 h-32 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-xl">
                  {student.firstName[0]}{student.lastName[0]}
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h2 className="text-3xl font-bold text-gray-800">
                    {student.firstName} {student.lastName}
                  </h2>
                  <p className="text-indigo-600 font-medium mt-2">Student ID: STU-{Math.floor(Math.random() * 9000 + 1000)}</p>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                <DetailItem
                  icon={<User className="w-6 h-6 text-indigo-600" />}
                  label="First Name"
                  value={student.firstName}
                />
                <DetailItem
                  icon={<User className="w-6 h-6 text-purple-600" />}
                  label="Last Name"
                  value={student.lastName}
                />
                <DetailItem
                  icon={<University className="w-6 h-6 text-pink-600" />}
                  label="Graduation University"
                  value={student.university}
                />
                <DetailItem
                  icon={<Mail className="w-6 h-6 text-green-600" />}
                  label="Email Address"
                  value={student.email}
                />
                <DetailItem
                  icon={<Phone className="w-6 h-6 text-blue-600" />}
                  label="Mobile Number"
                  value={student.mobile}
                  fullWidth
                />
              </div>

              {/* Optional Action Buttons (if needed later) */}
              <div className="mt-12 flex justify-center gap-4">
                <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Send Message
                </button>
                <button className="px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-xl hover:bg-gray-300 transition">
                  Download Profile
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Students List
          </button>
        </div>
      </div>
    </div>
  );
};

// Reusable Detail Item Component
const DetailItem = ({ icon, label, value, fullWidth = false }) => (
  <div className={`${fullWidth ? 'md:col-span-2' : ''}`}>
    <div className="flex items-start gap-4 p-5 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 hover:bg-white/80 transition">
      <div className="mt-1">{icon}</div>
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{label}</p>
        <p className="text-xl font-semibold text-gray-800 mt-1">{value || "-"}</p>
      </div>
    </div>
  </div>
);

export default ViewStudentDetails;