// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function RegisterForm() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     college: '',
//     course: '',
//     year: '',
//     phone: ''
//   });
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/register', formData);
//       localStorage.setItem('token', response.data.token);
//       localStorage.setItem('userId', response.data.userId);
//       navigate('/profile');
//     } catch (error) {
//       setError(error.response?.data?.message || 'Registration failed');
//     }
//   };

//   return (
//     <div className="flex w-[100vw] relative justify-center items-center min-h-screen bg-transparent py-10">
//       <form onSubmit={handleSubmit} className="p-8 rounded-lg shadow-xl w-full max-w-lg">
//         <h2 className="text-3xl font-extrabold text-center text-cyan-400 mb-6">Register for TechFest 2024</h2>
        
//         {error && <div className="bg-red-500 text-white text-center py-2 rounded-md mb-4">{error}</div>}

//         <div className="space-y-4">
//           <div className="form-group">
//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full p-3 bg-gray-700 text-white rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400"
//             />
//           </div>

//           <div className="form-group">
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full p-3 bg-gray-700 text-white rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400"
//             />
//           </div>

//           <div className="form-group">
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="w-full p-3 bg-gray-700 text-white rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400"
//             />
//           </div>

//           <div className="form-group">
//             <input
//               type="text"
//               name="college"
//               placeholder="College Name"
//               value={formData.college}
//               onChange={handleChange}
//               required
//               className="w-full p-3 bg-gray-700 text-white rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400"
//             />
//           </div>

//           <div className="form-group">
//             <input
//               type="text"
//               name="course"
//               placeholder="Course"
//               value={formData.course}
//               onChange={handleChange}
//               required
//               className="w-full p-3 bg-gray-700 text-white rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400"
//             />
//           </div>

//           <div className="form-group">
//             <select
//               name="year"
//               value={formData.year}
//               onChange={handleChange}
//               required
//               className="w-full p-3 bg-gray-700 text-white rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400"
//             >
//               <option value="">Select Year</option>
//               <option value="1">1st Year</option>
//               <option value="2">2nd Year</option>
//               <option value="3">3rd Year</option>
//               <option value="4">4th Year</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone Number"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//               className="w-full p-3 bg-gray-700 text-white rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400"
//             />
//           </div>

//           <button type="submit" className="w-full py-3 bg-cyan-500 text-white rounded-lg text-lg font-semibold hover:bg-cyan-400 transition">
//             Register
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function RegisterForm() {
  const [error, setError] = useState('');

  const notify = () => {
    toast("App is under construction");
  };

  return (
    <div className="flex w-[100vw] relative justify-center items-center min-h-screen bg-transparent py-10">
      <form className="p-8 rounded-lg shadow-xl w-full max-w-lg">
        <h2 className="text-3xl font-extrabold text-center text-cyan-400 mb-6">Register for TechFest 2024</h2>

        {error && <div className="bg-red-500 text-white text-center py-2 rounded-md mb-4">{error}</div>}

        <button 
          type="button" 
          className="w-full py-3 bg-cyan-500 text-white rounded-lg text-lg font-semibold hover:bg-cyan-400 transition" 
          onClick={notify}
        >
          Register
        </button>
        
        <ToastContainer />
      </form>
    </div>
  );
}

export default RegisterForm;