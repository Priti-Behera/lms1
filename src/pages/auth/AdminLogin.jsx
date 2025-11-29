// src/pages/admin/AdminLogin.jsx
import { useState } from 'react';
import { Mail, Lock, LogIn, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-skyblue-600 via-blue-600 to-pink-darkblue flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo & Title */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-lg rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-2xl">
            <div className="text-white text-3xl font-bold">CL</div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Admin Portal</h1>
          <p className="text-white/80 text-lg">Cybernetics LMS • Administrative Access</p>
        </div>

        {/* Login Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Welcome Back</h2>

          <form className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-white/90 text-sm font-medium mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@cybernetics.edu"
                  className="w-full pl-12 pr-4 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-4 focus:ring-white/30 transition"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-white/90 text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-12 pr-12 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-4 focus:ring-white/30 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-white text-indigo-600 font-bold py-4 rounded-xl hover:bg-indigo-50 transform hover:scale-105 transition duration-200 shadow-lg flex items-center justify-center gap-3"
            >
              <LogIn className="w-5 h-5" />
              Login as Admin
            </button>
          </form>

          {/* Footer Links */}
          <div className="mt-8 text-center text-white/70 text-sm">
            <p>Need access? Contact IT Department</p>
            {/* <Link to="/faculty/login" className="text-white/90 hover:text-white underline mt-2 inline-block">
              ← Back to Faculty Login
            </Link> */}
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-white/60 mt-10 text-sm">
          © 2025 Cybernetics LMS • All Rights Reserved
        </p>
      </div>
    </div>
  );
}