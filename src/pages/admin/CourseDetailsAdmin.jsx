// src/pages/admin/CourseDetailsAdmin.jsx
import React, { useState } from "react";
import {
  Calendar, Clock, Link2, Edit3, Plus, Trash2, X, ChevronRight,
  Users, FileText, CheckCircle, AlertCircle, BookOpen, FolderOpen
} from "lucide-react";

const CourseDetailsAdmin = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [showBatchModal, setShowBatchModal] = useState(false);
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [showContentModal, setShowContentModal] = useState(false);

  const [sections] = useState([
    {
      id: 1,
      name: "Week 1 - Introduction",
      modules: [
        {
          id: 1,
          name: "Module 1: Getting Started",
          chapters: ["Welcome & Setup", "Course Overview", "Tools Installation"]
        },
        {
          id: 2,
          name: "Module 2: React Basics",
          chapters: ["JSX & Components", "State & Props", "Event Handling"]
        }
      ]
    },
    {
      id: 2,
      name: "Week 2 - Advanced Concepts",
      modules: [
        {
          id: 3,
          name: "Module 3: Hooks Deep Dive",
          chapters: ["useState & useEffect", "Custom Hooks", "Performance Optimization"]
        }
      ]
    }
  ]);

  const course = {
    name: "React Masterclass 2025",
    batch: { startDate: "2025-01-10", endDate: "2025-04-10", startTime: "07:00 PM", endTime: "09:00 PM" },
    meetingLink: "https://zoom.us/j/987654321",
    description: "Complete React mastery with hooks, context, Redux Toolkit, real projects, and deployment strategies.",
    students: [
      { id: 1, name: "Aarav Sharma", phone: "+91 98765 43210", email: "aarav@gmail.com", assignments: 8, exams: 3 },
      { id: 2, name: "Priya Singh", phone: "+91 87654 32109", email: "priya@yahoo.com", assignments: 10, exams: 3 },
      { id: 3, name: "Rohan Patel", phone: "+91 76543 21098", email: "rohan@outlook.com", assignments: 7, exams: 2 },
    ]
  };




    const [newSection, setNewSection] = useState({
    name: "",
    modules: [
      { name: "", chapters: [""] }
    ]
  });

  // Reset when modal opens
  const openContentModal = () => {
    setNewSection({ name: "", modules: [{ name: "", chapters: [""] }] });
    setShowContentModal(true);
  };






  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">{course.name}</h1>
          <p className="text-gray-600 mt-2">Manage all aspects of this course</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-10 border-b border-gray-200">
          {["overview", "content", "students"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-semibold capitalize transition ${
                activeTab === tab
                  ? "text-indigo-600 border-b-3 border-indigo-600"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              {tab === "overview" && "Overview"}
              {tab === "content" && "Course Content"}
              {tab === "students" && "Students"}
            </button>
          ))}
        </div>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Batch Info */}
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-7 shadow-lg border border-white/60">
              <div className="flex justify-between items-start mb-5">
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-indigo-600" /> Batch Schedule
                </h3>
                <button onClick={() => setShowBatchModal(true)} className="text-indigo-600 hover:text-indigo-800">
                  <Edit3 className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-4 text-gray-700">
                <div className="flex justify-between"><span className="font-medium">Start Date:</span> {course.batch.startDate}</div>
                <div className="flex justify-between"><span className="font-medium">End Date:</span> {course.batch.endDate}</div>
                <div className="flex justify-between"><span className="font-medium">Timing:</span> {course.batch.startTime} - {course.batch.endTime}</div>
              </div>
            </div>

            {/* Meeting Link */}
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-7 shadow-lg border border-white/60">
              <div className="flex justify-between items-start mb-5">
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-3">
                  <Link2 className="w-6 h-6 text-green-600" /> Class Meeting Link
                </h3>
                <button onClick={() => setShowLinkModal(true)} className="text-green-600 hover:text-green-800">
                  <Edit3 className="w-5 h-5" />
                </button>
              </div>
              <p className="text-sm text-gray-600 break-all">{course.meetingLink || "No link set"}</p>
            </div>

            {/* Description */}
            <div className="lg:col-span-2 bg-white/80 backdrop-blur-lg rounded-2xl p-7 shadow-lg border border-white/60">
              <h3 className="text-xl font-bold text-gray-800 mb-5">Course Description</h3>
              <p className="text-gray-700 leading-relaxed">{course.description}</p>
            </div>
          </div>
        )}

        {/* CONTENT TAB */}
        {activeTab === "content" && (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">Course Content</h2>
              {/* <button
                onClick={() => setShowContentModal(true)}
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Plus className="w-5 h-5" /> Add Section
              </button> */}

                <button
                onClick={openContentModal}
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                <Plus className="w-5 h-5" /> Add Section
                </button>


            </div>

            <div className="space-y-6">
              {sections.map((section) => (
                <div key={section.id} className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/60 overflow-hidden">
                  <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50">
                    <h3 className="text-lg font-bold text-indigo-800 flex items-center gap-3">
                      <FolderOpen className="w-6 h-6" /> {section.name}
                    </h3>
                  </div>
                  <div className="p-6 space-y-5">
                    {section.modules.map((module) => (
                      <div key={module.id} className="border-l-4 border-indigo-500 pl-6">
                        <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                          <BookOpen className="w-5 h-5 text-indigo-600" /> {module.name}
                        </h4>
                        <ul className="mt-3 space-y-2">
                          {module.chapters.map((chapter, i) => (
                            <li key={i} className="flex items-center gap-3 text-gray-700">
                              <ChevronRight className="w-4 h-4 text-gray-400" />
                              {chapter}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STUDENTS TAB */}
        {activeTab === "students" && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Enrolled Students ({course.students.length})</h2>
            <div className="grid gap-6">
              {course.students.map((student) => (
                <div key={student.id} className="bg-white/80 backdrop-blur-lg rounded-2xl p-7 shadow-lg border border-white/60">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{student.name}</h3>
                      <div className="mt-3 space-y-2 text-gray-600">
                        <p><span className="font-medium">Email:</span> {student.email}</p>
                        <p><span className="font-medium">Phone:</span> {student.phone}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-green-600 mb-2">
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-bold">{student.assignments} Assignments</span>
                      </div>
                      <div className="flex items-center gap-2 text-indigo-600">
                        <FileText className="w-5 h-5" />
                        <span className="font-bold">{student.exams} Exams Submitted</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Batch Edit Modal */}
        {showBatchModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8">
              <h3 className="text-2xl font-bold mb-6">Edit Batch Schedule</h3>
              <div className="space-y-5">
                <Input label="Start Date" type="date" defaultValue={course.batch.startDate} />
                <Input label="End Date" type="date" defaultValue={course.batch.endDate} />
                <Input label="Start Time" type="time" defaultValue="19:00" />
                <Input label="End Time" type="time" defaultValue="21:00" />
              </div>
              <div className="flex justify-end gap-4 mt-8">
                <button onClick={() => setShowBatchModal(false)} className="px-8 py-3 bg-gray-200 rounded-xl font-bold">Cancel</button>
                <button onClick={() => setShowBatchModal(false)} className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold">Save</button>
              </div>
            </div>
          </div>
        )}

        {/* Meeting Link Modal */}
        {showLinkModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 p-4">
            <div className="bg-white roundup-3xl shadow-2xl max-w-md w-full p-8">
              <h3 className="text-2xl font-bold mb-6">Edit Meeting Link</h3>
              <Input label="Zoom / Meet Link" placeholder="https://zoom.us/j/..." defaultValue={course.meetingLink} />
              <div className="flex justify-end gap-4 mt-8">
                <button onClick={() => setShowLinkModal(false)} className="px-8 py-3 bg-gray-200 rounded-xl font-bold">Cancel</button>
                <button onClick={() => setShowLinkModal(false)} className="px-8 py-3 bg-green-600 text-white rounded-xl font-bold">Update Link</button>
              </div>
            </div>
          </div>
        )}

        {/* ADD SECTION + MODULE + CHAPTER MODAL */}
        {showContentModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 p-4">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto border border-white/60">
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800">Add New Section</h3>
                  <button onClick={() => setShowContentModal(false)} className="p-3 hover:bg-gray-100 rounded-xl transition">
                    <X className="w-7 h-7 text-gray-600" />
                  </button>
                </div>

                {/* Section Name */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Section Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Week 1 - React Fundamentals"
                    className="w-full px-5 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  />
                </div>

                {/* Modules List */}
                <div>
                  <div className="flex justify-between items-center mb-5">
                    <h4 className="text-lg font-bold text-gray-800">Modules & Topics</h4>
                    <button className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition flex items-center gap-2">
                      <Plus className="w-4 h-4" /> Add Module
                    </button>
                  </div>

                  <div className="space-y-6">
                    {/* Module 1 */}
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl border border-indigo-200">
                      <div className="flex items-center justify-between mb-4">
                        <input
                          type="text"
                          placeholder="Module Name (e.g. Introduction to React)"
                          className="text-lg font-semibold bg-transparent border-b-2 border-indigo-400 focus:outline-none w-full max-w-md"
                        />
                        <button className="text-red-500 hover:text-red-700">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Chapters/Topics under this module */}
                      <div className="space-y-3 ml-4">
                        <div className="flex items-center gap-3">
                          <ChevronRight className="w-5 h-5 text-indigo-600" />
                          <input
                            type="text"
                            placeholder="Chapter: What is React?"
                            className="w-full px-4 py-2.5 bg-white/70 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                          />
                          <button className="text-red-500 hover:text-red-700">
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                        <div className="flex items-center gap-3">
                          <ChevronRight className="w-5 h-5 text-indigo-600" />
                          <input
                            type="text"
                            placeholder="Chapter: Setting up Development Environment"
                            className="w-full px-4 py-2.5 bg-white/70 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                          />
                          <button className="text-red-500 hover:text-red-700">
                            <X className="w-5 h-5" />
                          </button>
                        </div>

                        {/* Add New Chapter Button */}
                        <button className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium text-sm mt-3">
                          <Plus className="w-4 h-4" />
                          Add Chapter / Topic
                        </button>
                      </div>
                    </div>
                   
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center gap-6 mt-10">
                  <button
                    onClick={() => setShowContentModal(false)}
                    className="px-10 py-4 bg-gray-100 text-gray-800 font-bold rounded-xl hover:bg-gray-200 transition"
                  >
                    Cancel
                  </button>
                  <button className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition">
                    Create Section
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}



                {/* FULLY DYNAMIC ADD SECTION MODAL */}
        {showContentModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 p-4">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto border border-white/60">
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800">Add New Section</h3>
                  <button
                    onClick={() => setShowContentModal(false)}
                    className="p-3 hover:bg-gray-100 rounded-xl transition"
                  >
                    <X className="w-7 h-7 text-gray-600" />
                  </button>
                </div>

                {/* Section Name */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Section Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Week 1 - React Fundamentals"
                    className="w-full px-5 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  />
                </div>

                {/* Dynamic Modules */}
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="text-lg font-bold text-gray-800">Modules & Topics</h4>
                    <button
                      onClick={() => setNewSection(prev => ({
                        ...prev,
                        modules: [...prev.modules, { name: "", chapters: [""] }]
                      }))}
                      className="px-5 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition flex items-center gap-2"
                    >
                      <Plus className="w-5 h-5" /> Add Module
                    </button>
                  </div>

                  <div className="space-y-6">
                    {newSection.modules.map((module, moduleIndex) => (
                      <div
                        key={moduleIndex}
                        className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl border border-indigo-200"
                      >
                        <div className="flex items-center justify-between mb-5">
                          <input
                            type="text"
                            placeholder="Module Name (e.g. Introduction to React)"
                            value={module.name}
                            onChange={(e) => {
                              const updated = [...newSection.modules];
                              updated[moduleIndex].name = e.target.value;
                              setNewSection({ ...newSection, modules: updated });
                            }}
                            className="text-lg font-semibold bg-transparent border-b-2 border-indigo-400 focus:outline-none w-full max-w-md placeholder-indigo-400"
                          />
                          <button
                            onClick={() => setNewSection(prev => ({
                              ...prev,
                              modules: prev.modules.filter((_, i) => i !== moduleIndex)
                            }))}
                            className="text-red-600 hover:text-red-800 transition"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>

                        {/* Chapters */}
                        <div className="space-y-3 ml-6">
                          {module.chapters.map((chapter, chapIndex) => (
                            <div key={chapIndex} className="flex items-center gap-3">
                              <ChevronRight className="w-5 h-5 text-indigo-600 mt-1" />
                              <input
                                type="text"
                                placeholder="Chapter / Topic name"
                                value={chapter}
                                onChange={(e) => {
                                  const updated = [...newSection.modules];
                                  updated[moduleIndex].chapters[chapIndex] = e.target.value;
                                  setNewSection({ ...newSection, modules: updated });
                                }}
                                className="flex-1 px-4 py-3 bg-white/80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 transition"
                              />
                              <button
                                onClick={() => {
                                  const updated = [...newSection.modules];
                                  updated[moduleIndex].chapters = updated[moduleIndex].chapters.filter((_, i) => i !== chapIndex);
                                  setNewSection({ ...newSection, modules: updated });
                                }}
                                className="text-red-500 hover:text-red-700 transition"
                              >
                                <X className="w-5 h-5" />
                              </button>
                            </div>
                          ))}

                          {/* Add Chapter Button */}
                          <button
                            onClick={() => {
                              const updated = [...newSection.modules];
                              updated[moduleIndex].chapters.push("");
                              setNewSection({ ...newSection, modules: updated });
                            }}
                            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium text-sm mt-4"
                          >
                            <Plus className="w-4 h-4" />
                            Add Chapter / Topic
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center gap-6 mt-10">
                  <button
                    onClick={() => setShowContentModal(false)}
                    className="px-10 py-4 bg-gray-100 text-gray-800 font-bold rounded-xl hover:bg-gray-200 transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      // Here you would save to sections state
                      console.log("New Section:", newSection);
                      alert("Section added successfully!");
                      setShowContentModal(false);
                    }}
                    className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition"
                  >
                    Create Section
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
    <input className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" {...props} />
  </div>
);

export default CourseDetailsAdmin;