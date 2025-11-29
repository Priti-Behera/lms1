// src/pages/auth/Signup.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, User, Phone, School, Calendar, Check, ArrowRight } from "lucide-react";

const Signup = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e3a8a]/5 via-white to-green-50/30 flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-0 bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        {/* LEFT SIDE - Motivational & Branding */}
        <div className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-10">
              <div className="text-4xl font-black tracking-tighter">CodeKart</div>
            </div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Your Journey to a <span className="text-green-400">6-Figure Tech Career</span> Starts Here
            </h1>
            <p className="text-xl opacity-90 mb-10">
              Join 50,000+ students learning from India's top mentors with live classes, real projects & 100% placement support.
            </p>

            <div className="space-y-5 text-lg">
              {[
                "Live Interactive Classes Daily",
                "1:1 Mentorship from Industry Experts",
                "100+ Hiring Partners",
                "Lifetime Access + Certificate",
                "Money-Back Guarantee"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <Check className="w-7 h-7 text-green-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div>
                <div className="text-4xl font-bold">50K+</div>
                <div className="text-sm opacity-80">Students Enrolled</div>
              </div>
              <div>
                <div className="text-4xl font-bold">4.9</div>
                <div className="text-sm opacity-80">Average Rating</div>
              </div>
              <div>
                <div className="text-4xl font-bold">₹12 LPA</div>
                <div className="text-sm opacity-80">Avg Placement</div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-16 text-center">
            <p className="text-sm opacity-70">
              © 2025 CodeKart Solutions Pvt. Ltd. • CIN: U72900OR2021PTC036225
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - Login / Sign Up Form */}
        <div className="p-10 lg:p-16 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900">
                {isLogin ? "Welcome Back!" : "Start Your Journey"}
              </h2>
              <p className="mt-3 text-gray-600">
                {isLogin ? "Login to continue learning" : "Create your account in 30 seconds"}
              </p>
            </div>

            {/* Social Login Buttons */}
            <div className="space-y-3 mb-8">
              <button className="w-full flex items-center justify-center gap-3 bg-[#1e40af] text-white py-4 rounded-xl font-medium hover:bg-[#1e3a8a] transition">
                <Mail className="w-5 h-5" />
                Continue with Google
              </button>
              <button className="w-full flex items-center justify-center gap-3 border-2 border-gray-300 py-4 rounded-xl font-medium hover:border-[#1e40af] transition">
                <Phone className="w-5 h-5" />
                Continue with Phone
              </button>
            </div>

            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-4 text-gray-500">OR</span>
              </div>
            </div>

            {/* Form */}
            {!isLogin ? (
              // Sign Up Form
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1e40af] focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1e40af] focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      placeholder="+91 9876543210"
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1e40af] focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Graduation / University</label>
                  <div className="relative">
                    <School className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="B.Tech from KIIT University"
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1e40af] focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1e40af] focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <input type="checkbox" id="terms" className="w-5 h-5 text-[#1e40af] rounded" />
                  <label htmlFor="terms" className="ml-3 text-sm text-gray-600">
                    I agree to the <a href="#" className="text-[#1e40af] font-medium">Terms & Conditions</a> and <a href="#" className="text-[#1e40af] font-medium">Privacy Policy</a>
                  </label>
                </div>

                <button className="w-full bg-gradient-to-r from-[#1e40af] to-green-600 text-white py-5 rounded-xl font-bold text-lg hover:shadow-xl transition transform hover:scale-105">
                  Create Free Account
                </button>
              </form>
            ) : (
              // Login Form
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email or Phone</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="you@example.com or +919876543210"
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1e40af]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1e40af]"
                    />
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-[#1e40af] to-green-600 text-white py-5 rounded-xl font-bold text-lg hover:shadow-xl transition">
                  Login to Dashboard
                </button>
              </form>
            )}

            <div className="mt-10 text-center">
              <p className="text-gray-600">
                {isLogin ? (
                  <>
                    Don't have an account?{" "}
                    <button
                      onClick={() => setIsLogin(false)}
                      className="text-[#1e40af] font-bold hover:underline"
                    >
                      Sign Up Free
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <button
                      onClick={() => setIsLogin(true)}
                      className="text-[#1e40af] font-bold hover:underline"
                    >
                      Login Here
                    </button>
                  </>
                )}
              </p>
            </div>

            <p className="text-center text-xs text-gray-500 mt-10">
              By signing up, you agree to receive course updates via WhatsApp & Email.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;











// // src/pages/auth/Signup.jsx
// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import apiConfig from '../../config/apiConfig';


// const Signup = () => {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     password: '',
//     graduationUniversity: '',
//     termsAccepted: false,
//   });
//   const [loading, setLoading] = useState(false);
//   const [otpSent, setOtpSent] = useState(false);
//   const [emailVerified, setEmailVerified] = useState(false);
//   const [phoneVerified, setPhoneVerified] = useState(false);
//   const [verifyingEmail, setVerifyingEmail] = useState(false);
//   const [verifyingPhone, setVerifyingPhone] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setForm(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const sendOTP = async (type) => {
//     navigate('/otp', { state: { phone: form.phone, email: form.email, type, fromSignup: true } })
//   };


//   const sendEmailOTP = async (type) => {
//     navigate('/verify-email-otp', { state: { phone: form.phone, email: form.email, type, fromSignup: true } })
//   };


//   const handleSignup = async (e) => {
//     e.preventDefault();
//     if (!form.termsAccepted) return alert("Please accept terms & conditions");
//     if (!emailVerified || !phoneVerified) return alert("Please verify both email and phone");

//     setLoading(true);
//     try {
//       const res = await fetch(`${apiConfig.API_BASE_URL}/api/auth/signup`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(form),
//       });
//       const data = await res.json();
//       if (res.ok) {
//         setOtpSent(true);
//       } else {
//         alert(data.message || "Signup failed");
//       }
//     } catch (err) {
//       alert('Network error');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // const handleVerifyComplete = () => {
//   //   window.location.href = '/student/home';
//   // };

//   // if (otpSent) {
//   //   return <VerifyOTP email={form.email} phone={form.phone} onVerify={handleVerifyComplete} />;
//   // }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
//       <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-8">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
//           <p className="text-gray-600 mt-2">Join Cybernetics LMS Today</p>
//         </div>

//         <form onSubmit={handleSignup} className="space-y-5">
//           <div className="grid md:grid-cols-2 gap-5">
//             <input
//               type="text"
//               name="firstName"
//               placeholder="First Name"
//               value={form.firstName}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Last Name"
//               value={form.lastName}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div className="relative">
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 pr-32 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               type="button"
//               onClick={() => sendEmailOTP('email')}
//               disabled={verifyingEmail || emailVerified}
//               className={`absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 text-xs font-medium rounded-md transition ${
//                 emailVerified 
//                   ? 'bg-green-100 text-green-700' 
//                   : 'bg-blue-600 text-white hover:bg-blue-700'
//               } ${verifyingEmail ? 'opacity-50' : ''}`}
//             >
//               {emailVerified ? 'Verified' : verifyingEmail ? 'Sending...' : 'Verify Email'}
//             </button>
//           </div>

//           <div className="relative">
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Mobile Number"
//               value={form.phone}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 pr-36 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               type="button"
//               onClick={() => sendOTP('phone')}
//               disabled={verifyingPhone || phoneVerified}
//               className={`absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 text-xs font-medium rounded-md transition ${
//                 phoneVerified 
//                   ? 'bg-green-100 text-green-700' 
//                   : 'bg-blue-600 text-white hover:bg-blue-700'
//               } ${verifyingPhone ? 'opacity-50' : ''}`}
//             >
//               {phoneVerified ? 'Verified' : verifyingPhone ? 'Sending...' : 'Verify Phone'}
//             </button>
//           </div>

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={handleChange}
//             required
//             minLength="6"
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//           />

//           <input
//             type="text"
//             name="graduationUniversity"
//             placeholder="Graduation University Name"
//             value={form.graduationUniversity}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//           />

//           <label className="flex items-center space-x-3 cursor-pointer">
//             <input
//               type="checkbox"
//               name="termsAccepted"
//               checked={form.termsAccepted}
//               onChange={handleChange}
//               className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
//             />
//             <span className="text-sm text-gray-700">
//               I agree to the <Link to="/terms" className="text-blue-600 underline">Terms & Conditions</Link>
//             </span>
//           </label>

//           <button
//             type="submit"
//             disabled={loading || !form.termsAccepted || !emailVerified || !phoneVerified}
//             className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             {loading ? "Creating Account..." : "Sign Up"}
//           </button>
//         </form>

//         <p className="text-center mt-6 text-gray-600">
//           Already have an account?{' '}
//           <Link to="/login" className="text-blue-600 font-medium hover:underline">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Signup;




