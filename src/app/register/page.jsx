
// 'use client';
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { signIn } from "next-auth/react";

// export default function RegisterPage() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [googleLoading, setGoogleLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   // const handleRegister = async (e) => {
//   //   e.preventDefault();
//   //   setLoading(true);
//   //   setError("");
    
//   //   const name = e.target.name.value;
//   //   const email = e.target.email.value;
//   //   const password = e.target.password.value;
//   //   const photoURL = e.target.photoURL.value;

//   //   try {
//   //     // 1. Register user with your backend
//   //     const response = await fetch('http://localhost:5000/api/register', {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify({ name, email, password, photoURL }),
//   //     });

//   //     const data = await response.json();
      
//   //     if (response.ok) {
//   //       // 2. Auto-login with NextAuth after successful registration
//   //       const result = await signIn('credentials', {
//   //         email,
//   //         password,
//   //         redirect: false,
//   //       });

//   //       if (result?.error) {
//   //         setError('Registration successful but login failed. Please login manually.');
//   //       } else {
//   //         // Success - redirect to home
//   //         router.push('/');
//   //       }
//   //     } else {
//   //       setError(data.error || 'Registration failed');
//   //     }
//   //   } catch (error) {
//   //     setError('Registration failed. Please try again.');
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   const handleRegister = async (e) => {
//   e.preventDefault();
//   setLoading(true);
//   setError("");
  
//   const name = e.target.name.value;
//   const email = e.target.email.value;
//   const password = e.target.password.value;
//   const photoURL = e.target.photoURL.value;

//   try {
//     const response = await fetch('http://localhost:5000/api/register', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ name, email, password, photoURL }),
//     });

//     const data = await response.json();
    
//     if (response.ok) {
//       // Simply redirect to login page with success message
//       router.push('/login?message=Registration successful! Please login with your credentials.');
//     } else {
//       setError(data.error || 'Registration failed');
//     }
//   } catch (error) {
//     setError('Registration failed. Please try again.');
//   } finally {
//     setLoading(false);
//   }
// };
//   const handleGoogleSignUp = async () => {
//     setGoogleLoading(true);
//     setError("");
    
//     try {
//       // Use NextAuth Google provider directly
//       await signIn('google', { callbackUrl: '/' });
//     } catch (error) {
//       setError('Google sign up failed. Please try again.');
//       setGoogleLoading(false);
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="min-h-screen bg-green-50 flex items-center justify-center py-8 px-4">
//       <div className="max-w-md w-full">
//         <div 
//           className="bg-cover bg-center rounded-3xl shadow-2xl overflow-hidden"
//           style={{
//             backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
//           }}
//         >
//           <div className="bg-black bg-opacity-40 backdrop-blur-sm min-h-[700px] flex items-center justify-center p-8">
//             <div className="w-full max-w-sm">
//               <div className="text-center mb-8">
//                 <h1 className="text-4xl font-bold text-white mb-2">Join FarmFolio</h1>
//                 <p className="text-green-100">Create your account to get started</p>
//               </div>

//               {error && (
//                 <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">
//                   {error}
//                 </div>
//               )}

//               {/* Google Sign Up Button */}
//               <button
//                 onClick={handleGoogleSignUp}
//                 disabled={googleLoading}
//                 className="w-full bg-white bg-opacity-90 hover:bg-opacity-100 border border-gray-300 text-gray-700 py-3 px-4 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 mb-6 flex items-center justify-center gap-3"
//               >
//                 {googleLoading ? (
//                   <div className="w-5 h-5 border-2 border-gray-700 border-t-transparent rounded-full animate-spin"></div>
//                 ) : (
//                   <svg className="w-5 h-5" viewBox="0 0 24 24">
//                     <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//                     <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//                     <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
//                     <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//                   </svg>
//                 )}
//                 {googleLoading ? 'Signing up with Google...' : 'Continue with Google'}
//               </button>

//               <div className="relative mb-6">
//                 <div className="absolute inset-0 flex items-center">
//                   <div className="w-full border-t border-green-300 border-opacity-50"></div>
//                 </div>
//                 <div className="relative flex justify-center text-sm">
//                   <span className="px-2 bg-transparent text-green-100">Or sign up with email</span>
//                 </div>
//               </div>

//               <form onSubmit={handleRegister}>
//                 <div className="space-y-4">
//                   {/* Full Name Field */}
//                   <div>
//                     <label className="block text-white text-sm font-medium mb-2">
//                       Full Name
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       required
//                       className="w-full px-4 py-3 bg-white bg-opacity-90 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
//                       placeholder="Enter your full name"
//                       disabled={loading}
//                     />
//                   </div>

//                   {/* Email Field */}
//                   <div>
//                     <label className="block text-white text-sm font-medium mb-2">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       required
//                       className="w-full px-4 py-3 bg-white bg-opacity-90 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
//                       placeholder="Enter your email"
//                       disabled={loading}
//                     />
//                   </div>

//                   {/* Password Field */}
//                   <div>
//                     <label className="block text-white text-sm font-medium mb-2">
//                       Password
//                     </label>
//                     <div className="relative">
//                       <input
//                         type={showPassword ? "text" : "password"}
//                         name="password"
//                         required
//                         className="w-full px-4 py-3 bg-white bg-opacity-90 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 pr-12"
//                         placeholder="Enter password"
//                         disabled={loading}
//                       />
//                       <button
//                         type="button"
//                         onClick={togglePasswordVisibility}
//                         className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-600 hover:text-green-700 transition-colors"
//                         disabled={loading}
//                       >
//                         {showPassword ? '🙈' : '👁️'}
//                       </button>
//                     </div>
//                   </div>

//                   {/* Photo URL Field */}
//                   <div>
//                     <label className="block text-white text-sm font-medium mb-2">
//                       Photo URL (Optional)
//                     </label>
//                     <input
//                       type="text"
//                       name="photoURL"
//                       className="w-full px-4 py-3 bg-white bg-opacity-90 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
//                       placeholder="Enter photo URL"
//                       disabled={loading}
//                     />
//                   </div>

//                   {/* Terms and Conditions */}
//                   <div className="flex items-center gap-3">
//                     <input
//                       type="checkbox"
//                       required
//                       className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
//                       disabled={loading}
//                     />
//                     <label className="text-green-100 text-sm">
//                       I agree to the Terms and Conditions
//                     </label>
//                   </div>

//                   {/* Register Button */}
//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
//                   >
//                     {loading ? (
//                       <>
//                         <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                         Creating Account...
//                       </>
//                     ) : (
//                       'Create Account'
//                     )}
//                   </button>
//                 </div>
//               </form>

//               {/* Login Link */}
//               <p className="text-center text-green-100 mt-6">
//                 Already have an account?{" "}
//                 <Link 
//                   href="/login" 
//                   className="font-semibold text-white hover:text-green-200 transition-colors border-b border-white border-opacity-0 hover:border-opacity-100"
//                 >
//                   SIGN IN
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





// 'use client';
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { signIn } from "next-auth/react";

// export default function RegisterPage() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [googleLoading, setGoogleLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

// const handleRegister = async (e) => {
//   e.preventDefault();
//   setLoading(true);
//   setError("");
  
//   const name = e.target.name.value;
//   const email = e.target.email.value;
//   const password = e.target.password.value;
//   const photoURL = e.target.photoURL.value;

//   try {
//     console.log('📝 Starting registration...');
//     console.log('📝 Registration data:', { name, email, password: '***', photoURL });
    
//     // 1. Register user with your backend
//     const response = await fetch('http://localhost:5000/api/register', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ name, email, password, photoURL }),
//     });

//     const data = await response.json();
//     console.log('📝 Registration response status:', response.status);
//     console.log('📝 Registration response data:', data);
    
//     if (response.ok) {
//       console.log('✅ Registration successful, attempting auto-login...');
//       console.log('🔐 Auto-login credentials:', { email, password: '***' });
      
//       // 2. Auto-login with NextAuth
//       const result = await signIn('credentials', {
//         email,
//         password,
//         redirect: false,
//       });

//       console.log('🔐 Auto-login result:', result);

//       if (result?.error) {
//         console.log('❌ Auto-login failed with error:', result.error);
//         setError('Registration successful but login failed. Please login manually.');
//       } else {
//         console.log('✅ Auto-login successful, redirecting to home');
//         alert('🎉 Registration successful! Welcome to FarmFolio!');
//         window.location.href = '/';
//       }
//     } else {
//       setError(data.error || 'Registration failed');
//     }
//   } catch (error) {
//     console.error('💥 Registration error:', error);
//     setError('Registration failed. Please try again.');
//   } finally {
//     setLoading(false);
//   }
// };
//   const handleGoogleSignUp = async () => {
//     setGoogleLoading(true);
//     setError("");
    
//     try {
//       await signIn('google', { callbackUrl: '/' });
//     } catch (error) {
//       setError('Google sign up failed. Please try again.');
//       setGoogleLoading(false);
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="min-h-screen bg-green-50 flex items-center justify-center py-8 px-4">
//       <div className="max-w-md w-full">
//         <div 
//           className="bg-cover bg-center rounded-3xl shadow-2xl overflow-hidden"
//           style={{
//             backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
//           }}
//         >
//           <div className="bg-black bg-opacity-40 backdrop-blur-sm min-h-[700px] flex items-center justify-center p-8">
//             <div className="w-full max-w-sm">
//               <div className="text-center mb-8">
//                 <h1 className="text-4xl font-bold text-white mb-2">Join FarmFolio</h1>
//                 <p className="text-green-100">Create your account to get started</p>
//               </div>

//               {error && (
//                 <div className={`px-4 py-3 rounded-lg mb-6 text-sm ${
//                   error.includes('successful') 
//                     ? 'bg-green-100 border border-green-400 text-green-700' 
//                     : 'bg-red-100 border border-red-400 text-red-700'
//                 }`}>
//                   {error}
//                 </div>
//               )}

//               {/* Google Sign Up Button */}
//               <button
//                 onClick={handleGoogleSignUp}
//                 disabled={googleLoading}
//                 className="w-full bg-white bg-opacity-90 hover:bg-opacity-100 border border-gray-300 text-gray-700 py-3 px-4 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 mb-6 flex items-center justify-center gap-3"
//               >
//                 {googleLoading ? (
//                   <div className="w-5 h-5 border-2 border-gray-700 border-t-transparent rounded-full animate-spin"></div>
//                 ) : (
//                   <svg className="w-5 h-5" viewBox="0 0 24 24">
//                     <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//                     <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//                     <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
//                     <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//                   </svg>
//                 )}
//                 {googleLoading ? 'Signing up with Google...' : 'Continue with Google'}
//               </button>

//               <div className="relative mb-6">
//                 <div className="absolute inset-0 flex items-center">
//                   <div className="w-full border-t border-green-300 border-opacity-50"></div>
//                 </div>
//                 <div className="relative flex justify-center text-sm">
//                   <span className="px-2 bg-transparent text-green-100">Or sign up with email</span>
//                 </div>
//               </div>

//               <form onSubmit={handleRegister}>
//                 <div className="space-y-4">
//                   {/* Full Name Field */}
//                   <div>
//                     <label className="block text-white text-sm font-medium mb-2">
//                       Full Name
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       required
//                       className="w-full px-4 py-3 bg-white bg-opacity-90 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
//                       placeholder="Enter your full name"
//                       disabled={loading}
//                     />
//                   </div>

//                   {/* Email Field */}
//                   <div>
//                     <label className="block text-white text-sm font-medium mb-2">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       required
//                       className="w-full px-4 py-3 bg-white bg-opacity-90 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
//                       placeholder="Enter your email"
//                       disabled={loading}
//                     />
//                   </div>

//                   {/* Password Field */}
//                   <div>
//                     <label className="block text-white text-sm font-medium mb-2">
//                       Password
//                     </label>
//                     <div className="relative">
//                       <input
//                         type={showPassword ? "text" : "password"}
//                         name="password"
//                         required
//                         className="w-full px-4 py-3 bg-white bg-opacity-90 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 pr-12"
//                         placeholder="Enter password"
//                         disabled={loading}
//                       />
//                       <button
//                         type="button"
//                         onClick={togglePasswordVisibility}
//                         className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-600 hover:text-green-700 transition-colors"
//                         disabled={loading}
//                       >
//                         {showPassword ? '🙈' : '👁️'}
//                       </button>
//                     </div>
//                   </div>

//                   {/* Photo URL Field */}
//                   <div>
//                     <label className="block text-white text-sm font-medium mb-2">
//                       Photo URL (Optional)
//                     </label>
//                     <input
//                       type="url"
//                       name="photoURL"
//                       className="w-full px-4 py-3 bg-white bg-opacity-90 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
//                       placeholder="https://example.com/photo.jpg"
//                       disabled={loading}
//                     />
//                   </div>

//                   {/* Terms and Conditions */}
//                   <div className="flex items-center gap-3">
//                     <input
//                       type="checkbox"
//                       required
//                       className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
//                       disabled={loading}
//                     />
//                     <label className="text-green-100 text-sm">
//                       I agree to the Terms and Conditions
//                     </label>
//                   </div>

//                   {/* Register Button */}
//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
//                   >
//                     {loading ? (
//                       <>
//                         <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                         Creating Account...
//                       </>
//                     ) : (
//                       'Create Account'
//                     )}
//                   </button>
//                 </div>
//               </form>

//               {/* Login Link */}
//               <p className="text-center text-green-100 mt-6">
//                 Already have an account?{" "}
//                 <Link 
//                   href="/login" 
//                   className="font-semibold text-white hover:text-green-200 transition-colors border-b border-white border-opacity-0 hover:border-opacity-100"
//                 >
//                   SIGN IN
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photoURL.value;

    try {
      // 1. Register user with your backend
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, photoURL }),
      });

      const data = await response.json();
      
      if (response.ok) {
        // Add a small delay to ensure database is ready
        await new Promise(resolve => setTimeout(resolve, 300));
        
        // 2. Auto-login with NextAuth
        const result = await signIn('credentials', {
          email,
          password,
          redirect: false,
        });

        if (result?.error) {
          // If auto-login fails, redirect to login with success message
          router.push('/login?message=Registration successful! Please login.');
        } else {
          // Success - redirect to home
          alert('🎉 Registration successful! Welcome to FarmFolio!');
          window.location.href = '/';
        }
      } else {
        setError(data.error || 'Registration failed');
      }
    } catch (error) {
      setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setGoogleLoading(true);
    setError("");
    
    try {
      await signIn('google', { callbackUrl: '/' });
    } catch (error) {
      setError('Google sign up failed. Please try again.');
      setGoogleLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center py-8 px-4">
      <div className="max-w-md w-full">
        <div 
          className="bg-cover bg-center rounded-3xl shadow-2xl overflow-hidden"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          }}
        >
          <div className="bg-black bg-opacity-40 backdrop-blur-sm min-h-[700px] flex items-center justify-center p-8">
            <div className="w-full max-w-sm">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-white mb-2">Join FarmFolio</h1>
                <p className="text-green-100">Create your account to get started</p>
              </div>

              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">
                  {error}
                </div>
              )}

              {/* Google Sign Up Button */}
              <button
                onClick={handleGoogleSignUp}
                disabled={googleLoading}
                className="w-full bg-white bg-opacity-90 hover:bg-opacity-100 border border-gray-300 text-gray-700 py-3 px-4 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 mb-6 flex items-center justify-center gap-3"
              >
                {googleLoading ? (
                  <div className="w-5 h-5 border-2 border-gray-700 border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                )}
                {googleLoading ? 'Signing up with Google...' : 'Continue with Google'}
              </button>

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-green-300 border-opacity-50"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-transparent text-green-100">Or sign up with email</span>
                </div>
              </div>

              <form onSubmit={handleRegister}>
                <div className="space-y-4">
                  {/* Full Name Field */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-white bg-opacity-90 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                      disabled={loading}
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-white bg-opacity-90 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email"
                      disabled={loading}
                    />
                  </div>

                  {/* Password Field */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        required
                        className="w-full px-4 py-3 bg-white bg-opacity-90 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 pr-12"
                        placeholder="Enter password"
                        disabled={loading}
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-600 hover:text-green-700 transition-colors"
                        disabled={loading}
                      >
                        {showPassword ? '🙈' : '👁️'}
                      </button>
                    </div>
                  </div>

                  {/* Photo URL Field */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Photo URL (Optional)
                    </label>
                    <input
                      type="url"
                      name="photoURL"
                      className="w-full px-4 py-3 bg-white bg-opacity-90 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      placeholder="https://example.com/photo.jpg"
                      disabled={loading}
                    />
                  </div>

                  {/* Terms and Conditions */}
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      required
                      className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
                      disabled={loading}
                    />
                    <label className="text-green-100 text-sm">
                      I agree to the Terms and Conditions
                    </label>
                  </div>

                  {/* Register Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Creating Account...
                      </>
                    ) : (
                      'Create Account'
                    )}
                  </button>
                </div>
              </form>

              {/* Login Link */}
              <p className="text-center text-green-100 mt-6">
                Already have an account?{" "}
                <Link 
                  href="/login" 
                  className="font-semibold text-white hover:text-green-200 transition-colors border-b border-white border-opacity-0 hover:border-opacity-100"
                >
                  SIGN IN
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}