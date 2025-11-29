// src/pages/faculty/CourseDetailsFaculty.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { 
  BookOpen, 
  Users, 
  Clock, 
  Calendar, 
  Link, 
  ChevronLeft, 
  Plus, 
  Edit, 
  Trash2, 
  // Added for future delete actions
  ChevronRight,
  CheckCircle,
  FileText,
  Eye,
  Settings
} from 'lucide-react';

import node from '../../assets/node.webp';

export default function CourseDetailsFaculty() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  // MOCK DATA - Faculty View
  const course = {
    id: courseId || "node-201",
    title: "Advanced Node.js",
    code: "CSE-405",
    thumbnail: node,
    instructor: "Dr. Sarah Chen",
    semester: "Fall 2025",
    totalStudents: 48,
    duration: "6 Months",
    status: "Active",
    description: "Master backend development with Node.js, Express, MongoDB, and real-time applications. Build scalable APIs and full-stack projects.",
    schedule: "Tue & Thu, 10:00 AM – 11:30 AM",
    room: "Room A-204"
  };

  const modules = [
    {
      id: 1,
      title: "Module 1: Node.js Fundamentals",
      lessons: [
        { id: 101, title: "Introduction to Node.js", duration: "45 min" },
        { id: 102, title: "Event Loop & Async Programming", duration: "60 min" },
        { id: 103, title: "NPM & Package Management", duration: "30 min" }
      ],
      assessment: {
        title: "Quiz 1: Node.js Basics",
        type: "Quiz",
        totalMarks: 20,
        dueDate: "2025-11-22",
        published: true,
        submissions: 42,
        totalStudents: 48
      }
    },
    {
      id: 2,
      title: "Module 2: Express.js & REST APIs",
      lessons: [
        { id: 201, title: "Setting up Express Server", duration: "50 min" },
        { id: 202, title: "Routing & Middleware", duration: "70 min" },
        { id: 203, title: "Error Handling", duration: "40 min" }
      ],
      assessment: {
        title: "Assignment 1 Build a REST API",
        type: "Assignment",
        totalMarks: 50,
        dueDate: "2025-12-05",
        published: true,
        submissions: 31,
        totalStudents: 48
      }
    },
    {
      id: 3,
      title: "Module 3: Database Integration",
      lessons: [
        { id: 301, title: "MongoDB with Mongoose", duration: "60 min" },
        { id: 302, title: "CRUD Operations", duration: "55 min" }
      ],
      assessment: null  // No assessment yet
    }
  ];

  const [classLink, setClassLink] = useState("https://zoom.us/j/1234567890");
  const [isEditingLink, setIsEditingLink] = useState(false);
  const [tempLink, setTempLink] = useState(classLink);

  const handleSaveLink = () => {
    setClassLink(tempLink);
    setIsEditingLink(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-4 md:p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium mb-6 transition"
      >
        <ChevronLeft className="w-5 h-5" />
        Back to Dashboard
      </button>

      {/* Course Header */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="flex items-start gap-4">
              <img 
                src={course.thumbnail} 
                alt={course.title}
                className="w-24 h-24 rounded-xl object-cover shadow-md"
              />
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-800">{course.title}</h1>
                <p className="text-lg text-indigo-600 font-medium">{course.code}</p>
                <p className="text-sm text-gray-600 mt-1">by {course.instructor}</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Students", value: course.totalStudents, icon: Users, color: "green" },
                { label: "Duration", value: course.duration, icon: Clock, color: "blue" },
                { label: "Semester", value: course.semester, icon: Calendar, color: "purple" },
                { label: "Status", value: course.status, icon: CheckCircle, color: "emerald" }
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="bg-gray-50 rounded-xl p-3">
                    <div className="flex items-center gap-2">
                      <div className={`p-2 rounded-lg bg-${stat.color}-100`}>
                        <Icon className={`w-4 h-4 text-${stat.color}-600`} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">{stat.label}</p>
                        <p className="font-semibold text-gray-800">{stat.value}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Live Class Link */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-5 text-white">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold flex items-center gap-2">
                  <Link className="w-5 h-5" />
                  Live Class Link
                </h3>
                <button
                  onClick={() => setIsEditingLink(true)}
                  className="p-1 hover:bg-white/20 rounded-lg transition"
                >
                  <Edit className="w-4 h-4" />
                </button>
              </div>

              {isEditingLink ? (
                <div className="space-y-3">
                  <input
                    type="url"
                    value={tempLink}
                    onChange={(e) => setTempLink(e.target.value)}
                    placeholder="Paste Zoom/Meet link..."
                    className="w-full px-3 py-2 bg-white/20 backdrop-blur rounded-lg placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <div className="flex gap-2">
                    <button onClick={handleSaveLink} className="flex-1 bg-white text-indigo-600 font-medium py-2 rounded-lg hover:bg-indigo-50">
                      Save
                    </button>
                    <button
                      onClick={() => {
                        setIsEditingLink(false);
                        setTempLink(classLink);
                      }}
                      className="flex-1 bg-white/30 hover:bg-white/40 font-medium py-2 rounded-lg"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <a
                  href={classLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block break-all text-sm bg-white/20 backdrop-blur p-3 rounded-lg hover:bg-white/30 transition"
                >
                  {classLink}
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-gray-700 leading-relaxed">{course.description}</p>
          <div className="mt-4 flex flex-wrap gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {course.schedule}
            </span>
            <span className="flex items-center gap-2">
              <BookOpen class="w-4 h-4" />
              {course.room}
            </span>
          </div>
        </div>
      </div>

      {/* Course Contents - Faculty View */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-indigo-600" />
            Course Contents
          </h2>
          <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
            <Plus className="w-4 h-4" />
            Add Module
          </button>
        </div>

        <div className="space-y-6">
          {modules.map((module) => (
            <div key={module.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-5 flex justify-between items-center">
                <h3 className="text-xl font-bold">{module.title}</h3>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-white/20 rounded-lg transition">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-white/20 rounded-lg transition">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Lessons */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-gray-600" />
                      Lessons ({module.lessons.length})
                    </h4>
                    <button className="text-indigo-600 text-sm font-medium hover:underline">
                      + Add Lesson
                    </button>
                  </div>
                  <ul className="space-y-3">
                    {module.lessons.map((lesson) => (
                      <li key={lesson.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-gray-500" />
                          <div>
                            <p className="font-medium text-gray-800">{lesson.title}</p>
                            <p className="text-xs text-gray-500">{lesson.duration}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="text-gray-500 hover:text-gray-700">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="text-gray-500 hover:text-gray-700">
                            <Edit className="w-4 h-4" />
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Assessment Section - Faculty Controlled */}
                <div className="border-t pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                      <Settings className="w-5 h-5 text-gray-600" />
                      Assessment
                    </h4>
                    {!module.assessment && (
                      <button className="text-indigo-600 text-sm font-medium hover:underline">
                        + Create Assessment
                      </button>
                    )}
                  </div>

                  {module.assessment ? (
                    <div className={`p-5 rounded-xl border-2 ${
                      module.assessment.published 
                        ? 'border-green-200 bg-green-50' 
                        : 'border-gray-200 bg-gray-50'
                    }`}>
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="font-bold text-gray-800 flex items-center gap-2">
                            {module.assessment.title}
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              module.assessment.type === 'Quiz' 
                                ? 'bg-blue-100 text-blue-700' 
                                : 'bg-purple-100 text-purple-700'
                            }`}>
                              {module.assessment.type}
                            </span>
                          </h5>
                          <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-600">
                            <span>Total Marks: <strong>{module.assessment.totalMarks}</strong></span>
                            <span>Due: <strong>{new Date(module.assessment.dueDate).toLocaleDateString()}</strong></span>
                            <span>Submissions: <strong>{module.assessment.submissions}/{module.assessment.totalStudents}</strong></span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm">
                            View Submissions
                          </button>
                          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-500 italic text-center py-8">
                      No assessment created for this module yet.
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-12 py-6 text-center text-sm text-gray-500 border-t border-gray-200">
        © 2025 Cybernetics LMS • Faculty Portal
      </footer>
    </div>
  );
}