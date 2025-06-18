import React, { use, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { Eye, EyeOff } from "lucide-react";
import useTitle from "../hooks/useTitle";
import Animation from "../components/Animation";

const Register = () => {
  useTitle("Register | SportNexus");
  const { createUser, user, setUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(user);

  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  if (user) {
    return <Navigate to="/" replace />;
  }

  const handleUserSignup = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photoURL, email, password);

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;

    if (!hasUppercase) {
      setPasswordError("Password must be at least one Uppercase Letter.");
      return false;
    }
    if (!hasLowercase) {
      setPasswordError("Password must be at least One Lowercase Letter.");
      return false;
    }
    if (!isLongEnough) {
      setPasswordError("Password must be at least 6 Characters Long.");
      return false;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        updateUser({ displayName: name, photoURL: photoURL })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoURL });
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User Sign Up Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(`${location.state ? location.state : "/"}`);
          })
          .catch((error) => {
            console.log(error);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });
            setUser(user);
          });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5 my-5">
      <div className="w-full rounded-md shadow sm:p-8 bg-[#98d0ec] mb-1 text-gray-800">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          SignUp Your Account
        </h2>
        <p className="text-sm text-center text-gray-600">
          Have Account?
          <Link to={"/login"} className="focus:underline hover:underline">
            {" "}
            LogIn Here
          </Link>
        </p>
        <form onSubmit={handleUserSignup} className="space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                User Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="User Name"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Email address"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                photoURL
              </label>
              <input
                type="text"
                name="photoURL"
                id="photoURL"
                required
                placeholder="photoURL"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 dark:text-gray-800 focus:border-violet-600"
                />
                <span
                  className="absolute right-3 top-3 cursor-pointer text-gray-500"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </span>
              </div>
            </div>
            <p>{passwordError}</p>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 font-semibold rounded-md bg-[#37b6f5] text-gray-50"
          >
            Sign Up
          </button>
        </form>
      </div>
      <div className="w-full h-full rounded-md  bg-[#98d0ec] mb-1 text-gray-800">
        <Animation></Animation>
      </div>
    </div>
  );
};

export default Register;
