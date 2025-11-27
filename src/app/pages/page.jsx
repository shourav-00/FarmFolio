// 'use client';
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { useAuth } from "../Components/AuthContext";

// export default function LoginPage() {
//   const router = useRouter();
//   const { login } = useAuth();
//   const [loading, setLoading] = useState(false);
//   const [googleLoading, setGoogleLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     try {
//       const response = await fetch('https://farmfolio-server-api.vercel.app/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         login(data.user, data.token);
//         router.push('/');
//       } else {
//         setError(data.error || 'Login failed');
//       }
//     } catch (error) {
//       setError('Login failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleSignIn = async () => {
//     setGoogleLoading(true);
//     setError("");

//     try {
//       // For demo purposes - in real app, you'd use Google OAuth
//       const response = await fetch('https://farmfolio-server-api.vercel.app/api/auth/google', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       const data = await response.json();

//       if (response.ok) {
//         login(data.user, data.token);
//         router.push('/');
//       } else {
//         setError('Google sign in failed. Please try again.');
//       }
//     } catch (error) {
//       // For demo - simulate successful Google auth
//       setTimeout(() => {
//         const demoUser = {
//           id: 'google_123',
//           name: 'Google User',
//           email: 'user@gmail.com',
//           photoURL: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
//         };
//         login(demoUser, 'google_token_demo');
//         router.push('/');
//       }, 1500);
//     } finally {
//       setGoogleLoading(false);
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="min-h-screen bg-green-50 flex items-center justify-center py-8 px-4">
//       <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
//         <h2 className="text-3xl font-bold text-green-800 text-center mb-8">Login</h2>

//         {error && <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">{error}</div>}

//         {/* Google Sign In Button */}
//         <button
//           onClick={handleGoogleSignIn}
//           disabled={googleLoading}
//           className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 px-4 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 mb-6 flex items-center justify-center gap-3"
//         >
//           {googleLoading ? (
//             <div className="w-5 h-5 border-2 border-gray-700 border-t-transparent rounded-full animate-spin"></div>
//           ) : (
//             <svg className="w-5 h-5" viewBox="0 0 24 24">
//               <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//               <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//               <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
//               <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//             </svg>
//           )}
//           {googleLoading ? 'Signing in with Google...' : 'Continue with Google'}
//         </button>

//         <div className="relative mb-6">
//           <div className="absolute inset-0 flex items-center">
//             <div className="w-full border-t border-gray-300"></div>
//           </div>
//           <div className="relative flex justify-center text-sm">
//             <span className="px-2 bg-white text-gray-500">Or continue with email</span>
//           </div>
//         </div>

//         <form onSubmit={handleLogin} className="space-y-4">
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             required
//             className="w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
//           />

//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               placeholder="Password"
//               required
//               className="w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 pr-12"
//             />
//             <button
//               type="button"
//               onClick={togglePasswordVisibility}
//               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-600 hover:text-green-700"
//             >
//               {showPassword ? (
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
//                 </svg>
//               ) : (
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>
//                 </svg>
//               )}
//             </button>
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50"
//           >
//             {loading ? 'Logging in...' : 'Login'}
//           </button>
//         </form>

//         <p className="text-center text-green-600 mt-4">
//           Don't have an account? <Link href="/register" className="font-semibold hover:underline">Register</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// pages/login.jsx - REPLACE your current login with this:
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid email or password");
      } else {
        router.push("/");
      }
    } catch (error) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    setError("");

    try {
      await signIn("google", { callbackUrl: "/" });
    } catch (error) {
      setError("Google sign in failed. Please try again.");
      setGoogleLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center py-8 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-8">
          Login
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        {/* Google Sign In Button */}
        <button
          onClick={handleGoogleSignIn}
          disabled={googleLoading}
          className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 px-4 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 mb-6 flex items-center justify-center gap-3"
        >
          {googleLoading ? (
            <div className="w-5 h-5 border-2 border-gray-700 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
          )}
          {googleLoading ? "Signing in with Google..." : "Continue with Google"}
        </button>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              Or continue with email
            </span>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            disabled={loading}
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
              className="w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 pr-12"
              disabled={loading}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-600 hover:text-green-700"
              disabled={loading}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-green-600 mt-4">
          Don't have an account?{" "}
          <Link href="/register" className="font-semibold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
