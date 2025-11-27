// 'use client';
// import { useState } from 'react';
// import { signIn } from 'next-auth/react';
// import { useRouter, useSearchParams } from 'next/navigation';
// import Link from 'next/link';
// //import { toast } from 'react-toastify';
// import { FaEye, FaRegEyeSlash } from 'react-icons/fa';
// import toast from 'react-hot-toast';


// const Login = () => {
//   const [passEye, setPassEye] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const callbackUrl = searchParams.get('callbackUrl') || '/';

// const message = searchParams.get('message');

//   const handleEyeVisibility = () => {
//     setPassEye(!passEye);
//   };

//   const handleGoogleSignIn = async () => {
//     try {
//       setLoading(true);
//       await signIn('google', { 
//         callbackUrl,
//         redirect: true 
//       });
//     } catch (err) {
//       console.log(err.message);
//       toast.error('Google sign-in failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleEmailSignIn = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const formData = new FormData(e.target);
//     const email = formData.get('email');
//     const password = formData.get('password');

//     try {
//       const result = await signIn('credentials', {
//         email,
//         password,
//         redirect: false,
//       });

//       if (result?.error) {
//         toast.error(result.error);
//       } else if (result?.ok) {
//         toast.success('Logged In Successfully');
//         router.push(callbackUrl);
//       }
//     } catch (err) {
//       toast.error(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div className="text-center">
//           <h1 className="text-4xl my-2">Login</h1>
//           <h1 className="text-gray-600">Please enter your e-mail and password:</h1>
//         </div>

//         <div className="mt-5">
//           <form onSubmit={handleEmailSignIn}>
//             <fieldset className="space-y-4">
//               {/* Email Field */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Email:
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   required
//                   className="input w-full h-[50px] border-2 border-gray-400 focus:outline-none focus:border-indigo-500 rounded-md px-3"
//                   placeholder="Enter your email"
//                 />
//               </div>

//               {/* Password Field */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Password:
//                 </label>
//                 <div className="relative">
//                   <input
//                     type={passEye ? "text" : "password"}
//                     name="password"
//                     required
//                     className="input w-full h-[50px] border-2 border-gray-400 focus:outline-none focus:border-indigo-500 rounded-md px-3 pr-10"
//                     placeholder="Enter your password"
//                   />
//                   <span
//                     onClick={handleEyeVisibility}
//                     className="absolute top-3 right-3 cursor-pointer text-gray-500"
//                   >
//                     {passEye ? <FaEye /> : <FaRegEyeSlash />}
//                   </span>
//                 </div>
//               </div>

//               {/* Login Button */}
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="btn btn-neutral w-full h-[50px] border-none relative group overflow-hidden"
//               >
//                 <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
//                   {loading ? 'Signing in...' : 'Login'}
//                 </span>
//                 <span className="absolute bg-white w-0 h-full right-0 transition-all duration-300 group-hover:w-full"></span>
//               </button>

//               {/* Register Link */}
//               <p className="text-center text-gray-600">
//                 Don't have an account?
//                 <Link href="/register" className="ml-1 border-b border-b-black hover:text-indigo-600">
//                   CREATE ONE
//                 </Link>
//               </p>

//               {/* Divider */}
//               <div className="relative my-4">
//                 <div className="absolute inset-0 flex items-center">
//                   <div className="w-full border-t border-gray-300" />
//                 </div>
//                 <div className="relative flex justify-center text-sm">
//                   <span className="px-2 bg-gray-50 text-gray-500">Or continue with</span>
//                 </div>
//               </div>

//               {/* Google Sign In Button */}
//               <button
//                 onClick={handleGoogleSignIn}
//                 type="button"
//                 disabled={loading}
//                 className="btn bg-white text-black border-gray-300 hover:bg-gray-50 w-full flex items-center justify-center gap-3"
//               >
//                 <svg
//                   aria-label="Google logo"
//                   width="16"
//                   height="16"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 512 512"
//                 >
//                   <g>
//                     <path d="m0 0H512V512H0" fill="#fff"></path>
//                     <path
//                       fill="#34a853"
//                       d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
//                     ></path>
//                     <path
//                       fill="#4285f4"
//                       d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
//                     ></path>
//                     <path
//                       fill="#fbbc02"
//                       d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
//                     ></path>
//                     <path
//                       fill="#ea4335"
//                       d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
//                     ></path>
//                   </g>
//                 </svg>
//                 Login with Google
//               </button>
//             </fieldset>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;




'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Login = () => {
  const [passEye, setPassEye] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';
  const message = searchParams.get('message');

  const handleEyeVisibility = () => {
    setPassEye(!passEye);
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      await signIn('google', { 
        callbackUrl,
        redirect: true 
      });
    } catch (err) {
      console.log(err.message);
      toast.error('Google sign-in failed');
    } finally {
      setLoading(false);
    }
  };

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        toast.error(result.error);
      } else if (result?.ok) {
        toast.success('Logged In Successfully');
        router.push(callbackUrl);
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl my-2">Login</h1>
          <h1 className="text-gray-600">Please enter your e-mail and password:</h1>
        </div>

        {/* Success Message from Registration */}
        {message && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
            {message}
          </div>
        )}

        <div className="mt-5">
          <form onSubmit={handleEmailSignIn}>
            <fieldset className="space-y-4">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="input w-full h-[50px] border-2 border-gray-400 focus:outline-none focus:border-indigo-500 rounded-md px-3"
                  placeholder="Enter your email"
                />
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password:
                </label>
                <div className="relative">
                  <input
                    type={passEye ? "text" : "password"}
                    name="password"
                    required
                    className="input w-full h-[50px] border-2 border-gray-400 focus:outline-none focus:border-indigo-500 rounded-md px-3 pr-10"
                    placeholder="Enter your password"
                  />
                  <span
                    onClick={handleEyeVisibility}
                    className="absolute top-3 right-3 cursor-pointer text-gray-500"
                  >
                    {passEye ? <FaEye /> : <FaRegEyeSlash />}
                  </span>
                </div>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="btn w-full h-[50px] bg-indigo-600 text-white border-none hover:bg-indigo-700 disabled:opacity-50 rounded-md font-semibold"
              >
                {loading ? 'Signing in...' : 'Login'}
              </button>

              {/* Register Link */}
              <p className="text-center text-gray-600">
                Don't have an account?
                <Link href="/register" className="ml-1 border-b border-b-black hover:text-indigo-600">
                  CREATE ONE
                </Link>
              </p>

              {/* Divider */}
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-50 text-gray-500">Or continue with</span>
                </div>
              </div>

              {/* Google Sign In Button */}
              <button
                onClick={handleGoogleSignIn}
                type="button"
                disabled={loading}
                className="btn bg-white text-black border-gray-300 hover:bg-gray-50 w-full flex items-center justify-center gap-3 py-3 rounded-md border"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;