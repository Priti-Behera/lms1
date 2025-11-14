// src/pages/auth/Signup.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FacultySignup = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    employmentStatus: '',
    designation: '',
    qualification: '',
    shortCV: '',
    profilePicture: null,
    linkedin: '',
    instagram: '',
    facebook: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  });

  const [profilePreview, setProfilePreview] = useState(null);
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
    const { name, value, type, checked, files } = e.target;

    if (type === 'file') {
      const file = files[0];
      setForm(prev => ({ ...prev, [name]: file }));

      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => setProfilePreview(reader.result);
        reader.readAsDataURL(file);
      } else {
        setProfilePreview(null);
      }
    } else if (type === 'checkbox') {
      setForm(prev => ({ ...prev, [name]: checked }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const countWords = (text) => text.trim().split(/\s+/).filter(word => word.length > 0).length;

  const handleSignup = (e) => {
    e.preventDefault();

    if (!form.termsAccepted) {
      alert('Please accept the Terms & Conditions');
      return;
    }

    if (form.shortCV && countWords(form.shortCV) > 100) {
      alert('Short CV must be 100 words or less');
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
    const formData = { ...form };
    delete formData.profilePicture;
    console.log('Signup Form Submitted:', {
      ...formData,
      profilePicture: form.profilePicture ? form.profilePicture.name : null,
    });

    alert('Account created successfully! (Demo mode)');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Create Your Account</h1>
            <p className="text-gray-600 mt-2">Join Cybernetics LMS Professional Network</p>
          </div>

          <form onSubmit={handleSignup} className="space-y-6">
            {/* Name */}
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Email & Phone */}
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Address */}
            <textarea
              name="address"
              placeholder="Full Address"
              value={form.address}
              onChange={handleChange}
              required
              rows="3"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            {/* Employment Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Employment Status</label>
              <div className="flex space-x-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="employmentStatus"
                    value="employed"
                    checked={form.employmentStatus === 'employed'}
                    onChange={handleChange}
                    required
                    className="mr-2 text-blue-600"
                  />
                  <span>Employed</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="employmentStatus"
                    value="unemployed"
                    checked={form.employmentStatus === 'unemployed'}
                    onChange={handleChange}
                    className="mr-2 text-blue-600"
                  />
                  <span>Unemployed</span>
                </label>
              </div>
            </div>

            {/* Designation & Qualification */}
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                name="designation"
                placeholder="Current Designation"
                value={form.designation}
                onChange={handleChange}
                disabled={form.employmentStatus === 'unemployed'}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
              />
              <input
                type="text"
                name="qualification"
                placeholder="Highest Qualification"
                value={form.qualification}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Short CV */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Short CV (Max 100 words) — {countWords(form.shortCV)} words
              </label>
              <textarea
                name="shortCV"
                placeholder="Briefly describe your experience, skills, and goals..."
                value={form.shortCV}
                onChange={handleChange}
                rows="5"
                maxLength="800"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Profile Picture */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Profile Picture</label>
              <input
                type="file"
                name="profilePicture"
                accept="image/*"
                onChange={handleChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              {profilePreview && (
                <div className="mt-3 flex justify-center">
                  <img src={profilePreview} alt="Preview" className="h-32 w-32 object-cover rounded-full border-4 border-blue-200" />
                </div>
              )}
            </div>

            {/* Social Links */}
            <div className="grid md:grid-cols-3 gap-5">
              <input
                type="url"
                name="linkedin"
                placeholder="LinkedIn Profile URL"
                value={form.linkedin}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="url"
                name="instagram"
                placeholder="Instagram Profile URL"
                value={form.instagram}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="url"
                name="facebook"
                placeholder="Facebook Profile URL"
                value={form.facebook}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div>
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
            </div>

            {/* Confirm Password */}
            <div>
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
            </div>

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

export default FacultySignup;