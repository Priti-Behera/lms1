// src/pages/auth/Signup.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AcademicSignup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    dob: '',
    username: '',
    password: '',
    confirmPassword: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    termsAccepted: false,
  });

  const [passwordError, setPasswordError] = useState('');

  // Validate password match on change
  useEffect(() => {
    if (form.password || form.confirmPassword) {
      if (form.password !== form.confirmPassword) {
        setPasswordError("Passwords do not match");
      } else {
        setPasswordError('');
      }
    } else {
      setPasswordError('');
    }
  }, [form.password, form.confirmPassword]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (!form.termsAccepted) {
      alert('Please accept the Terms & Conditions');
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (form.password.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }

    // Log form data
    console.log('Signup Form Submitted:', form);

    alert('Account created successfully! (Demo mode)');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Create Your Account</h1>
            <p className="text-gray-600 mt-2">Join Cybernetics LMS Academic</p>
          </div>

          <form onSubmit={handleSignup} className="space-y-6">
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            {/* DOB */}
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            {/* Username */}
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            {/* Password */}
            <input
              type="password"
              name="password"
              placeholder="Create Password"
              value={form.password}
              onChange={handleChange}
              required
              minLength="6"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                passwordError ? 'border-red-500' : 'border-gray-300'
              }`}
            />

            {/* Confirm Password */}
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              minLength="6"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                passwordError ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {passwordError && (
              <p className="mt-1 text-sm text-red-600">{passwordError}</p>
            )}

            {/* Address */}
            <textarea
              name="address"
              placeholder="Street Address"
              value={form.address}
              onChange={handleChange}
              required
              rows="3"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            {/* City */}
            <input
              type="text"
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            {/* Postal Code */}
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={form.postalCode}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            {/* Country */}
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={form.country}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            {/* Terms */}
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={form.termsAccepted}
                onChange={handleChange}
                required
                className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">
                I agree to the <Link to="/terms" className="text-blue-600 underline hover:text-blue-800">Terms & Conditions</Link> and <Link to="/privacy" className="text-blue-600 underline hover:text-blue-800">Privacy Policy</Link>
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={!form.termsAccepted || passwordError || !form.password || form.password.length < 6}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Create Account
            </button>
          </form>

          <p className="text-center mt-8 text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 font-medium hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcademicSignup;